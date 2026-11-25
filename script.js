import { store, FIELD_NAMES, STEPS } from './js/state.js';
import { sampleData, defaultPhoto } from './js/sample.js';
import { t, applyLanguage, detectLanguageFromUrl } from './js/localization.js';
import { templates } from './js/templates.js';
import { renderTemplateInto } from './js/rendering.js';
import { handleDownload, isMobilePdfFlow } from './js/export.js';
import { contactErrors, calculateAge } from './js/validation.js';
import { selectPhoto, removePhoto } from './js/photo.js';
import { setupDialogKeyboard } from './js/dialogs.js';

const byId = id => document.getElementById(id);
let previewFrame;
let lastEditorFocus;
let previousState = store.state;

function announce(message) { byId('creatorStatus').textContent = message; }

function updateSelectedTemplates() {
    document.querySelectorAll('[data-template-idx]').forEach(button => {
        const selected = Number(button.dataset.templateIdx) === store.state.templateIndex;
        button.setAttribute('aria-pressed', String(selected));
        button.classList.toggle('selected', selected);
    });
    byId('selectedTemplateName').textContent = templates[store.state.templateIndex].name;
}

function renderPicker(container, gallery = false) {
    container.replaceChildren();
    templates.forEach((template, index) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = gallery ? 'template-item' : 'template-thumb-btn';
        button.dataset.templateIdx = index;
        button.setAttribute('aria-label', `${t('chooseTemplate')}: ${template.name}`);
        if (gallery) {
            const card = document.createElement('div');
            card.className = 'template-card';
            const preview = document.createElement('div');
            preview.className = 'template-preview-container';
            preview.setAttribute('aria-hidden', 'true');
            preview.inert = true;
            renderTemplateInto(preview, sampleData, index, false);
            card.append(preview);
            button.append(card);
        }
        const label = document.createElement('span');
        label.className = gallery ? 'template-name' : 'template-choice-name';
        label.textContent = `${index + 1}. ${template.name}`;
        button.append(label);
        container.append(button);
    });
    updateSelectedTemplates();
}

function renderDiscovery() {
    renderPicker(byId('templateGallery'), true);
    renderPicker(byId('templateThumbnails'));
    renderPicker(byId('reviewTemplates'));
    renderTemplateInto(byId('heroDocument'), sampleData, 1, false);
    byId('heroDocument').inert = true;
    requestAnimationFrame(scaleDocuments);
}

function scaleDocuments() {
    document.querySelectorAll('.template-preview-container').forEach(preview => {
        preview.style.transform = `scale(${preview.parentElement.clientWidth / 600})`;
    });
    const hero = byId('heroDocument');
    const heroScale = Math.min((hero.parentElement.clientWidth - 40) / 600, (hero.parentElement.clientHeight - 40) / hero.offsetHeight);
    hero.style.transform = `scale(${heroScale})`;
    hero.style.left = `${(hero.parentElement.clientWidth - 600 * heroScale) / 2}px`;
    for (const [paperId, frameId] of [['inlinePaper', 'inlinePreviewFrame'], ['biodataPaper', 'previewScale']]) {
        const paper = byId(paperId);
        const frame = byId(frameId);
        const scale = Math.min(1, frame.clientWidth / 600);
        if (!scale) continue;
        paper.style.transform = `scale(${scale})`;
        paper.style.transformOrigin = 'top left';
        frame.style.height = `${Math.ceil(paper.offsetHeight * scale)}px`;
    }
}

function renderPreview() {
    cancelAnimationFrame(previewFrame);
    previewFrame = requestAnimationFrame(() => {
        const hasContent = store.hasContent();
        for (const id of ['inlinePaper', 'biodataPaper']) {
            const paper = byId(id);
            paper.hidden = !hasContent;
            if (hasContent) renderTemplateInto(paper, store.getData());
            else paper.replaceChildren();
        }
        document.querySelectorAll('.empty-draft').forEach(node => { node.hidden = hasContent; });
        scaleDocuments();
    });
}

function showPreview() {
    lastEditorFocus = document.activeElement;
    byId('templateModal').showModal();
    document.body.classList.add('dialog-open');
    renderPreview();
    byId('closeModal').focus();
}

function closePreview() {
    byId('templateModal').close();
}

