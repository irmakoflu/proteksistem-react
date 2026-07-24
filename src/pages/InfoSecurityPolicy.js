import React from 'react';
import BackButton from '../components/BackButton';
import { useTranslation } from '../i18n';

function InfoSecurityPolicy({ lang }) {
  const { t } = useTranslation(lang);

  return (
    <div className="services-page">
      <BackButton lang={lang} />
      <div className="service-detail-body" style={{ margin: '0 auto', paddingTop: 140 }}>
       <h2 style={{ marginBottom: 24 }}>{t('securityPolicy.title')}</h2>
        {(t('securityPolicy.paragraphs') || []).map((p, i) => (
          <p key={i} className="service-detail-lead" style={{ marginBottom: 18 }}>
            {p}
          </p>
        ))}
       <p style={{ marginTop: 32, fontWeight: 600 }}>{t('securityPolicy.signature1')}</p>
        <p style={{ marginTop: 24 }}>{t('securityPolicy.signature2')}</p>
      </div>
    </div>
  );
}

export default InfoSecurityPolicy;