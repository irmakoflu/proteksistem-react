import { useEffect } from 'react';
import { useCookieConsent } from '../hooks/useCookieConsent';

// Örnek: Google Ads remarketing / Meta Pixel gibi hedefleme araçları buraya bağlanır.
const ADS_ID = 'AW-XXXXXXXXX';

function Marketing() {
  const canTarget = useCookieConsent('targeting');

  useEffect(() => {
    const scriptId = 'ads-script';

    if (canTarget) {
      if (document.getElementById(scriptId)) return;

      const script = document.createElement('script');
      script.id = scriptId;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${ADS_ID}`;
      script.async = true;
      document.head.appendChild(script);
    } else {
      const script = document.getElementById(scriptId);
      if (script) document.head.removeChild(script);

      // Hedefleme çerezlerini (_gcl, _fbp gibi) temizle
      document.cookie.split(';').forEach((c) => {
        const name = c.split('=')[0].trim();
        if (name.startsWith('_gcl') || name.startsWith('_fbp')) {
          document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        }
      });
    }
  }, [canTarget]);

  return null;
}

export default Marketing;