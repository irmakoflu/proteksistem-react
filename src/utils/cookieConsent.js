const STORAGE_KEY = 'cookieConsent';
export const CONSENT_UPDATED_EVENT = 'cookieConsentUpdated';
export const OPEN_COOKIE_SETTINGS_EVENT = 'openCookieSettings';

export function getConsent() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

// category: 'functional' | 'targeting' | 'performance' | 'necessary'
export function hasConsent(category) {
  if (category === 'necessary') return true;
  const consent = getConsent();
  return !!(consent && consent[category]);
}

export function saveConsent(prefs) {
  const payload = { ...prefs, necessary: true, timestamp: Date.now() };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  window.dispatchEvent(new CustomEvent(CONSENT_UPDATED_EVENT, { detail: payload }));
  return payload;
}

// Footer'daki "Çerez Ayarları" linki bunu tetikleyip modalı tekrar açacak
export function openCookieSettings() {
  window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS_EVENT));
}