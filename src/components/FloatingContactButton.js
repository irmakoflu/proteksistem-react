import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { markAppNav } from '../utils/navHelpers';
import { useTranslation } from '../i18n';

function FloatingContactButton({ lang }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation(lang);

  // İletişim sayfasındayken butonu gösterme
  if (location.pathname.startsWith('/iletisim')) return null;

  const goToContact = () => {
    markAppNav();
    navigate('/iletisim');
  };

  return (
    <button className="floating-contact-btn" onClick={goToContact}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M22 2L11 13" />
        <path d="M22 2l-7 20-4-9-9-4 20-7z" />
      </svg>
      <span>{t('contactCard.title')}</span>
    </button>
  );
}

export default FloatingContactButton;