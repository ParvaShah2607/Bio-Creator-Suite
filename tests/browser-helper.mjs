import { spawn } from 'node:child_process';
import { access, mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { createStaticServer } from '../script/serve-static.mjs';

export async function browserSession() {
    const candidates = [process.env.CHROME_PATH, 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe'].filter(Boolean);
    let executable;
    for (const candidate of candidates) {
        try { await access(candidate); executable = candidate; break; }
        catch (error) { if (error.code !== 'ENOENT') throw error; }
    }
    if (!executable) throw new Error('Install no packages: point CHROME_PATH at an existing Chrome/Edge executable to run browser tests.');
    const profile = await mkdtemp(path.join(tmpdir(), 'biodata-test-'));
    const server = createStaticServer();
    await new Promise((resolve, reject) => { server.once('error', reject); server.listen(0, '127.0.0.1', resolve); });
    const origin = `http://127.0.0.1:${server.address().port}`;
    const child = spawn(executable, ['--headless', '--disable-gpu', '--no-first-run', '--disable-background-networking', '--remote-debugging-pipe', `--user-data-dir=${profile}`], { stdio: ['ignore', 'ignore', 'pipe', 'pipe', 'pipe'] });
    const pending = new Map();
    const events = [];
    let id = 0, buffer = '';
    child.stderr.resume();
    child.stdio[4].on('data', chunk => {
        buffer += chunk.toString();
        let end;
        while ((end = buffer.indexOf('\0')) >= 0) {
            const message = JSON.parse(buffer.slice(0, end)); buffer = buffer.slice(end + 1);
            if (message.id && pending.has(message.id)) {
                const promise = pending.get(message.id); pending.delete(message.id); clearTimeout(promise.timer);
                if (message.error) promise.reject(new Error(message.error.message)); else promise.resolve(message.result);
            } else events.push(message);
        }
    });
    function send(method, params = {}, sessionId) {
        return new Promise((resolve, reject) => {
            const callId = ++id;
            const timer = setTimeout(() => { pending.delete(callId); reject(new Error(`Browser command timed out: ${method}`)); }, 60000);
            pending.set(callId, { resolve, reject, timer });
            child.stdio[3].write(JSON.stringify({ id: callId, method, params, ...(sessionId ? { sessionId } : {}) }) + '\0');
        });
    }
    const { targetId } = await send('Target.createTarget', { url: 'about:blank' });
    const { sessionId } = await send('Target.attachToTarget', { targetId, flatten: true });
    const command = (method, params) => send(method, params, sessionId);
    await command('Runtime.enable');
    await command('Page.enable');
    const evaluate = async expression => {
        const result = await command('Runtime.evaluate', { expression, awaitPromise: true, returnByValue: true, userGesture: true });
        if (result.exceptionDetails) throw new Error(result.exceptionDetails.exception?.description || result.exceptionDetails.text);
        return result.result.value;
    };
    return {
        origin, command, evaluate, events,
        rootCommand: send,
        async attach(targetId) {
            const { sessionId: attached } = await send('Target.attachToTarget', { targetId, flatten: true });
            return (method, params) => send(method, params, attached);
        },
        async open(url = '/') {
            await command('Page.navigate', { url: origin + url });
            for (let attempt = 0; attempt < 100; attempt++) {
                if (await evaluate(`document.readyState === 'complete' && location.origin === ${JSON.stringify(origin)}`)) return;
                await new Promise(resolve => setTimeout(resolve, 100));
            }
            throw new Error('Page did not finish loading');
        },
        async close() {
            await send('Browser.close');
            if (child.exitCode === null) await new Promise(resolve => child.once('exit', resolve));
            server.closeAllConnections();
            await new Promise(resolve => server.close(resolve));
            await rm(profile, { recursive: true, force: true, maxRetries: 5, retryDelay: 200 });
        }
    };
}
