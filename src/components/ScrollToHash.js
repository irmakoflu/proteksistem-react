import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToHash() {
  const location = useLocation();

  useLayoutEffect(() => {
    const cameFromApp = sessionStorage.getItem('appNav');
    const target = location.state && location.state.scrollTo;

    if (target && cameFromApp) {
      const el = document.getElementById(target);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
    } else {
      // Sayfa değiştiğinde direkt en üste (0,0) konumlandırır
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }
  }, [location]);

  return null;
}

export default ScrollToHash;