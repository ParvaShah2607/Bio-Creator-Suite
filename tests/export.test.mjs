import test from 'node:test';
import assert from 'node:assert/strict';
import { browserSession } from './browser-helper.mjs';

test('desktop print documents preserve safe text, watermark and all four scripts', { timeout: 120000 }, async () => {
    const browser = await browserSession();
    try {
        await browser.command('Emulation.setDeviceMetricsOverride', { width: 1440, height: 1000, deviceScaleFactor: 1, mobile: false });
        await browser.open();
        await browser.evaluate(`(() => {
            const open = window.open.bind(window);
            window.printCalls = 0;
            window.open = (...args) => {
                const child = open(...args);
                child.addEventListener('load', () => { child.print = () => { window.printCalls++; }; });
                window.lastPrintWindow = child;
                return child;
            };
        })()`);
        for (const [language, name] of Object.entries({en:'Synthetic <script>example</script>',hi:'परीक्षण शर्मा',gu:'પરીક્ષણ શાહ',mr:'चाचणी पाटील'})) {
            const result = await browser.evaluate(`(async()=>{
                const {store}=await import('/js/state.js');
                const {applyLanguage}=await import('/js/localization.js');
                const {handleDownload}=await import('/js/export.js');
                applyLanguage(${JSON.stringify(language)});
                store.setField('fullName',${JSON.stringify(name)});
                store.selectTemplate(9);
                const result=await handleDownload();
                const doc=window.lastPrintWindow.document;
                const expected=(await import('/js/filename.js')).getPdfFileName(store.getData()).slice(0,-4);
                return {result,name:doc.querySelector('.biodata-wrapper').textContent.includes(${JSON.stringify(name)}),scripts:doc.querySelectorAll('script').length,watermark:!!doc.querySelector('.template-document > .persistent-watermark'),lang:doc.documentElement.lang,closed:window.lastPrintWindow.closed,named:doc.title===expected,url:window.lastPrintWindow.location.pathname};
            })()`);
            assert.deepEqual(result,{result:'print-opened',name:true,scripts:0,watermark:true,lang:language,closed:false,named:true,url:'/Marriage-Biodata.html'});
            const { targetInfos } = await browser.rootCommand('Target.getTargets');
            const popup = targetInfos.find(target => target.type === 'page' && target.url.endsWith('/Marriage-Biodata.html') && target.openerId);
            assert.ok(popup, 'Print popup not found');
            const print = await browser.attach(popup.targetId);
            const pdf = await print('Page.printToPDF', { printBackground: true, preferCSSPageSize: true });
            const bytes = Buffer.from(pdf.data,'base64');
            assert.equal(bytes.subarray(0,5).toString(),'%PDF-');
            assert.ok(bytes.length > 5000);
            assert.equal(bytes.toString('latin1').match(/\/Type\s*\/Page\b/g)?.length,1,'Sparse desktop PDF must be one page');
            await browser.evaluate('window.lastPrintWindow.close()');
        }
        assert.equal(await browser.evaluate('window.printCalls'),4);
    } finally { await browser.close(); }
});

