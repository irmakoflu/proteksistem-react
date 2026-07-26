import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { markAppNav } from '../utils/navHelpers';
import { useTranslation } from '../i18n';
import BackButton from '../components/BackButton';
import servicesData from '../data/servicesData'; 

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
      <BackButton lang={lang}/>
      <div className="services" id="services">
        <div className="services-heading">
          <span className="services-kicker">{t('home.whatWeOffer')}</span>
          <h2>{t('home.ourServices')}</h2>
        </div>
        <div className="grid">

          <div className="card c-erp" onClick={() => goToService('erp')}>
            <div className="icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7"><path d="M4 21V7l8-4 8 4v14M9 21v-6h6v6M4 11h16"/></svg></div>
            <h3>{t('services.erp.title')}</h3>
            <p>{t('services.erp.cardDesc')}</p>
            <span className="more">{t('common.learnMore')}</span>
          </div>

          <div className="card c-crm" onClick={() => goToService('crm')}>
            <div className="icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7"><path d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m5-2.63a4 4 0 100-8 4 4 0 000 8zm7-2a4 4 0 10-2-7.47"/></svg></div>
            <h3>{t('services.crm.title')}</h3>
            <p>{t('services.crm.cardDesc')}</p>
            <span className="more">{t('common.learnMore')}</span>
          </div>

          <div className="card c-edefter" onClick={() => goToService('edefter')}>
            <div className="icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7"><path d="M4 19.5A2.5 2.5 0 016.5 17H20M4 4.5A2.5 2.5 0 016.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15z"/></svg></div>
            <h3>{t('services.edefter.title')}</h3>
            <p>{t('services.edefter.cardDesc')}</p>
            <span className="more">{t('common.learnMore')}</span>
          </div>

          <div className="card c-ui5" onClick={() => goToService('ui5')}>
            <div className="icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7"><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/></svg></div>
            <h3>{t('services.ui5.title')}</h3>
            <p>{t('services.ui5.cardDesc')}</p>
            <span className="more">{t('common.learnMore')}</span>
          </div>

        

        </div>
      </div>
    </div>
  );
}

export default Services;