import test from 'node:test';
import assert from 'node:assert/strict';
import { browserSession } from './browser-helper.mjs';

test('public routes and separate wedding themes, fonts, avatars, drag and real PNG export', { timeout: 120000 }, async () => {
    const browser = await browserSession();
    try {
        for (const route of ['/', '/privacy.html', '/wedding-card.html', '/wedding-card', '/?lang=gu', '/js/state.js', '/js/filename.js', '/styles/clarity.css']) {
            const response = await fetch(browser.origin + route);
            assert.equal(response.status, 200, route);
        }
        for (const method of ['GET', 'HEAD']) {
            const response = await fetch(browser.origin + '/Marriage-Biodata.html', { method });
            assert.equal(response.status, 200, `${method} print page`);
            assert.match(response.headers.get('content-type'), /^text\/html\b/);
            const body = await response.text();
            if (method === 'GET') {
                assert.match(body, /id="printInstructions"/);
                assert.match(body, /class="biodata-wrapper"/);
            } else assert.equal(body, '');
        }
        assert.equal((await fetch(browser.origin + '/package.json')).status, 404);
        await browser.command('Emulation.setDeviceMetricsOverride', { width: 1440, height: 1000, deviceScaleFactor: 1, mobile: false });
        await browser.open('/wedding-card.html');
        const result = await browser.evaluate(`(async () => {
            const fire = (id,value) => {const input=document.getElementById(id);input.value=value;input.dispatchEvent(new Event('input',{bubbles:true}));};
            fire('brideName','Synthetic Bride');fire('groomName','Synthetic Groom');
            fire('venue','Synthetic Venue');fire('message','Synthetic invitation');
            const themes=[...document.querySelectorAll('.theme-btn')];
            const fonts=[...document.querySelectorAll('.font-btn')];
            const avatars=[...document.querySelectorAll('.avatar-btn')];
            for(const button of [...themes,...fonts,...avatars]) {
                button.click();
                if(!button.classList.contains('active')) throw new Error('Selection did not activate');
            }
            const avatar=document.getElementById('cardAvatar'),rect=avatar.getBoundingClientRect();
            avatar.dispatchEvent(new MouseEvent('mousedown',{bubbles:true,clientX:rect.left+10,clientY:rect.top+10}));
            document.dispatchEvent(new MouseEvent('mousemove',{bubbles:true,clientX:rect.left+40,clientY:rect.top+45}));
            document.dispatchEvent(new MouseEvent('mouseup',{bubbles:true}));
            const moved=!!avatar.style.left && !!avatar.style.top;
            let png;
            const click=HTMLAnchorElement.prototype.click;
            HTMLAnchorElement.prototype.click=function(){if(this.download)png={name:this.download,href:this.href};else click.call(this);};
            document.getElementById('downloadBtn').click();
            for(let i=0;i<200&&!png;i++)await new Promise(r=>setTimeout(r,50));
            HTMLAnchorElement.prototype.click=click;
            return {themes:themes.length,fonts:fonts.length,avatars:avatars.length,moved,png:png?{name:png.name,prefix:png.href.slice(0,22),size:png.href.length}:null,bride:document.getElementById('cardBride').textContent,enabled:!document.getElementById('downloadBtn').disabled};
        })()`);
        assert.equal(result.themes,4);assert.equal(result.fonts,3);assert.equal(result.avatars,6);
        assert.equal(result.moved,true);assert.equal(result.bride,'Synthetic Bride');
        assert.equal(result.png?.prefix,'data:image/png;base64,');
        assert.ok(result.png.size>5000);assert.equal(result.enabled,true);
        await browser.command('Emulation.setDeviceMetricsOverride', { width: 390, height: 844, deviceScaleFactor: 1, mobile: true });
        const mobile = await browser.evaluate(`(() => {
            const toggle=document.getElementById('mobileViewToggle');
            toggle.click();
            const shown=document.getElementById('canvasArea').classList.contains('mobile-show');
            const avatar=document.getElementById('cardAvatar'),rect=avatar.getBoundingClientRect();
            const touch=(x,y)=>new Touch({identifier:1,target:avatar,clientX:x,clientY:y});
            avatar.dispatchEvent(new TouchEvent('touchstart',{bubbles:true,touches:[touch(rect.left+5,rect.top+5)]}));
            document.dispatchEvent(new TouchEvent('touchmove',{bubbles:true,cancelable:true,touches:[touch(rect.left+25,rect.top+25)]}));
            document.dispatchEvent(new TouchEvent('touchend',{bubbles:true,touches:[]}));
            const moved=avatar.style.left;
            toggle.click();
            return {shown,moved,back:!document.getElementById('sidebar').classList.contains('mobile-hide')};
        })()`);
        assert.equal(mobile.shown,true);assert.equal(mobile.back,true);assert.ok(mobile.moved);
        assert.deepEqual(browser.events.filter(e=>e.method==='Runtime.exceptionThrown'),[]);
    } finally { await browser.close(); }
});