test('empty guard, popup recovery, photo decoding and cancelled/failed mobile exports', { timeout: 120000 }, async () => {
    const browser = await browserSession();
    try {
        await browser.command('Emulation.setDeviceMetricsOverride', { width: 1440, height: 1000, deviceScaleFactor: 1, mobile: false });
        await browser.open();
        const result = await browser.evaluate(`(async () => {
            const { store } = await import('/js/state.js');
            const { handleDownload } = await import('/js/export.js');
            const { selectPhoto, removePhoto } = await import('/js/photo.js');
            const empty = await handleDownload();
            store.setField('fullName','Synthetic export');
            const originalOpen = window.open;
            window.open = () => null;
            const blocked = await handleDownload();
            window.open = originalOpen;
            const canvas = document.createElement('canvas');canvas.width=10;canvas.height=10;
            canvas.getContext('2d').fillRect(0,0,10,10);
            const blob = await new Promise(resolve=>canvas.toBlob(resolve,'image/png'));
            await selectPhoto(new File([blob],'synthetic.png',{type:'image/png'}));
            const photo = store.state.photo;
            await selectPhoto(new File(['not image'],'bad.png',{type:'image/png'}));
            const retained = store.state.photo === photo;
            const error = !!document.getElementById('photoError').textContent;
            removePhoto();
            window.matchMedia = () => ({matches:true});
            const originalClick = HTMLAnchorElement.prototype.click;
            let downloads=0;
            HTMLAnchorElement.prototype.click = function(){ if(this.download) downloads++; else originalClick.call(this); };
            window.html2pdf = () => ({set(){return this},from(){return this},outputPdf(){return new Promise(resolve=>setTimeout(()=>resolve(new Blob(['x'.repeat(500)])),600));}});
            const pending = handleDownload();
            await new Promise(resolve=>setTimeout(resolve,100));
            document.getElementById('cancelExport').click();
            const cancelled = await pending;
            await new Promise(resolve=>setTimeout(resolve,700));
            window.html2pdf = () => ({set(){return this},from(){return this},outputPdf(){return Promise.reject(new Error('synthetic failure'));}});
            const failed = await handleDownload();
            const tall = document.createElement('canvas');tall.width=200;tall.height=600;
            tall.getContext('2d').fillRect(0,0,200,600);
            let fit;
            window.html2canvas = async () => tall;
            window.jspdf = {jsPDF: class { addImage(...args){fit=args.slice(2,6)} output(){return new Blob(['x'.repeat(500)])} }};
            const fitted = await handleDownload();
            delete window.html2canvas;delete window.jspdf;
            delete window.html2pdf;
            HTMLAnchorElement.prototype.click = originalClick;
            return {empty,blocked,retained,error,cancelled,failed,downloads,fitted,fit,busy:!!document.querySelector('[data-export]:disabled'),overlay:!!document.getElementById('pdfDownloadOverlay'),name:store.state.values.fullName};
        })()`);
        assert.deepEqual(result, { empty: 'empty', blocked: 'popup-blocked', retained: true, error: true, cancelled: 'cancelled', failed: 'failed', downloads: 1, fitted:'download-requested', fit:[55.5,0,99,297], busy: false, overlay: false, name: 'Synthetic export' });
    } finally { await browser.close(); }
});

