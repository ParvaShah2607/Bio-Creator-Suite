import test from 'node:test';
import assert from 'node:assert/strict';
import { browserSession } from './browser-helper.mjs';

test('keyboard dialogs, four-language reflow, labels and memory-only network boundary', { timeout: 120000 }, async () => {
    const browser = await browserSession();
    try {
        await browser.command('Network.enable');
        await browser.open();
        await browser.evaluate(`(() => {
            const input=document.getElementById('fullName');
            input.value='SYNTHETIC_PRIVATE_MARKER_4816';
            input.dispatchEvent(new Event('input',{bubbles:true}));
            document.getElementById('personalStep').focus();
        })()`);
        await browser.command('Input.dispatchKeyEvent',{type:'keyDown',key:'ArrowRight',code:'ArrowRight'});
        assert.equal(await browser.evaluate('document.activeElement.id'),'familyStep');
        await browser.evaluate("document.getElementById('manageFields').click()");
        for(let i=0;i<35;i++){
            await browser.command('Input.dispatchKeyEvent',{type:'keyDown',key:'Tab',code:'Tab',windowsVirtualKeyCode:9});
            assert.equal(await browser.evaluate("document.activeElement.closest('dialog')?.id || document.activeElement.tagName"),'fieldDialog');
        }
        await browser.command('Input.dispatchKeyEvent',{type:'keyDown',key:'Escape',code:'Escape',windowsVirtualKeyCode:27});
        assert.equal(await browser.evaluate("document.getElementById('fieldDialog').open"),false);
        for(const language of ['en','hi','gu','mr']) {
            await browser.evaluate(`(async()=>{(await import('/js/localization.js')).applyLanguage('${language}');})()`);
            for(const width of [320,390,768,1024,1440]){
                await browser.command('Emulation.setDeviceMetricsOverride',{width,height:900,deviceScaleFactor:1,mobile:false});
                const layout=await browser.evaluate(`(() => {
                    document.querySelector('[data-tab="personal"]').click();
                    return {overflow:document.documentElement.scrollWidth>innerWidth+1,labels:[...document.querySelectorAll('#biodataForm input:not([hidden]),#biodataForm select,#biodataForm textarea')].every(n=>n.labels?.length>0),unlabeled:[...document.querySelectorAll('button')].filter(b=>b.getBoundingClientRect().width&&!b.textContent.trim()&&!b.getAttribute('aria-label')).length};
                })()`);
                assert.equal(layout.overflow,false,`${language} ${width}`);
                assert.equal(layout.labels,true);assert.equal(layout.unlabeled,0);
                const gap=await browser.evaluate(`(() => {
                    document.querySelector('[data-tab="review"]').click();
                    const nav=document.querySelector('#reviewTab .form-tab-nav');
                    const action=document.querySelector('#reviewTab > [data-export]');
                    action.scrollIntoView({block:'center'});
                    return action.getBoundingClientRect().top-nav.getBoundingClientRect().bottom;
                })()`);
                assert.ok(gap>=20,`${language} ${width}: review/export gap ${gap}px`);
                if(width===1440){
                    const panes=await browser.evaluate(`({form:document.querySelector('.form-panel').getBoundingClientRect().width,preview:document.querySelector('.live-preview').getBoundingClientRect().width})`);
                    assert.ok(panes.form>=700&&panes.preview>=450,'Desktop workspace must use the available width');
                }
            }
            await browser.command('Emulation.setDeviceMetricsOverride',{width:390,height:844,deviceScaleFactor:1,mobile:false});
            await browser.evaluate("document.querySelector('[data-preview]').click()");
            const modal=await browser.evaluate(`(async () => {
                await new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve)));
                const dialog=document.getElementById('templateModal'),r=dialog.getBoundingClientRect();
                const paper=document.getElementById('biodataPaper').getBoundingClientRect(),frame=document.getElementById('previewScale').getBoundingClientRect();
                return {open:dialog.open,width:r.width,viewport:innerWidth,fits:paper.right<=frame.right+1&&paper.width>0,paperWidth:paper.width,frameWidth:frame.width};
            })()`);
            assert.equal(modal.open,true);assert.ok(modal.width<=modal.viewport+1);
            assert.equal(modal.fits,true,`Mobile document must fit, not merely be clipped: ${JSON.stringify(modal)}`);
            await browser.command('Input.dispatchKeyEvent',{type:'keyDown',key:'Escape',code:'Escape',windowsVirtualKeyCode:27});
            assert.equal(await browser.evaluate("document.getElementById('templateModal').open"),false);
        }
        const privacy=await browser.evaluate(`({local:Object.keys(localStorage),session:Object.keys(sessionStorage)})`);
        assert.deepEqual(privacy,{local:['biodataLanguage'],session:[]});
        const contrast=await browser.evaluate(`(() => {
            function luminance(color){
                const parts=color.match(/[\\d.]+/g).slice(0,3).map(Number).map(v=>v/255).map(v=>v<=.04045?v/12.92:((v+.055)/1.055)**2.4);
                return parts.reduce((sum,v,i)=>sum+v*[.2126,.7152,.0722][i],0);
            }
            function ratio(a,b){const [low,high]=[luminance(a),luminance(b)].sort((a,b)=>a-b);return (high+.05)/(low+.05);}
            const body=getComputedStyle(document.body),button=getComputedStyle(document.querySelector('.btn-primary')),input=getComputedStyle(document.getElementById('fullName')),placeholder=getComputedStyle(document.getElementById('fullName'),'::placeholder');
            return {body:ratio(body.color,body.backgroundColor),button:ratio(button.color,button.backgroundColor),input:ratio(input.color,input.backgroundColor),placeholder:ratio(placeholder.color,input.backgroundColor),border:ratio(input.borderTopColor,input.backgroundColor)};
        })()`);
        for(const key of ['body','button','input','placeholder'])assert.ok(contrast[key]>=4.5,`${key} contrast: ${contrast[key]}`);
        assert.ok(contrast.border>=3,`Input boundary contrast: ${contrast.border}`);
        const leaked=browser.events.filter(e=>e.method==='Network.requestWillBeSent').some(e=>JSON.stringify(e.params.request).includes('SYNTHETIC_PRIVATE_MARKER_4816'));
        assert.equal(leaked,false,'Synthetic draft data appeared in a network request');
        assert.deepEqual(browser.events.filter(e=>e.method==='Runtime.exceptionThrown'),[]);
    } finally { await browser.close(); }
});
