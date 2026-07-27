import React, { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import { markAppNav } from '../utils/navHelpers';
import { useTranslation } from '../i18n';

function Header({ lang, setLang }) {
  const location = useLocation();
  const { t } = useTranslation(lang);
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  // Bir nav linkine tıklandığında, hedef bölüme scroll bitene kadar
  // IntersectionObserver'ın activeSection'ı ezmesini engellemek için kilit.
  const lockRef = useRef(false);
  const lockScrollListenerRef = useRef(null);
  const lockTimeoutRef = useRef(null);

  useEffect(() => {
    if (location.pathname !== '/') return;

   const sectionIds = ['home', 'hakkimizda', 'featured-urunler', 'services', 'insan-kaynaklari'];
    const observer = new IntersectionObserver(
      (entries) => {
        if (lockRef.current) return; // scroll devam ederken ara bölümleri yoksay
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Kırmızı kutuyu hemen hedefe sabitler ve scroll bitene kadar (veya en
  // fazla 1.5sn) kilitli tutar. Scroll bittiğinde otomatik olarak kilit açılır.
  const jumpActiveSectionTo = (targetId) => {
    setActiveSection(targetId);
    lockRef.current = true;

    if (lockScrollListenerRef.current) {
      window.removeEventListener('scroll', lockScrollListenerRef.current);
    }
    if (lockTimeoutRef.current) clearTimeout(lockTimeoutRef.current);

    const releaseLock = () => {
      lockRef.current = false;
      if (lockScrollListenerRef.current) {
        window.removeEventListener('scroll', lockScrollListenerRef.current);
        lockScrollListenerRef.current = null;
      }
    };

    const onScroll = () => {
      if (lockTimeoutRef.current) clearTimeout(lockTimeoutRef.current);
      lockTimeoutRef.current = setTimeout(releaseLock, 150);
    };

    lockScrollListenerRef.current = onScroll;
    window.addEventListener('scroll', onScroll, { passive: true });

    // Hiç scroll eventi gelmezse (ör. zaten hedefteysek) diye güvenlik ağı
    lockTimeoutRef.current = setTimeout(releaseLock, 1500);
  };

  const handleHomeClick = (e) => {
    markAppNav();
    setMenuOpen(false);
    jumpActiveSectionTo('home');
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNavClick = (targetId) => {
    markAppNav();
    setMenuOpen(false);
    if (targetId) jumpActiveSectionTo(targetId);
  };

  const isHomeActive = location.pathname === '/' && activeSection === 'home';
  const isAboutActive = location.pathname === '/' && activeSection === 'hakkimizda';
   const isFeaturedActive = location.pathname === '/' && activeSection === 'featured-urunler';
  const isServicesActive =
    (location.pathname === '/' && activeSection === 'services') ||
    location.pathname.startsWith('/hizmetlerimiz');
  const isHRActive = location.pathname === '/' && activeSection === 'insan-kaynaklari';
  const isContactActive = location.pathname.startsWith('/iletisim');

  return (
    <>
      <header>
        <div className="navrow wrap">
          <Link to="/" className="logo-link" onClick={handleHomeClick}>
            <img src={logo} alt={t('common.logoAlt')} className="logo-img" />
          </Link>

          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={t('common.menuAria')}
          >
            {menuOpen ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            )}
          </button>

          <nav className={menuOpen ? 'nav-open' : ''}>
            <ul>
              <li>
                <Link to="/" className={isHomeActive ? 'nav-active' : ''} onClick={handleHomeClick}>
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  state={{ scrollTo: 'hakkimizda' }}
                  className={isAboutActive ? 'nav-active' : ''}
                  onClick={() => handleNavClick('hakkimizda')}
                >
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  state={{ scrollTo: 'featured-urunler' }}
                  className={isFeaturedActive ? 'nav-active' : ''}
                  onClick={() => handleNavClick('featured-urunler')}
                >
                  {t('nav.products')}
                </Link>
              </li>

              <li className="dropdown">
                <Link
                  to="/"
                  state={{ scrollTo: 'services' }}
                  className={isServicesActive ? 'nav-active' : ''}
                  onClick={() => handleNavClick('services')}
                >
                  {t('nav.services')}
                </Link>
                <div className="menu">
                  <Link to="/hizmetlerimiz/erp" onClick={() => handleNavClick()}>{t('services.erp.title')}</Link>
                  <Link to="/hizmetlerimiz/crm" onClick={() => handleNavClick()}>{t('services.crm.title')}</Link>
                  <Link to="/hizmetlerimiz/edefter" onClick={() => handleNavClick()}>{t('services.edefter.title')}</Link>
                  <Link to="/hizmetlerimiz/ui5" onClick={() => handleNavClick()}>{t('services.ui5.title')}</Link>
                    <Link to="/hizmetlerimiz/yapayzeka" onClick={() => handleNavClick()}>{t('services.yapayzeka.title')}</Link>
                </div>
              </li>
              <li>
                <Link
                  to="/"
                  state={{ scrollTo: 'insan-kaynaklari' }}
                  className={isHRActive ? 'nav-active' : ''}
                  onClick={() => handleNavClick('insan-kaynaklari')}
                >
                  {t('services.ik.title')}
                </Link>
              </li>
              <li>
                <Link
                  to="/iletisim"
                  className={isContactActive ? 'nav-active' : ''}
                  onClick={() => handleNavClick()}
                >
                  {t('nav.contact')}
                </Link>
              </li>
              <li className="lang">
                <button
                  onClick={() => setLang(lang === 'tr' ? 'en' : 'tr')}
                  className="lang-toggle-btn"
                  title={t('nav.switchLang')}
                >
                  <img
                    src={lang === 'tr' ? 'https://flagcdn.com/w40/gb.png' : 'https://flagcdn.com/w40/tr.png'}
                    alt={lang === 'tr' ? t('common.enLabel') : t('common.trLabel')}
                    className="flag-icon"
                  />
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;