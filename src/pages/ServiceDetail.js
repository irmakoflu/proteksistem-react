import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import servicesData from '../data/servicesData';
import BackButton from '../components/BackButton';

function ServiceDetail({ lang }) {
  const { serviceKey } = useParams();
  const navigate = useNavigate();
  const s = servicesData[serviceKey];

  if (!s) {
    return (
      <div className="service-detail-page">
        <BackButton lang={lang}/>
        <div className="wrap" style={{ padding: '100px 24px', textAlign: 'center' }}>
          <h2>{lang === 'tr' ? 'Hizmet bulunamadı' : 'Service not found'}</h2>
          <Link to="/hizmetlerimiz" className="btn">
            {lang === 'tr' ? 'Hizmetlerimize Dön' : 'Back to Services'}
          </Link>
        </div>
      </div>
    );
  }

  const targetEmail = s.email || 'bilgi@proteksistem.com';

  return (
    <div className="service-detail-page">
      <BackButton lang={lang}/>
   <div
  className="service-detail-hero"
  style={{
    backgroundImage: s.image ? `url(${s.image})` : 'none',
    backgroundColor: s.image ? '#0F1E33' : s.color,
  }}
>
  {s.image && <div className="service-detail-hero-overlay"></div>}
  <div className="service-detail-hero-content">
    <h1>{s.title}</h1>
  </div>
</div>
      <div className="wrap service-detail-body">
        <p className="service-detail-lead">{s.body}</p>

        <h4>
          {serviceKey === 'ik'
            ? (lang === 'tr' ? 'Neden Protek?' : 'Why Protek?')
            : (lang === 'tr' ? 'Sunduğumuz Çözümler:' : 'Our Solutions:')}
        </h4>

        <ul className="service-detail-list">
          {s.features.map((f, i) => <li key={i}>{f}</li>)}
        </ul>

        <div className="service-detail-actions">
          <a
            href={`mailto:${targetEmail}?subject=Bilgi Talebi: ${s.title}`}
            className="btn"
          >
            {lang === 'tr' ? 'Bilgi Talep Et' : 'Request Information'}
          </a>
          <Link to="/hizmetlerimiz" className="service-detail-back">
            {lang === 'tr' ? '← Tüm Hizmetler' : '← All Services'}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ServiceDetail;