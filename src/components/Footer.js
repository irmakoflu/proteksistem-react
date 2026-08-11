import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { markAppNav } from '../utils/navHelpers';
import { useTranslation } from '../i18n';

function Footer({ lang }) {
  const { t } = useTranslation(lang);
  const location = useLocation();

  const links = [
    { to: '/politikalar/gizlilik-politikasi', label: t('footerLinks.privacy') },
    { to: '/politikalar/kvkk-aydinlatma-metni', label: t('footerLinks.kvkk') },
    { to: '/politikalar/cerez-politikasi', label: t('footerLinks.cookies') },
    { to: '/politikalar/kullanim-kosullari', label: t('footerLinks.terms') },
    { to: '/politikalar/ticaret-sicil-bilgileri', label: t('footerLinks.registry') },
    { to: '/politikalar/hizmet-seviyesi-taahhutleri', label: t('footerLinks.sla') },
    { to: '/politikalar/kalite-politikasi', label: t('footerLinks.quality') },
    { to: '/bilgi-guvenligi-politikasi', label: t('footerLinks.security') },
  ];

  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-links">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => markAppNav()}
              className={`footer-link${location.pathname === link.to ? ' footer-link-active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="footer-brand">
          <b>{t('footer.brand')}</b>
          <span className="footer-divider-dot">•</span>
          <span>© 2026 — {t('footer.rights')}</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;