import React from 'react';

function ServiceModal({ activeService, activeKey, lang, onClose }) {
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
        <div className="modal-eyebrow">{lang === 'tr' ? 'HİZMETLERİMİZ' : 'SERVICES'}</div>
        <h2>{s.title}</h2>
        <p style={{ fontSize: '1.1em', marginBottom: 20 }}>{s.body}</p>
        <h4 style={{ marginBottom: 10 }}>
          {activeKey === 'ik'
            ? (lang === 'tr' ? 'Neden Protek?' : 'Why Protek?')
            : (lang === 'tr' ? 'Sunduğumuz Çözümler:' : 'Our Solutions:')}
        </h4>
        <ul>{s.features.map((f, i) => <li key={i}>→ {f}</li>)}</ul>
        <a href={`mailto:${targetEmail}?subject=Bilgi Talebi: ${s.title}`} className="modal-btn">
          {lang === 'tr' ? 'Bilgi Talep Et' : 'Request Information'}
        </a>
      </div>
    </div>
  );
}

export default ServiceModal;