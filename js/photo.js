import { store } from './state.js';
import { t } from './localization.js';

let revision = 0;
export function removePhoto() {
    revision++;
    store.removePhoto();
    document.getElementById('photoInput').value = '';
}

export async function selectPhoto(file) {
    if (!file) return;
    const request = ++revision;
    try {
        const photo = await new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = () => reject(new Error('PHOTO_READ'));
            reader.readAsDataURL(file);
        });
        if (typeof photo !== 'string' || !photo.startsWith('data:image/')) throw new Error('PHOTO_TYPE');
        const image = new Image();
        image.src = photo;
        await image.decode();
        if (!image.naturalWidth || !image.naturalHeight) throw new Error('PHOTO_DECODE');
        if (request === revision) {
            store.setPhoto(photo);
            document.getElementById('photoError').textContent = '';
        }
    } catch {
        if (request === revision) {
            console.warn('Photo selection failed (read/type/decode). No image data logged.');
            document.getElementById('photoError').textContent = t('photoError');
        }
    } finally {
        if (request === revision) document.getElementById('photoInput').value = '';
    }
}
