import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

function Header({ lang, setLang }) {
  const location = useLocation();

const handleHomeClick = (e) => {
  if (location.pathname === '/') {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};

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
          <nav>
            <ul>
              <li>
                <Link to="/" className="nav-home" onClick={handleHomeClick}>
                  {lang === 'tr' ? 'Ana Sayfa' : 'Home'}
                </Link>
              </li>
              <li><Link to="/#hakkimizda">{lang === 'tr' ? 'Hakkımızda' : 'About Us'}</Link></li>
              <li><Link to="/hizmetlerimiz">{lang === 'tr' ? 'HİZMETLERİMİZ' : 'Services'}</Link></li>
              <li><Link to="/#iletisim">{lang === 'tr' ? 'İLETİŞİM' : 'Contact'}</Link></li>
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