function switchToTab(step, focus = true) {
    store.setStep(step);
    document.querySelectorAll('.form-tab').forEach(button => {
        const active = button.dataset.tab === step;
        button.classList.toggle('active', active);
        button.setAttribute('aria-selected', String(active));
        button.tabIndex = active ? 0 : -1;
    });
    for (const name of STEPS) {
        const panel = byId(`${name}Tab`);
        panel.hidden = name !== step;
        panel.classList.toggle('active', name === step);
    }
    if (focus) byId(`${step}Heading`).focus({ preventScroll: true });
    if (focus) byId('create').scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'start' });
}

function showFields() {
    const container = byId('fieldChoices');
    container.replaceChildren();
    for (const field of ['photo', ...FIELD_NAMES]) {
        const label = document.createElement('label');
        label.className = 'field-choice';
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.dataset.fieldName = field;
        checkbox.checked = !store.state.hidden.includes(field);
        label.append(checkbox, document.createTextNode(t(field === 'photo' ? 'profilePhoto' : field)));
        container.append(label);
    }
    byId('fieldDialog').showModal();
}

function updateFields() {
    document.querySelectorAll('.form-group[data-field]').forEach(group => {
        group.classList.toggle('field-removed', store.state.hidden.includes(group.dataset.field));
    });
    byId('hiddenCount').textContent = `${t('hiddenFields')}: ${store.state.hidden.length}`;
    const preview = byId('photoPreview');
    const uploaded = store.state.photo !== defaultPhoto;
    if (uploaded && preview.getAttribute('src') !== store.state.photo) preview.src = store.state.photo;
    if (!uploaded) preview.removeAttribute('src');
    preview.hidden = !uploaded;
    byId('photoPlaceholder').hidden = uploaded;
    byId('removePhoto').hidden = !uploaded;
}

function validateForExport() {
    const errors = contactErrors(store.getData());
    document.querySelectorAll('.field-error').forEach(node => { node.textContent = ''; });
    for (const field of ['contactNumber', 'email']) {
        byId(field).removeAttribute('aria-invalid');
        byId(field).setCustomValidity('');
    }
    const first = Object.keys(errors)[0];
    if (first) {
        if (byId('templateModal').open) closePreview();
        switchToTab('contact');
        for (const [field, key] of Object.entries(errors)) {
            byId(`${field}Error`).textContent = t(key);
            byId(field).setAttribute('aria-invalid', 'true');
        }
        byId(first).focus();
        return false;
    }
    if (!store.hasContent()) { announce(t('emptyExport')); return false; }
    return true;
}

function refreshLanguage() {
    renderDiscovery();
    updateFields();
    document.querySelectorAll('.stage-heading').forEach(heading => { heading.textContent = t(heading.dataset.i18n); });
    document.querySelectorAll('[data-export] span').forEach(span => { span.textContent = t(isMobilePdfFlow() ? 'downloadPdf' : 'printPdf'); });
    byId('languageSelect').setAttribute('aria-label', t('selectLanguage'));
    byId('closeModal').setAttribute('aria-label', t('backToEdit'));
    byId('photoUploadArea').setAttribute('aria-label', t('uploadPhoto'));
    document.querySelector('.form-tabs').setAttribute('aria-label', t('stepLabel'));
    byId('previewBtn').querySelector('span').textContent = t('nextReview');
    renderPreview();
}

