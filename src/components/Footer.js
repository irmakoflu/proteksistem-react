import React from 'react';
import { useTranslation } from '../i18n';

function Footer({ lang }) {
  const { t } = useTranslation(lang);

  return (
    <footer>
      <b>{t('footer.brand')}</b> © 2026 — {t('footer.rights')}
    </footer>
  );
}

export default Footer;