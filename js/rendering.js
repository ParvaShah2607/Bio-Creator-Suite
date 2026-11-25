import { store, FIELD_NAMES } from './state.js';
import { defaultPhoto } from './sample.js';
import { templates } from './templates.js';
import { t, withLocalizedTemplateText } from './localization.js';

export function renderTemplateInto(target, data, index = store.state.templateIndex, watermark = true) {
    if (!target) throw new TypeError('A document container is required');
    if (!templates[index]) throw new RangeError('Unknown template');
    // Localize template labels before inserting values, so names such as "Mother"
    // remain unchanged and user input never participates in HTML parsing.
    const tokens = Object.fromEntries(FIELD_NAMES.map((field, index) => [
        field, data[field] ? `__BIODATA_VALUE_${index}__` : ''
    ]));
    const fragment = document.createElement('template');
    fragment.innerHTML = withLocalizedTemplateText(templates[index].render({ ...tokens, photo: defaultPhoto }));
    const walker = document.createTreeWalker(fragment.content, NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) {
        walker.currentNode.nodeValue = walker.currentNode.nodeValue.replace(
            /__BIODATA_VALUE_(\d+)__/g, (_, index) => String(data[FIELD_NAMES[Number(index)]])
        );
    }
    for (const image of fragment.content.querySelectorAll('img')) {
        image.src = typeof data.photo === 'string' && data.photo.startsWith('data:image/') ? data.photo : defaultPhoto;
    }
    target.replaceChildren(fragment.content);
    target.lang = store.state.language;
    if (watermark) {
        const page = target.firstElementChild;
        page.classList.add('template-document');
        page.style.position = 'relative';
        page.style.paddingBottom = `${Math.max(parseFloat(page.style.paddingBottom) || 0, 32)}px`;
        // Match A4 at the current document width. Round down like html2pdf's
        // page sizing so a fractional pixel does not create a trailing page.
        const width = target.clientWidth || parseFloat(target.style.width) || 600;
        page.style.minHeight = `${Math.floor(width * 297 / 210)}px`;
        const mark = document.createElement('div');
        mark.className = 'persistent-watermark';
        mark.append(document.createTextNode(`${t('createdBy')} `));
        const link = document.createElement('a');
        link.href = 'https://biodata-pro.in';
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.textContent = 'biodata-pro.in';
        mark.append(link);
        page.append(mark);
    }
    return target;
}
