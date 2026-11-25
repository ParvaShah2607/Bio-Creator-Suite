// Preserve the legacy acceptance rule until a new phone policy is approved.
export const phoneRegex = /^\+?[0-9\s-]{10,13}$/;
export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function contactErrors(data) {
    const errors = {};
    if (data.contactNumber.trim() && !phoneRegex.test(data.contactNumber.trim())) errors.contactNumber = 'invalidPhone';
    if (data.email.trim() && !emailRegex.test(data.email.trim())) errors.email = 'invalidEmail';
    return errors;
}

export function calculateAge(value, today = new Date()) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return '';
    const [year, month, day] = value.split('-').map(Number);
    const birth = new Date(year, month - 1, day);
    if (birth.getFullYear() !== year || birth.getMonth() !== month - 1 || birth.getDate() !== day) return '';
    let age = today.getFullYear() - year;
    if (today.getMonth() + 1 < month || (today.getMonth() + 1 === month && today.getDate() < day)) age--;
    return age >= 18 && age <= 99 ? String(age) : '';
}
