import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { markAppNav } from '../utils/navHelpers';
import { useTranslation } from '../i18n';
import BackButton from '../components/BackButton';
import servicesData from '../data/servicesData';

const SERVICE_KEYS = ['erp', 'crm', 'edefter', 'ui5', 'yapayzeka'];

const ICONS = {
  erp: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7">
      <path d="M4 21V7l8-4 8 4v14M9 21v-6h6v6M4 11h16" />
    </svg>
  ),
  crm: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7">
      <path d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m5-2.63a4 4 0 100-8 4 4 0 000 8zm7-2a4 4 0 10-2-7.47" />
    </svg>
  ),
  edefter: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7">
      <path d="M4 19.5A2.5 2.5 0 016.5 17H20M4 4.5A2.5 2.5 0 016.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15z" />
    </svg>
  ),
  ui5: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7">
      <rect x="7" y="2" width="10" height="20" rx="2" />
      <path d="M11 18h2" />
    </svg>
  ),
  yapayzeka: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7">
      <rect x="7" y="7" width="10" height="10" rx="2" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.8 4.8l1.8 1.8M17.4 17.4l1.8 1.8M4.8 19.2l1.8-1.8M17.4 6.6l1.8-1.8" />
      <circle cx="9.7" cy="9.7" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="14.3" cy="9.7" r="0.9" fill="currentColor" stroke="none" />
      <path d="M9.3 14c1.2 1 4.2 1 5.4 0" />
    </svg>
  ),
};

function Services({ lang }) {
  const navigate = useNavigate();
  const { t } = useTranslation(lang);

  const goToService = (key) => {
    markAppNav();
    navigate(`/hizmetlerimiz/${key}`);
  };

  useEffect(() => {
    Object.values(servicesData).forEach((meta) => {
      if (meta.image) {
        const img = new Image();
        img.src = meta.image;
      }
    });
  }, []);

  return (
    <div className="services-page">
      <BackButton lang={lang} />
      <div className="services" id="services">
        <div className="services-heading">
          <span className="services-kicker">{t('home.whatWeOffer')}</span>
          <h2>{t('home.ourServices')}</h2>
        </div>
        <div className="services-grid-3col">
          {SERVICE_KEYS.map((key) => (
            <div
              key={key}
              className={`card c-${key}`}
              onClick={() => goToService(key)}
            >
              <div className="icon">{ICONS[key]}</div>
              <h3>{t(`services.${key}.title`)}</h3>
              <p>{t(`services.${key}.cardDesc`)}</p>
              <span className="more">{t('common.learnMore')}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;