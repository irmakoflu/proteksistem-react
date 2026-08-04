import React from 'react';
import { useTranslation } from '../i18n';

function ServiceModal({ activeService, activeKey, lang, onClose }) {
  const { t } = useTranslation(lang);

  if (!activeService) return null;
  const s = activeService;
  const targetEmail = s.email || 'bilgi@proteksistem.com';

  return (
    <div
      className="modal-overlay active"
      onClick={(e) => { if (e.target.classList.contains('modal-overlay')) onClose(); }}
    >
      <div className="modal-box" style={{ background: s.color }}>
        <button className="modal-close" onClick={onClose}>✕</button>
        <div className="modal-icon" dangerouslySetInnerHTML={{ __html: s.icon }}></div>
        <div className="modal-eyebrow">{t('serviceDetail.eyebrow')}</div>
        <h2>{s.title}</h2>
        <p style={{ fontSize: '1.1em', marginBottom: 20 }}>{s.body}</p>
        <h4 style={{ marginBottom: 10 }}>
          {activeKey === 'ik' ? t('serviceDetail.whyProtek') : t('serviceDetail.ourSolutions')}
        </h4>
        <ul>{s.features.map((f, i) => <li key={i}>→ {f}</li>)}</ul>
        
    
        <a
          href={`mailto:${targetEmail}?subject=${t('serviceDetail.emailSubject')}: ${s.title}`}
          className="modal-btn"
        >
          {t('serviceDetail.requestInfo')}
        </a>
      </div>
    </div>
  );
}

export default ServiceModal;