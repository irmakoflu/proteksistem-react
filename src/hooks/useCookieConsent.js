import { useState, useEffect } from 'react';
import { hasConsent, CONSENT_UPDATED_EVENT } from '../utils/cookieConsent';

// Örnek kullanım: const canTrack = useCookieConsent('performance');
export function useCookieConsent(category) {
  const [allowed, setAllowed] = useState(() => hasConsent(category));

  useEffect(() => {
    const update = () => setAllowed(hasConsent(category));
    window.addEventListener(CONSENT_UPDATED_EVENT, update);
    return () => window.removeEventListener(CONSENT_UPDATED_EVENT, update);
  }, [category]);

  return allowed;
}