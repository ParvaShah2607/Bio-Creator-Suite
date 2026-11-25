export function setupDialogKeyboard() {
    document.addEventListener('keydown', event => {
        if (event.key !== 'Tab') return;
        const dialog = [...document.querySelectorAll('dialog[open]')].at(-1);
        if (!dialog) return;
        const controls = [...dialog.querySelectorAll('button:not(:disabled), input:not(:disabled), select:not(:disabled), textarea:not(:disabled), a[href], [tabindex="0"]')]
            .filter(node => node.getClientRects().length && !node.closest('[inert]'));
        const first = controls[0], last = controls.at(-1);
        if (!first) { event.preventDefault(); dialog.focus(); return; }
        const outside = !controls.includes(document.activeElement);
        if (outside || (event.shiftKey && document.activeElement === first) || (!event.shiftKey && document.activeElement === last)) {
            event.preventDefault();
            (event.shiftKey ? last : first).focus();
        }
    });
}