function setupNavigation() {
    const tabs = document.querySelector('.form-tabs');
    tabs.setAttribute('role', 'tablist');
    document.querySelectorAll('.form-tab').forEach(button => {
        const name = button.dataset.tab;
        button.id = `${name}Step`;
        button.setAttribute('role', 'tab');
        button.setAttribute('aria-controls', `${name}Tab`);
        button.addEventListener('click', () => switchToTab(name));
        button.addEventListener('keydown', event => {
            if (!['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(event.key)) return;
            event.preventDefault();
            const index = STEPS.indexOf(name);
            const next = event.key === 'Home' ? 0 : event.key === 'End' ? 3 : (index + (event.key === 'ArrowRight' ? 1 : 3)) % 4;
            switchToTab(STEPS[next], false);
            byId(`${STEPS[next]}Step`).focus();
        });
    });
    for (const name of STEPS) {
        const panel = byId(`${name}Tab`);
        panel.setAttribute('role', 'tabpanel');
        panel.setAttribute('aria-labelledby', `${name}Step`);
        const heading = document.createElement('h3');
        heading.id = `${name}Heading`;
        heading.className = 'stage-heading';
        heading.dataset.i18n = name;
        heading.tabIndex = -1;
        panel.prepend(heading);
    }
    document.querySelectorAll('[data-next], [data-prev]').forEach(button => button.addEventListener('click', () => switchToTab(button.dataset.next || button.dataset.prev)));
    byId('previewBtn').addEventListener('click', () => switchToTab('review'));
    switchToTab('personal', false);
    document.querySelectorAll('[data-preview]').forEach(button => button.addEventListener('click', showPreview));
    byId('closeModal').addEventListener('click', closePreview);
    byId('templateModal').addEventListener('close', () => {
        document.body.classList.remove('dialog-open');
        lastEditorFocus?.focus({ preventScroll: true });
    });
    byId('mobileMenuBtn').addEventListener('click', () => {
        const open = byId('mobileMenuBtn').getAttribute('aria-expanded') !== 'true';
        byId('mobileMenuBtn').setAttribute('aria-expanded', String(open));
        byId('mobileMenu').classList.toggle('active', open);
        byId('mobileMenu').inert = !open;
    });
    const closeMenu = () => {
        byId('mobileMenuBtn').setAttribute('aria-expanded', 'false');
        byId('mobileMenu').classList.remove('active');
        byId('mobileMenu').inert = true;
    };
    byId('mobileMenu').querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
    closeMenu();
}

function initialize() {
    setupDialogKeyboard();
    setupNavigation();
    byId('biodataForm').addEventListener('submit', event => event.preventDefault());
    for (const field of FIELD_NAMES) {
        const input = byId(field);
        if (field === 'contactNumber' || field === 'email') {
            const error = document.createElement('p');
            error.id = `${field}Error`;
            error.className = 'field-error';
            input.setAttribute('aria-describedby', error.id);
            input.after(error);
        }
        store.setField(field, input.value);
        const change = () => {
            store.setField(field, input.value);
            input.setCustomValidity('');
            input.removeAttribute('aria-invalid');
            const error = byId(`${field}Error`);
            if (error) error.textContent = '';
        };
        input.addEventListener('input', change);
        input.addEventListener('change', change);
    }
    byId('dob').addEventListener('change', () => {
        const age = calculateAge(byId('dob').value);
        byId('age').value = age;
        store.setField('age', age);
    });
    byId('photoInput').addEventListener('change', event => selectPhoto(event.target.files?.[0]));
    byId('photoUploadArea').addEventListener('click', () => byId('photoInput').click());
    byId('removePhoto').addEventListener('click', removePhoto);
    document.querySelectorAll('[data-manage-fields]').forEach(button => button.addEventListener('click', showFields));
    byId('closeFields').addEventListener('click', () => byId('fieldDialog').close());
    byId('includeAll').addEventListener('click', () => {
        for (const field of ['photo', ...FIELD_NAMES]) store.setIncluded(field, true);
        byId('fieldChoices').querySelectorAll('input').forEach(input => { input.checked = true; });
    });
    byId('fieldChoices').addEventListener('change', event => {
        store.setIncluded(event.target.dataset.fieldName, event.target.checked);
    });
    document.querySelectorAll('.field-remove-btn').forEach(button => button.addEventListener('click', () => {
        store.setIncluded(button.closest('[data-field]').dataset.field, false);
        byId('manageFields').focus({ preventScroll: true });
        announce(t('fieldRemoved'));
    }));
    for (const id of ['templateGallery', 'templateThumbnails', 'reviewTemplates']) {
        byId(id).addEventListener('click', event => {
            const button = event.target.closest('[data-template-idx]');
            if (!button) return;
            store.selectTemplate(Number(button.dataset.templateIdx));
            if (id === 'templateGallery') switchToTab('personal');
        });
    }
    store.subscribe(state => {
        if (state.templateIndex !== previousState.templateIndex) updateSelectedTemplates();
        updateFields();
        renderPreview();
        previousState = state;
    });
    document.addEventListener('biodata:language', refreshLanguage);
    document.addEventListener('biodata:storage-error', () => announce(t('languageStorageError')));
    byId('languageSelect').addEventListener('change', event => applyLanguage(event.target.value));
    document.querySelectorAll('[data-export]').forEach(button => button.addEventListener('click', () => {
        if (validateForExport()) handleDownload();
    }));
    applyLanguage(detectLanguageFromUrl());
    window.addEventListener('resize', () => {
        scaleDocuments();
        document.querySelectorAll('[data-export] span').forEach(span => { span.textContent = t(isMobilePdfFlow() ? 'downloadPdf' : 'printPdf'); });
    });
    const previewObserver = new ResizeObserver(scaleDocuments);
    previewObserver.observe(byId('inlinePreviewFrame'));
    previewObserver.observe(byId('previewScale'));
    document.fonts.ready.then(scaleDocuments);
}

initialize();
