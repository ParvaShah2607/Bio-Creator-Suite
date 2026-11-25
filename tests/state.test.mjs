import test from 'node:test';
import assert from 'node:assert/strict';
import { createStore, FIELD_NAMES } from '../js/state.js';
import { calculateAge, contactErrors, phoneRegex } from '../js/validation.js';
import { uiCopy } from '../js/ui-copy.js';
import { getPdfFileName } from '../js/filename.js';

test('all 29 text fields plus photo survive navigation, templates, language and hiding', () => {
    const store = createStore();
    assert.equal(FIELD_NAMES.length, 29);
    assert.equal(store.hasContent(), false);
    for (const field of FIELD_NAMES) store.setField(field, `Synthetic ${field}`);
    for (let index = 0; index < 10; index++) {
        store.selectTemplate(index);
        for (const lang of ['en', 'hi', 'gu', 'mr']) {
            store.setLanguage(lang);
            for (const step of ['personal', 'family', 'contact', 'review']) store.setStep(step);
            for (const field of FIELD_NAMES) assert.equal(store.getData()[field], `Synthetic ${field}`);
        }
    }
    for (const field of FIELD_NAMES) store.setIncluded(field, false);
    assert.equal(store.hasContent(), false);
    for (const field of FIELD_NAMES) {
        assert.equal(store.getData()[field], '');
        store.setIncluded(field, true);
        assert.equal(store.getData()[field], `Synthetic ${field}`);
    }
});

test('photo omission and replacement are in-memory and preserve placeholder behavior', () => {
    const store = createStore();
    const placeholder = store.getData().photo;
    store.setPhoto('data:image/png;base64,synthetic');
    assert.equal(store.hasContent(), true);
    store.setIncluded('photo', false);
    assert.equal(store.hasContent(), false);
    assert.equal(store.getData().photo, placeholder);
    store.setIncluded('photo', true);
    assert.equal(store.getData().photo, 'data:image/png;base64,synthetic');
    store.removePhoto();
    assert.equal(store.hasContent(), false);
});

test('invalid states are rejected and snapshots cannot mutate values', () => {
    const store = createStore();
    assert.throws(() => store.selectTemplate(10), RangeError);
    assert.throws(() => store.setField('unknown', 'x'), RangeError);
    assert.throws(() => store.setLanguage('xx'), RangeError);
    assert.throws(() => { store.state.values.fullName = 'x'; }, TypeError);
});

test('phone and email acceptance retain legacy rules including spacing', () => {
    for (const value of ['1234567890', '+91 1234567890', '----------']) assert.equal(phoneRegex.test(value), true);
    for (const value of ['123', '(123)4567890', '12345678901234']) assert.equal(phoneRegex.test(value), false);
    assert.deepEqual(contactErrors({ contactNumber: '', email: '' }), {});
    assert.deepEqual(contactErrors({ contactNumber: '123', email: 'not email' }), { contactNumber: 'invalidPhone', email: 'invalidEmail' });
});

test('age uses calendar dates and preserves 18–99 range', () => {
    const today = new Date(2026, 9, 27);
    assert.equal(calculateAge('2000-10-27', today), '26');
    assert.equal(calculateAge('2000-10-28', today), '25');
    assert.equal(calculateAge('2008-10-27', today), '18');
    for (const value of ['', 'invalid', '2025-02-29', '2008-10-28', '1926-10-27', '2030-01-01']) assert.equal(calculateAge(value, today), '');
    assert.equal(calculateAge('2000-02-29', today), '26');
});

test('all new interface and recovery messages exist in all four languages', () => {
    for (const language of ['hi', 'gu', 'mr']) {
        assert.deepEqual(Object.keys(uiCopy[language]).sort(), Object.keys(uiCopy.en).sort());
        assert.ok(Object.values(uiCopy[language]).every(value => value.trim().length > 0));
    }
});

test('PDF names are nonempty, safe, and retain all four scripts', () => {
    for (const fullName of ['', '   ', '<>:/\\?*.', '---']) {
        assert.equal(getPdfFileName({ fullName }), 'Marriage-Biodata.pdf');
    }
    for (const fullName of ['Synthetic Example', 'परीक्षण शर्मा', 'પરીક્ષણ શાહ', 'चाचणी पाटील', 'CON']) {
        assert.equal(getPdfFileName({ fullName }), `Marriage-Biodata-${fullName.replaceAll(' ', '-')}.pdf`);
    }
    assert.equal(getPdfFileName({ fullName: 'A/B:<C>' }), 'Marriage-Biodata-ABC.pdf');
});
