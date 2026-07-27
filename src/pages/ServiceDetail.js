import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import servicesData from '../data/servicesData';
import { useTranslation } from '../i18n';
import BackButton from '../components/BackButton';

function ServiceDetail({ lang }) {
  const { serviceKey } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation(lang);
  const meta = servicesData[serviceKey];

  if (!meta) {
    return (
      <div className="service-detail-page">
        <BackButton lang={lang} />
        <div className="wrap" style={{ padding: '100px 24px', textAlign: 'center' }}>
          <h2>{t('serviceDetail.notFound')}</h2>
          <Link to="/hizmetlerimiz" className="btn">
            {t('serviceDetail.backToServices')}
          </Link>
        </div>
      </div>
    );
  }

  const title = t(`services.${serviceKey}.title`);
  const body = t(`services.${serviceKey}.body`);
  const features = t(`services.${serviceKey}.features`) || [];
  const targetEmail = meta.email || 'bilgi@proteksistem.com';

  return (
    <div className="service-detail-page">
      <BackButton lang={lang} />
      <div
        className="service-detail-hero"
        style={{
          backgroundImage: meta.image ? `url(${meta.image})` : 'none',
          backgroundColor: meta.image ? '#0F1E33' : meta.color,
          backgroundPosition: meta.imagePosition || 'center 55%',
        }}
      >
        {meta.image && <div className="service-detail-hero-overlay"></div>}
        <div className="service-detail-hero-content">
          <h1>{title}</h1>
        </div>
      </div>
      <div className="wrap service-detail-body">
        <p className="service-detail-lead">{body}</p>

        <h4>
          {serviceKey === 'ik'
            ? t('serviceDetail.whyProtek')
            : t('serviceDetail.ourSolutions')}
        </h4>

        <ul className="service-detail-list">
          {features.map((f, i) => <li key={i}>{f}</li>)}
        </ul>

        <div className="service-detail-actions">
          <a
            href={`mailto:${targetEmail}?subject=Bilgi Talebi: ${title}`}
            className="btn"
          >
            {t('serviceDetail.requestInfo')}
          </a>
          <Link to="/hizmetlerimiz" className="service-detail-back">
            {t('serviceDetail.allServices')}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ServiceDetail;