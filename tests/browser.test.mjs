import test from 'node:test';
import assert from 'node:assert/strict';
import { browserSession } from './browser-helper.mjs';

test('static entry, safe four-language rendering, and complete field/template inventory', { timeout: 120000 }, async () => {
    const browser = await browserSession();
    try {
        await browser.open();
        const result = await browser.evaluate(`(async () => {
            const { store, FIELD_NAMES } = await import('/js/state.js');
            const { templates } = await import('/js/templates.js');
            const { renderTemplateInto } = await import('/js/rendering.js');
            const { applyLanguage } = await import('/js/localization.js');
            const missing = FIELD_NAMES.filter(field => !document.getElementById(field));
            const data = Object.fromEntries(FIELD_NAMES.map(field => [field, 'Synthetic_' + field]));
            const hostile = '<img src=x onerror="window.injected=true"> Mother & "Education"';
            const scripts = { en: 'Synthetic', hi: 'परीक्षण शर्मा', gu: 'પરીક્ષણ શાહ', mr: 'चाचणी पाटील' };
            let renders = 0;
            for (const [language, name] of Object.entries(scripts)) {
                applyLanguage(language);
                for (let i=0; i<templates.length; i++) {
                    const target = document.createElement('div');
                    renderTemplateInto(target, { ...data, fullName: name + hostile }, i);
                    if (!target.textContent.includes(name + hostile)) throw new Error('Text lost or translated');
                    if (target.textContent.includes('__BIODATA_VALUE_')) throw new Error('Unresolved field token');
                    const raw=templates[i].render({...data,photo:''});
                    for(const field of FIELD_NAMES.filter(field=>field!=='fullName')){
                        if(raw.includes(data[field])&&!target.textContent.includes(data[field]))throw new Error('Field value lost: '+field);
                    }
                    if (target.querySelector('[onerror], script')) throw new Error('Unsafe user markup');
                    if (!target.querySelector('.persistent-watermark')) throw new Error('Missing watermark');
                    renders++;
                }
            }
            return { missing, fields: FIELD_NAMES.length, templates: templates.map(t=>t.name), renders, injected: !!window.injected, rootLanguage: document.documentElement.lang };
        })()`);
        assert.deepEqual(result.missing, []);
        assert.equal(result.fields, 29);
        assert.equal(result.templates.length, 10);
        assert.equal(result.renders, 40);
        assert.equal(result.injected, false);
        assert.equal(result.rootLanguage, 'mr');
        assert.deepEqual(await browser.evaluate(`['templateModal','fieldDialog'].map(id=>document.getElementById(id).parentElement.tagName)`), ['BODY','BODY']);
        const discovery = await browser.evaluate(`(async () => {
            const { store } = await import('/js/state.js');
            document.getElementById('fullName').value = 'Synthetic draft';
            document.getElementById('fullName').dispatchEvent(new Event('input', { bubbles: true }));
            const tiles = [...document.querySelectorAll('#templateGallery button')];
            const selected = [];
            for (const tile of tiles) {
                tile.click();
                selected.push(store.state.templateIndex);
                if (store.state.values.fullName !== 'Synthetic draft') throw new Error('Draft lost');
            }
            return { count: tiles.length, selected, allButtons: tiles.every(t=>t.type === 'button'), pressed: document.querySelectorAll('#templateGallery [aria-pressed="true"]').length };
        })()`);
        assert.equal(discovery.count, 10);
        assert.deepEqual(discovery.selected, [0,1,2,3,4,5,6,7,8,9]);
        assert.equal(discovery.allButtons, true);
        assert.equal(discovery.pressed, 1);
        const creator = await browser.evaluate(`(async () => {
            const { store, FIELD_NAMES } = await import('/js/state.js');
            const { applyLanguage } = await import('/js/localization.js');
            for (const field of FIELD_NAMES) {
                const input = document.getElementById(field);
                if (!['date','number'].includes(input.type) && input.tagName !== 'SELECT') {
                    input.value = 'Synthetic ' + field;
                    input.dispatchEvent(new Event('input', {bubbles:true}));
                }
            }
            document.querySelector('[data-tab="family"]').click();
            if (!document.getElementById('personalTab').hidden || document.getElementById('familyTab').hidden) throw new Error('Stage visibility');
            document.querySelector('[data-tab="contact"]').click();
            document.getElementById('previewBtn').click();
            if (store.state.step !== 'review') throw new Error('Review stage missing');
            document.getElementById('manageFields').click();
            const choices = document.querySelectorAll('#fieldChoices input');
            if (choices.length !== 30) throw new Error('Missing field manager controls');
            const name = document.querySelector('[data-field-name="fullName"]');
            name.click();
            if (store.getData().fullName) throw new Error('Hidden name leaked');
            name.click();
            if (store.getData().fullName !== 'Synthetic fullName') throw new Error('Restore lost value');
            document.getElementById('closeFields').click();
            for (const language of ['hi','gu','mr','en']) applyLanguage(language);
            await new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve)));
            if (!document.getElementById('inlinePaper').textContent.includes('Synthetic fullName')) throw new Error('Live preview not updated');
            document.querySelector('#reviewTab [data-preview]').click();
            if (!document.getElementById('templateModal').open) throw new Error('Preview dialog not open');
            document.getElementById('closeModal').click();
            const dob = document.getElementById('dob');
            dob.value='2000-01-01';dob.dispatchEvent(new Event('change',{bubbles:true}));
            if (!store.state.values.age) throw new Error('Age not calculated');
            dob.value='';dob.dispatchEvent(new Event('change',{bubbles:true}));
            if (store.state.values.age || document.getElementById('age').value) throw new Error('Stale age');
            return { step: store.state.step, storedKeys: Object.keys(localStorage), value: store.getData().fullName };
        })()`);
        assert.equal(creator.step, 'review');
        assert.equal(creator.value, 'Synthetic fullName');
        assert.deepEqual(creator.storedKeys, ['biodataLanguage']);
        for (const width of [320, 390, 768, 1024, 1440]) {
            await browser.command('Emulation.setDeviceMetricsOverride', { width, height: 900, deviceScaleFactor: 1, mobile: false });
            const size = await browser.evaluate(`({viewport:innerWidth, width:document.documentElement.scrollWidth})`);
            assert.ok(size.width <= size.viewport + 1, `Horizontal page overflow at ${width}: ${size.width}`);
        }
        assert.deepEqual(browser.events.filter(e => e.method === 'Runtime.exceptionThrown'), []);
    } finally { await browser.close(); }
});
