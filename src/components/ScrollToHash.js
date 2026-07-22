import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToHash() {
  const location = useLocation();

  useLayoutEffect(() => {
    const cameFromApp = sessionStorage.getItem('appNav');
    const target = location.state && location.state.scrollTo;

    if (target && cameFromApp) {
      const el = document.getElementById(target);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 50);
    } else {
      const topbarHeight = document.querySelector('.topbar')?.offsetHeight || 0;
      window.scrollTo(0, topbarHeight);
    }
  }, [location]);

  return null;
}

export default ScrollToHash;