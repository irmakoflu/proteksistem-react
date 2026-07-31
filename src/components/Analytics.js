import { useEffect } from 'react';
import { useCookieConsent } from '../hooks/useCookieConsent';

// Google Analytics 4 ölçüm kimliğini buraya gir (Google Analytics hesabından alınır)
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';

function Analytics() {
  const canTrack = useCookieConsent('performance');

  useEffect(() => {
    const scriptId = 'ga4-script';
    const inlineId = 'ga4-inline';

    if (canTrack) {
      // Zaten yüklüyse tekrar ekleme
      if (document.getElementById(scriptId)) return;

      const script = document.createElement('script');
      script.id = scriptId;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      script.async = true;
      document.head.appendChild(script);

      const inline = document.createElement('script');
      inline.id = inlineId;
      inline.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_MEASUREMENT_ID}', { anonymize_ip: true });
      `;
      document.head.appendChild(inline);
    } else {
      // Kullanıcı izni geri çekerse (reddet / ayarları değiştirirse)
      // script'leri ve toplanan çerezleri temizle.
      const script = document.getElementById(scriptId);
      const inline = document.getElementById(inlineId);
      if (script) document.head.removeChild(script);
      if (inline) document.head.removeChild(inline);

      // GA'nın bıraktığı _ga, _ga_* çerezlerini de temizleyelim.
      document.cookie.split(';').forEach((c) => {
        const name = c.split('=')[0].trim();
        if (name.startsWith('_ga')) {
          document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        }
      });

      window.dataLayer = undefined;
    }
  }, [canTrack]);

  return null;
}

export default Analytics;