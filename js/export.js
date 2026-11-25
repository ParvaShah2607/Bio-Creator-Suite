import { t } from './localization.js';
import { store } from './state.js';
import { renderTemplateInto } from './rendering.js';
import { contactErrors } from './validation.js';
import { getPdfFileName } from './filename.js';

const wait = (ms = 0) => new Promise((resolve) => setTimeout(resolve, ms));
const nextFrame = () => new Promise((resolve) => requestAnimationFrame(resolve));

const HTML2PDF_SOURCES = [
    'https://cdn.jsdelivr.net/npm/html2pdf.js@0.10.1/dist/html2pdf.bundle.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js'
];

let html2pdfLoaderPromise = null;

function loadExternalScript(src, attrs = {}) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        const timeout = setTimeout(() => finish(new Error('PDF_ENGINE_TIMEOUT')), 12000);
        function finish(error) {
            clearTimeout(timeout);
            script.onload = null;
            script.onerror = null;
            if (error) { script.remove(); reject(error); } else resolve();
        }
        script.src = src;
        Object.entries(attrs).forEach(([key, value]) => {
            script.setAttribute(key, value);
        });
        script.async = true;
        script.onload = () => finish();
        script.onerror = () => finish(new Error('PDF_ENGINE_LOAD'));
        document.body.appendChild(script);
    });
}

async function loadPdfBundle() {
    let lastError;
    for (const src of HTML2PDF_SOURCES) {
        try {
            await loadExternalScript(src, { 'data-html2pdf': 'dynamic', crossorigin: 'anonymous', referrerpolicy: 'no-referrer' });
            if (typeof window.html2pdf !== 'undefined') {
                return;
            }
        } catch (error) {
            console.warn('PDF provider failed; trying the configured fallback.');
            lastError = error;
        }
    }
    throw lastError || new Error('Unable to load html2pdf bundle from known CDNs.');
}

async function ensurePdfEngine() {
    if (typeof window.html2pdf !== 'undefined') {
        return;
    }

    if (!html2pdfLoaderPromise) {
        html2pdfLoaderPromise = loadPdfBundle()
            .catch((error) => {
                html2pdfLoaderPromise = null;
                throw error;
            });
    }

    await html2pdfLoaderPromise;

    if (typeof window.html2pdf === 'undefined') {
        throw new Error('html2pdf bundle loaded but window.html2pdf is unavailable');
    }
}

const PDF_LOADER_ID = 'pdfDownloadOverlay';
const MOBILE_PDF_BREAKPOINT = 768;
const PDF_GENERATION_TIMEOUT_MS = 45000;
const PDF_CAPTURE_WIDTH = 794;
let activeJob = null;

function notify(key) {
    document.querySelectorAll('[data-export-status], #creatorStatus').forEach(node => { node.textContent = t(key); });
}

function createJob() {
    const controller = new AbortController();
    return {
        controller,
        async wait(promise) {
            controller.signal.throwIfAborted();
            let abort;
            const cancelled = new Promise((_, reject) => {
                abort = () => reject(new DOMException('Export cancelled', 'AbortError'));
                controller.signal.addEventListener('abort', abort, { once: true });
            });
            try { return await Promise.race([promise, cancelled]); }
            finally { controller.signal.removeEventListener('abort', abort); }
        }
    };
}