test('real html2pdf output for all ten templates and four scripts (existing CDN)', { timeout: 300000 }, async () => {
    const browser = await browserSession();
    try {
        await browser.open();
        await browser.command('Emulation.setDeviceMetricsOverride', { width: 390, height: 844, deviceScaleFactor: 1, mobile: true });
        await browser.evaluate(`(async () => {
            const { store } = await import('/js/state.js');
            const { sampleData } = await import('/js/sample.js');
            for(const [key,value] of Object.entries(sampleData)) if(key !== 'photo') store.setField(key,value);
            store.setField('contactNumber','1234567890');
            store.setField('email','synthetic@example.invalid');
            window.exported=[];
            const click = HTMLAnchorElement.prototype.click;
            HTMLAnchorElement.prototype.click = function() {
                if(this.download && this.href.startsWith('blob:')) {
                    const name=this.download;
                    window.exported.push(fetch(this.href).then(r=>r.blob()).then(async blob=>({name,size:blob.size,header:await blob.slice(0,5).text(),type:blob.type,pages:(await blob.text()).match(/\\/Type\\s*\\/Page\\b/g)?.length || 0})));
                } else click.call(this);
            };
        })()`);
        for (const [language, name] of Object.entries({ en: 'Synthetic Example', hi: 'परीक्षण शर्मा', gu: 'પરીક્ષણ શાહ', mr: 'चाचणी पाटील' })) {
            for (let templateIndex = 0; templateIndex < 10; templateIndex++) {
                const result = await browser.evaluate(`(async () => {
                    const {store}=await import('/js/state.js');
                    const {applyLanguage}=await import('/js/localization.js');
                    const {handleDownload}=await import('/js/export.js');
                    applyLanguage(${JSON.stringify(language)});
                    store.setField('fullName',${JSON.stringify(name)});
                    store.selectTemplate(${templateIndex});
                    const status=await handleDownload();
                    const file=await window.exported.at(-1);
                    const expected=(await import('/js/filename.js')).getPdfFileName(store.getData());
                    return {status,file,engine:typeof window.html2pdf,named:file.name===expected};
                })()`);
                assert.equal(result.status, 'download-requested', `${language} template ${templateIndex}: ${JSON.stringify(result)}`);
                assert.equal(result.engine, 'function');
                assert.equal(result.file.header, '%PDF-');
                assert.equal(result.named,true);
                assert.ok(result.file.size > 5000, `${language} template ${templateIndex} unexpectedly small PDF`);
            }
        }
        const count = await browser.evaluate('window.exported.length');
        assert.equal(count, 40);
        const long = await browser.evaluate(`(async()=>{
            const {store}=await import('/js/state.js');
            const {handleDownload}=await import('/js/export.js');
            store.selectTemplate(1);
            store.setField('aboutFamily','Synthetic long-family description. '.repeat(75));
            const status=await handleDownload();
            return {status,file:await window.exported.at(-1)};
        })()`);
        assert.equal(long.status,'download-requested');
        assert.ok(long.file.pages > 1, 'Bundled long-document pagination was lost');
        await browser.evaluate(`(async()=>{
            const {store,FIELD_NAMES}=await import('/js/state.js');
            for(const field of FIELD_NAMES) store.setField(field,'');
            store.setField('occupation','Synthetic occupation');
            const html2pdf=window.html2pdf;
            window.html2pdf=()=>({
                set(options){
                    const worker=html2pdf().set(options),from=worker.from;
                    worker.from=function(source){
                        window.captureHeight=source.getBoundingClientRect().height;
                        return from.call(this,source);
                    };
                    return worker;
                }
            });
        })()`);
        for(let index=0;index<10;index++){
            const sparse=await browser.evaluate(`(async()=>{
                const {store}=await import('/js/state.js');
                store.selectTemplate(${index});
                const status=await (await import('/js/export.js')).handleDownload();
                return {status,file:await window.exported.at(-1),height:window.captureHeight};
            })()`);
            assert.equal(sparse.status,'download-requested');
            assert.equal(sparse.file.name,'Marriage-Biodata.pdf');
            assert.equal(sparse.file.pages,Math.ceil(sparse.height/Math.floor(794*297/210)),`Sparse template ${index} gained an extra page (${sparse.height}px content)`);
        }
    } finally { await browser.close(); }
});

test('A4 template backgrounds contain branding without white outer padding', async () => {
    const browser=await browserSession();
    try {
        await browser.open();
        const layouts=await browser.evaluate(`(async()=>{
            const {renderTemplateInto}=await import('/js/rendering.js');
            const {applyLanguage}=await import('/js/localization.js');
            const results=[];
            for(const language of ['en','hi','gu','mr']){
                applyLanguage(language);
                for(const width of [600,794]){
                    for(let index=0;index<10;index++){
                        const paper=document.createElement('div');
                        paper.className='biodata-paper';
                        Object.assign(paper.style,{width:width+'px',maxWidth:'none'});
                        document.body.append(paper);
                        renderTemplateInto(paper,{fullName:'Synthetic Example'},index);
                        const page=paper.firstElementChild,mark=page.querySelector('.persistent-watermark');
                        const outer=paper.getBoundingClientRect(),inner=page.getBoundingClientRect(),brand=mark.getBoundingClientRect();
                        results.push({language,width,index,height:inner.height,outer:outer.height,innerWidth:inner.width,contained:brand.bottom<=inner.bottom&&brand.top>=inner.top,parent:mark.parentElement===page});
                        paper.remove();
                    }
                }
            }
            return results;
        })()`);
        for(const layout of layouts){
            const context=JSON.stringify(layout);
            assert.ok(layout.height>=Math.floor(layout.width*297/210),context);
            assert.equal(layout.outer,layout.height,context);
            assert.equal(layout.innerWidth,layout.width,context);
            assert.equal(layout.contained,true,context);
            assert.equal(layout.parent,true,context);
        }
    } finally { await browser.close(); }
});
