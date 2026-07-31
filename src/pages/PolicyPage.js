import React from 'react';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import { useTranslation } from '../i18n';

const policySlugMap = {
  'gizlilik-politikasi': 'privacy',
  'kvkk-aydinlatma-metni': 'kvkk',
  'cerez-politikasi': 'cookies',
  'kullanim-kosullari': 'terms',
  'ticaret-sicil-bilgileri': 'registry',
  'hizmet-seviyesi-taahhutleri': 'sla',
  'kalite-politikasi': 'quality',
};

function PolicyPage({ lang }) {
  const { policyKey } = useParams();
  const { t } = useTranslation(lang);
  const dictKey = policySlugMap[policyKey];
  const policy = dictKey ? t(`policies.${dictKey}`) : null;

  if (!policy || typeof policy === 'string') {
    return (
      <div className="service-detail-body wrap">
        <BackButton lang={lang} />
        <h1>{lang === 'tr' ? 'Sayfa bulunamadı' : 'Page not found'}</h1>
      </div>
    );
  }

  return (
    <div className="service-detail-body wrap">
      <BackButton lang={lang} />
      <h1>{policy.title}</h1>
      {policy.updated && <p className="kicker">{policy.updated}</p>}
      {policy.sections.map((section, i) => (
        <div key={i}>
          {section.heading && <h4>{section.heading}</h4>}
          {section.body && section.body.map((p, j) => <p key={j}>{p}</p>)}
          {section.list && (
            <ul className="service-detail-list">
              {section.list.map((item, k) => <li key={k}>{item}</li>)}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

export default PolicyPage;