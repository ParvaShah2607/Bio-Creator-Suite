import { defaultPhoto } from './sample.js';

export const FIELD_NAMES = Object.freeze([
    'fullName', 'dob', 'age', 'height', 'complexion', 'religion', 'caste',
    'subCaste', 'motherTongue', 'rashi', 'nakshatra', 'education', 'occupation',
    'income', 'hobbies', 'fatherName', 'fatherOccupation', 'motherName',
    'motherOccupation', 'siblings', 'familyType', 'familyStatus', 'aboutFamily',
    'contactPerson', 'contactNumber', 'email', 'address', 'city', 'state'
]);
export const STEPS = Object.freeze(['personal', 'family', 'contact', 'review']);

export function createStore() {
    let state = Object.freeze({
        values: Object.freeze(Object.fromEntries(FIELD_NAMES.map(field => [field, '']))),
        hidden: Object.freeze([]), photo: defaultPhoto, templateIndex: 0, language: 'en', step: 'personal'
    });
    const listeners = new Set();
    function update(patch) {
        state = Object.freeze({ ...state, ...patch });
        listeners.forEach(listener => listener(state));
    }
    function requireField(field) {
        if (field !== 'photo' && !FIELD_NAMES.includes(field)) throw new RangeError('Unknown biodata field');
    }
    return {
        get state() { return state; },
        setField(field, value) {
            if (!FIELD_NAMES.includes(field)) throw new RangeError('Unknown biodata field');
            if (typeof value !== 'string') throw new TypeError('Field values must be text');
            if (state.values[field] !== value) update({ values: Object.freeze({ ...state.values, [field]: value }) });
        },
        setIncluded(field, included) {
            requireField(field);
            const hidden = new Set(state.hidden);
            if (included) hidden.delete(field); else hidden.add(field);
            update({ hidden: Object.freeze([...hidden]) });
        },
        setPhoto(photo) {
            if (typeof photo !== 'string' || !photo.startsWith('data:image/')) throw new TypeError('Expected a local image');
            update({ photo });
        },
        removePhoto() { update({ photo: defaultPhoto }); },
        selectTemplate(templateIndex) {
            if (!Number.isInteger(templateIndex) || templateIndex < 0 || templateIndex >= 10) throw new RangeError('Unknown template');
            update({ templateIndex });
        },
        setLanguage(language) {
            if (!['en', 'hi', 'gu', 'mr'].includes(language)) throw new RangeError('Unsupported language');
            update({ language });
        },
        setStep(step) {
            if (!STEPS.includes(step)) throw new RangeError('Unknown creator step');
            update({ step });
        },
        getData() {
            return {
                ...Object.fromEntries(FIELD_NAMES.map(field => [field, state.hidden.includes(field) ? '' : state.values[field]])),
                photo: state.hidden.includes('photo') ? defaultPhoto : state.photo
            };
        },
        hasContent() {
            return FIELD_NAMES.some(field => !state.hidden.includes(field) && state.values[field].trim()) ||
                (!state.hidden.includes('photo') && state.photo !== defaultPhoto);
        },
        subscribe(listener) { listeners.add(listener); return () => listeners.delete(listener); }
    };
}

export const store = createStore();
