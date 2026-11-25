export function getPdfFileName(data) {
    const name = String(data.fullName || '')
        .normalize('NFC')
        .replace(/[^\p{L}\p{M}\p{N}\s-]/gu, '')
        .trim()
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '')
        .slice(0, 70);
    // The prefix also prevents Windows reserved names such as CON or PRN.
    return name ? `Marriage-Biodata-${name}.pdf` : 'Marriage-Biodata.pdf';
}