function togglePdfLoader(show, message = t('preparingPdf')) {
    let overlay = document.getElementById(PDF_LOADER_ID);
    if (show) {
        if (!overlay) {
            overlay = document.createElement('dialog');
            overlay.id = PDF_LOADER_ID;
            overlay.setAttribute('aria-labelledby', 'pdfDownloadMessage');
            Object.assign(overlay.style, {
                position: 'fixed',
                margin: 'auto',
                maxWidth: 'min(420px, 94vw)'
            });
            overlay.innerHTML = `
                <div style="background:#fff;padding:18px 28px;border-radius:14px;box-shadow:0 20px 45px rgba(15,23,42,0.25);display:flex;flex-direction:column;align-items:center;gap:10px;min-width:220px;">
                    <div style="width:26px;height:26px;border-radius:50%;border:3px solid rgba(15,23,42,0.15);border-top-color:#6366f1;animation:pdfSpin 0.8s linear infinite;"></div>
                    <p id="pdfDownloadMessage" style="margin:0;font-size:14px;font-weight:600;color:#0f172a;text-align:center;">${t('preparingPdf')}</p>
                    <p style="margin:0;font-size:12px;color:#64748b;text-align:center;max-width:260px;">${t('keepTabOpen')}</p>
                    <button type="button" class="btn btn-outline" id="cancelExport">${t('cancel')}</button>
                </div>
                <style>
                    @keyframes pdfSpin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
                </style>
            `;
            const cancel = () => activeJob?.controller.abort();
            overlay.querySelector('#cancelExport').addEventListener('click', cancel);
            overlay.addEventListener('cancel', event => { event.preventDefault(); cancel(); });
        }
        document.body.appendChild(overlay);
        if (!overlay.open) overlay.showModal();
        const messageNode = overlay.querySelector('#pdfDownloadMessage');
        if (messageNode) {
            messageNode.textContent = message;
        }
    } else if (overlay?.parentNode) {
        overlay.close();
        overlay.remove();
    }
}

function setPdfLoaderMessage(message) {
    const messageNode = document.getElementById('pdfDownloadMessage');
    if (messageNode) {
        messageNode.textContent = message;
    }
}

function createPdfDocument(data) {
    const wrapper = document.createElement('div');
    Object.assign(wrapper.style, {
        position: 'fixed',
        top: '0',
        left: '0',
        width: `${PDF_CAPTURE_WIDTH}px`,
        minHeight: '0',
        background: '#ffffff',
        zIndex: '9998',
        pointerEvents: 'none',
        overflow: 'visible',
        opacity: '1',
        transform: 'translateZ(0)'
    });

    const paperNode = document.createElement('div');
    paperNode.className = 'biodata-paper';
    paperNode.style.width = `${PDF_CAPTURE_WIDTH}px`;
    paperNode.style.maxWidth = `${PDF_CAPTURE_WIDTH}px`;
    paperNode.style.minHeight = '0';
    paperNode.style.paddingBottom = '0';
    paperNode.style.boxShadow = 'none';
    paperNode.style.margin = '0';
    paperNode.style.background = '#ffffff';
    paperNode.style.borderRadius = '0';
    paperNode.style.overflow = 'visible';
    paperNode.style.color = '#0f172a';
    paperNode.style.fontFamily = "'Inter', -apple-system, BlinkMacSystemFont, sans-serif";

    renderTemplateInto(paperNode, data);

    wrapper.appendChild(paperNode);
    document.body.appendChild(wrapper);

    return { wrapper, paperNode };
}

function isMobilePdfFlow() {
    return window.matchMedia(`(max-width: ${MOBILE_PDF_BREAKPOINT}px)`).matches ||
        /Android|webOS|iPhone|iPad|iPod|Mobile|SamsungBrowser/i.test(navigator.userAgent);
}

function withTimeout(promise, timeoutMs, message) {
    let timeoutId;
    const timeoutPromise = new Promise((_, reject) => {
        timeoutId = setTimeout(() => reject(new Error(message)), timeoutMs);
    });

    return Promise.race([promise, timeoutPromise]).finally(() => clearTimeout(timeoutId));
}

async function waitForPdfAssets(root) {
    const images = Array.from(root.querySelectorAll('img'));
    await withTimeout(Promise.all(images.map(img => img.decode())), 15000, 'ASSETS_FAILED');
    const fonts = root.ownerDocument.fonts;
    // Force layout so script-specific fallback fonts are requested before waiting.
    root.getBoundingClientRect();
    await withTimeout(fonts.ready, 15000, 'ASSETS_FAILED');
    if ([...fonts].some(font => font.status === 'error')) throw new Error('ASSETS_FAILED');

    await nextFrame();
    await wait(80);
}

