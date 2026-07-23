import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import { markAppNav } from '../utils/navHelpers';
import { useTranslation } from '../i18n';

function Header({ lang, setLang }) {
  const location = useLocation();
  const { t } = useTranslation(lang);
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    if (location.pathname !== '/') return;

    const sectionIds = ['home', 'hakkimizda', 'services', 'insan-kaynaklari'];
    const observer = new IntersectionObserver(
      (entries) => {
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
    setServicesOpen(false);
  }, [location.pathname]);

  const handleHomeClick = (e) => {
    markAppNav();
    setMenuOpen(false);
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNavClick = () => {
    markAppNav();
    setMenuOpen(false);
  };

  const isHomeActive = location.pathname === '/' && activeSection === 'home';
  const isAboutActive = location.pathname === '/' && activeSection === 'hakkimizda';
  const isServicesActive =
    (location.pathname === '/' && activeSection === 'services') ||
    location.pathname.startsWith('/hizmetlerimiz');
  const isHRActive = location.pathname === '/' && activeSection === 'insan-kaynaklari';
  const isContactActive = location.pathname.startsWith('/iletisim');

  return (
    <>
      <div className="topbar">
        <div className="wrap">
          <a href="mailto:bilgi@proteksistem.com">
            <span>{t('topbar.email')}</span>bilgi@proteksistem.com
          </a>
        </div>
      </div>

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
                  onClick={handleNavClick}
                >
                  {t('nav.about')}
                </Link>
              </li>

              <li className={`dropdown ${servicesOpen ? 'mobile-open' : ''}`}>
                <div className="dropdown-row">
                  <Link
                    to="/"
                    state={{ scrollTo: 'services' }}
                    className={isServicesActive ? 'nav-active' : ''}
                    onClick={handleNavClick}
                  >
                    {t('nav.services')}
                  </Link>
                  <button
                    type="button"
                    className="dropdown-toggle"
                    aria-label={t('common.menuAria')}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setServicesOpen((prev) => !prev);
                    }}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>
                </div>
                <div className="menu">
                  <Link to="/hizmetlerimiz/erp" onClick={handleNavClick}>{t('services.erp.title')}</Link>
                  <Link to="/hizmetlerimiz/crm" onClick={handleNavClick}>{t('services.crm.title')}</Link>
                  <Link to="/hizmetlerimiz/edefter" onClick={handleNavClick}>{t('services.edefter.title')}</Link>
                  <Link to="/hizmetlerimiz/ui5" onClick={handleNavClick}>{t('services.ui5.title')}</Link>
                </div>
              </li>

              <li>
                <Link
                  to="/"
                  state={{ scrollTo: 'insan-kaynaklari' }}
                  className={isHRActive ? 'nav-active' : ''}
                  onClick={handleNavClick}
                >
                  {t('services.ik.title')}
                </Link>
              </li>
              <li>
                <Link
                  to="/iletisim"
                  className={isContactActive ? 'nav-active' : ''}
                  onClick={handleNavClick}
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