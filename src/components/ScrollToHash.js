import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToHash() {
  const location = useLocation();
  useEffect(() => {
    const cameFromApp = sessionStorage.getItem('appNav');
    const target = location.state && location.state.scrollTo;

    if (target && cameFromApp) {
      const el = document.getElementById(target);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 50);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);
  return null;
}

export default ScrollToHash;