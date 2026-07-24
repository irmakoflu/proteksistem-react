import React from 'react';
import { Link } from 'react-router-dom';
import { markAppNav } from '../utils/navHelpers';
import { useTranslation } from '../i18n';

function Footer({ lang }) {
  const { t } = useTranslation(lang);

  return (
    <footer>
      <b>{t('footer.brand')}</b> © 2026 — {t('footer.rights')}
      {' · '}
      <Link
        to="/bilgi-guvenligi-politikasi"
        onClick={() => markAppNav()}
        style={{ color: '#8D97A2', textDecoration: 'underline' }}
      >
        {t('securityPolicy.title')}
      </Link>
    </footer>
  );
}

export default Footer;