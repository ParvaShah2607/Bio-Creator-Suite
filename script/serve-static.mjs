import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.png': 'image/png', '.ico': 'image/x-icon', '.xml': 'application/xml', '.txt': 'text/plain' };
const publicFiles = new Set(['index.html', 'Marriage-Biodata.html', 'script.js', 'style.css', 'privacy.html', 'wedding-card.html', 'favicon.png', 'favicon.ico', 'robots.txt', 'sitemap.xml']);

export function createStaticServer() {
    return createServer(async (request, response) => {
        if (!['GET', 'HEAD'].includes(request.method)) {
            response.writeHead(405, { Allow: 'GET, HEAD' }).end('Read-only server');
            return;
        }
        const pathname = new URL(request.url, 'http://localhost').pathname;
        let name = pathname.slice(1) || 'index.html';
        if (name === 'wedding-card') name = 'wedding-card.html';
        if (!publicFiles.has(name) && !/^(js\/[a-z-]+\.js|styles\/[a-z-]+\.css)$/.test(name)) {
            response.writeHead(404).end('Not found');
            return;
        }
        try {
            const data = await readFile(path.join(root, name));
            response.writeHead(200, { 'Content-Type': types[path.extname(name)] || 'application/octet-stream', 'Cache-Control': 'no-store' });
            response.end(request.method === 'HEAD' ? undefined : data);
        } catch (error) {
            if (error.code !== 'ENOENT') console.error('Static file read failed:', error.code);
            response.writeHead(error.code === 'ENOENT' ? 404 : 500).end('Unable to serve file');
        }
    });
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
    const server = createStaticServer();
    server.on('error', error => { console.error('Static server failed:', error.code); process.exitCode = 1; });
    server.listen(4173, '127.0.0.1', () => console.log('Static preview: http://127.0.0.1:4173'));
}
