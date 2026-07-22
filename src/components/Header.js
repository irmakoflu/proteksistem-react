import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import { markAppNav } from '../utils/navHelpers';

function Header({ lang, setLang }) {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (location.pathname !== '/') return;

    const sectionIds = ['home', 'hakkimizda', 'services'];
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
    location.pathname.startsWith('/hizmetlerimiz') ||
    (location.pathname === '/' && activeSection === 'services');
  const isContactActive = location.pathname.startsWith('/iletisim');

  return (
    <>
      <div className="topbar">
        <div className="wrap">
          <a href="tel:+902629994323">
            <span>{lang === 'tr' ? 'Tel' : 'Phone'}</span>+90 262 999 4323
          </a>
          <a href="mailto:bilgi@proteksistem.com">
            <span>{lang === 'tr' ? 'E-posta' : 'Email'}</span>bilgi@proteksistem.com
          </a>
        </div>
      </div>

      <header>
        <div className="navrow wrap">
          <Link to="/" className="logo-link" onClick={handleHomeClick}>
            <img src={logo} alt="Protek Yazılım Sistem Danışmanlık" className="logo-img" />
          </Link>

          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
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
                  {lang === 'tr' ? 'Ana Sayfa' : 'Home'}
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  state={{ scrollTo: 'hakkimizda' }}
                  className={isAboutActive ? 'nav-active' : ''}
                  onClick={handleNavClick}
                >
                  {lang === 'tr' ? 'Hakkımızda' : 'About Us'}
                </Link>
              </li>
              <li>
                <Link
                  to="/hizmetlerimiz"
                  className={isServicesActive ? 'nav-active' : ''}
                  onClick={handleNavClick}
                >
                  {lang === 'tr' ? 'HİZMETLERİMİZ' : 'Services'}
                </Link>
              </li>
              <li>
                <Link
                  to="/iletisim"
                  className={isContactActive ? 'nav-active' : ''}
                  onClick={handleNavClick}
                >
                  {lang === 'tr' ? 'İLETİŞİM' : 'Contact'}
                </Link>
              </li>
              <li className="lang">
                <button
                  onClick={() => setLang(lang === 'tr' ? 'en' : 'tr')}
                  className="lang-toggle-btn"
                  title={lang === 'tr' ? 'Switch to English' : "Türkçe'ye geç"}
                >
                  <img
                    src={lang === 'tr' ? 'https://flagcdn.com/w40/gb.png' : 'https://flagcdn.com/w40/tr.png'}
                    alt={lang === 'tr' ? 'English' : 'Türkçe'}
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