async function preparePdfCapture(pdfDocument) {
    await waitForPdfAssets(pdfDocument.paperNode);

    const contentHeight = Math.max(
        pdfDocument.paperNode.scrollHeight,
        pdfDocument.paperNode.offsetHeight,
        pdfDocument.paperNode.getBoundingClientRect().height
    );
    const captureHeight = Math.ceil(contentHeight);
    pdfDocument.wrapper.style.height = `${captureHeight}px`;
    pdfDocument.paperNode.style.height = 'auto';

    await nextFrame();

    const bounds = pdfDocument.paperNode.getBoundingClientRect();
    if (!bounds.width || !bounds.height || !pdfDocument.paperNode.textContent.trim()) {
        throw new Error('The biodata preview was not ready. Please try the download again.');
    }

    return captureHeight;
}

function triggerBlobDownload(blob, fileName) {
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    link.rel = 'noopener';
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    link.remove();

    setTimeout(() => URL.revokeObjectURL(url), 30000);
}

function canvasHasVisibleContent(canvas) {
    const context = canvas.getContext('2d', { willReadFrequently: true });
    if (!context) return true;

    const stepX = Math.max(16, Math.floor(canvas.width / 24));
    const stepY = Math.max(16, Math.floor(canvas.height / 32));

    for (let y = 0; y < canvas.height; y += stepY) {
        for (let x = 0; x < canvas.width; x += stepX) {
            const [red, green, blue, alpha] = context.getImageData(x, y, 1, 1).data;
            if (alpha > 0 && (red < 245 || green < 245 || blue < 245)) {
                return true;
            }
        }
    }

    return false;
}

function createPdfBlobFromCanvas(canvas) {
    const { jsPDF } = window.jspdf || {};
    if (!jsPDF) {
        throw new Error('PDF engine is not ready. Please refresh and try again.');
    }

    const pdf = new jsPDF({
        unit: 'mm',
        format: 'a4',
        orientation: 'portrait',
        compress: true
    });

    const pageWidth = 210;
    const pageHeight = 297;
    const imageHeight = (canvas.height * pageWidth) / canvas.width;
    const imageData = canvas.toDataURL('image/jpeg', 0.92);

    if (imageHeight > pageHeight) {
        const fittedWidth = (canvas.width * pageHeight) / canvas.height;
        const xOffset = (pageWidth - fittedWidth) / 2;
        pdf.addImage(imageData, 'JPEG', xOffset, 0, fittedWidth, pageHeight, undefined, 'FAST');
        return pdf.output('blob');
    }

    pdf.addImage(imageData, 'JPEG', 0, 0, pageWidth, imageHeight, undefined, 'FAST');
    return pdf.output('blob');
}

async function createMobilePdfBlob(pdfDocument, html2canvasOptions) {
    if (typeof window.html2canvas === 'function' && window.jspdf?.jsPDF) {
        const canvas = await withTimeout(
            window.html2canvas(pdfDocument.wrapper, html2canvasOptions),
            PDF_GENERATION_TIMEOUT_MS,
            'PDF preview generation took too long. Please try again after closing other tabs.'
        );

        if (!canvas.width || !canvas.height || !canvasHasVisibleContent(canvas)) {
            throw new Error('The PDF preview rendered blank. Please try the download again.');
        }

        return createPdfBlobFromCanvas(canvas);
    }

    return withTimeout(
        window.html2pdf().set({
            margin: 0,
            image: { type: 'jpeg', quality: 0.92 },
            html2canvas: html2canvasOptions,
            jsPDF: {
                unit: 'mm',
                format: 'a4',
                orientation: 'portrait',
                compress: true
            },
            pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
        }).from(pdfDocument.wrapper).outputPdf('blob'),
        PDF_GENERATION_TIMEOUT_MS,
        'PDF generation took too long. Please try again after closing other tabs.'
    );
}

