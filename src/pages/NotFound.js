import React from 'react';
import { Link } from 'react-router-dom';
import { markAppNav } from '../utils/navHelpers';
import { useTranslation } from '../i18n';

function NotFound({ lang }) {
  const { t } = useTranslation(lang);

  return (
    <div className="services-page" style={{ textAlign: 'center', padding: '120px 24px' }}>
      <h1 style={{ fontSize: 64, marginBottom: 16, color: 'var(--ink)' }}>404</h1>
      <p style={{ fontSize: 17, color: 'var(--text-light)', marginBottom: 28 }}>
        {lang === 'tr' ? 'Aradığınız sayfa bulunamadı.' : 'The page you are looking for was not found.'}
      </p>
      <Link to="/" className="btn" onClick={() => markAppNav()}>
        {t('nav.home')}
      </Link>
    </div>
  );
}

export default NotFound;