async function handleMobilePdfDownload(data, job) {
    let pdfDocument;

    try {
        pdfDocument = createPdfDocument(data);
        await nextFrame();
        togglePdfLoader(true, t('preparingBiodata'));
        await job.wait(ensurePdfEngine());
        const captureHeight = await job.wait(preparePdfCapture(pdfDocument));

        setPdfLoaderMessage(t('generatingPdf'));

        const fileName = getPdfFileName(data);
        const html2canvasOptions = {
            scale: Math.min(1.45, window.devicePixelRatio || 1.25),
            useCORS: true,
            allowTaint: true,
            backgroundColor: '#ffffff',
            logging: false,
            imageTimeout: 15000,
            removeContainer: true,
            scrollX: 0,
            scrollY: 0,
            width: PDF_CAPTURE_WIDTH,
            height: captureHeight,
            windowWidth: PDF_CAPTURE_WIDTH,
            windowHeight: captureHeight
        };

        const blob = await job.wait(createMobilePdfBlob(pdfDocument, html2canvasOptions));
        job.controller.signal.throwIfAborted();
        if (!(blob instanceof Blob) || blob.size < 100) throw new Error('PDF_EMPTY');

        setPdfLoaderMessage(t('startingDownload'));
        triggerBlobDownload(blob, fileName);
        notify('downloadStarted');
        await wait(500);
        return 'download-requested';
    } finally {
        pdfDocument?.wrapper?.remove();
        togglePdfLoader(false);
    }
}

async function preparePrintPage(printWindow, printUrl) {
    let loadedPage;
    try {
        await withTimeout(new Promise(resolve => {
            loadedPage = () => {
                if (printWindow.location.href === printUrl && printWindow.document.readyState === 'complete') resolve();
            };
            printWindow.addEventListener('load', loadedPage);
            loadedPage();
        }), 15000, 'PRINT_PAGE_FAILED');
    } finally {
        printWindow.removeEventListener('load', loadedPage);
    }
}

async function handlePrint(data) {
    const printUrl = new URL('../Marriage-Biodata.html', import.meta.url).href;
    const printWindow = window.open(printUrl, '_blank', 'width=800,height=1000');
    if (!printWindow) {
        notify('popupBlocked');
        return 'popup-blocked';
    }

    try {
        await preparePrintPage(printWindow, printUrl);
    } catch (error) {
        if (printWindow.closed) { notify('exportCancelled'); return 'cancelled'; }
        throw error;
    }
    if (printWindow.closed) { notify('exportCancelled'); return 'cancelled'; }
    const instructions = printWindow.document.getElementById('printInstructions');
    if (!instructions) throw new Error('PRINT_PAGE_FAILED');
    instructions.remove();
    printWindow.document.title = getPdfFileName(data).slice(0, -4);
    printWindow.document.documentElement.lang = store.state.language;
    const paper = printWindow.document.querySelector('.biodata-wrapper');
    renderTemplateInto(paper, data);
    const stylesheet = printWindow.document.createElement('link');
    stylesheet.rel = 'stylesheet';
    stylesheet.href = 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap';
    const loaded = new Promise((resolve, reject) => {
        stylesheet.onload = resolve;
        stylesheet.onerror = () => reject(new Error('ASSETS_FAILED'));
    });
    printWindow.document.head.append(stylesheet);
    await withTimeout(loaded, 15000, 'ASSETS_FAILED');
    if (printWindow.closed) { notify('exportCancelled'); return 'cancelled'; }
    await waitForPdfAssets(paper);
    if (printWindow.closed) { notify('exportCancelled'); return 'cancelled'; }
    printWindow.focus();
    notify('printOpened');
    printWindow.print();
    return 'print-opened';
}

async function handleDownload() {
    if (activeJob) return 'busy';
    if (!store.hasContent()) { notify('emptyExport'); return 'empty'; }
    const data = store.getData();
    const errors = contactErrors(data);
    if (Object.keys(errors).length) { notify(Object.values(errors)[0]); return 'invalid'; }
    activeJob = createJob();
    document.querySelectorAll('[data-export]').forEach(button => { button.disabled = true; });
    try {
        return await (isMobilePdfFlow() ? handleMobilePdfDownload(data, activeJob) : handlePrint(data));
    } catch (error) {
        const cancelled = error.name === 'AbortError';
        if (!cancelled) console.error('Biodata export failed. No document content logged.');
        notify(cancelled ? 'exportCancelled' : error.message === 'ASSETS_FAILED' ? 'assetsFailed' : 'exportFailed');
        return cancelled ? 'cancelled' : 'failed';
    } finally {
        activeJob = null;
        document.querySelectorAll('[data-export]').forEach(button => { button.disabled = false; });
    }
}

export { handleDownload, isMobilePdfFlow };
