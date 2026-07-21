import React from 'react';
import { useNavigate } from 'react-router-dom';

function Services({ lang }) {
  const navigate = useNavigate();
  const goToService = (key) => navigate(`/hizmetlerimiz/${key}`);

  return (
    <div className="services-page">
      <div className="services" id="services">
        <div className="services-heading">
          <span className="services-kicker">{lang === 'tr' ? 'NELER SUNUYORUZ' : 'WHAT WE OFFER'}</span>
          <h2>{lang === 'tr' ? 'Hizmetlerimiz' : 'Our Services'}</h2>
        </div>
        <div className="grid">

          <div className="card c-erp" onClick={() => goToService('erp')}>
            <div className="icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7"><path d="M4 21V7l8-4 8 4v14M9 21v-6h6v6M4 11h16"/></svg></div>
            <h3>{lang === 'tr' ? 'ERP Danışmanlığı' : 'ERP Consulting'}</h3>
            <p>{lang === 'tr' ? 'SAP ERP ile finans, tedarik zinciri ve operasyon süreçlerinizi tek bir platformda yönetin.' : 'Manage your finance, supply chain and operations processes on a single platform with SAP ERP.'}</p>
            <span className="more">{lang === 'tr' ? 'Detaylı bilgi →' : 'Learn more →'}</span>
          </div>

          <div className="card c-crm" onClick={() => goToService('crm')}>
            <div className="icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7"><path d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m5-2.63a4 4 0 100-8 4 4 0 000 8zm7-2a4 4 0 10-2-7.47"/></svg></div>
            <h3>{lang === 'tr' ? 'CRM Danışmanlığı' : 'CRM Consulting'}</h3>
            <p>{lang === 'tr' ? 'Pazarlama, satış ve servis modülleriyle bütünleşik SAP CRM çözümleri.' : 'SAP CRM solutions integrated with marketing, sales and service modules.'}</p>
            <span className="more">{lang === 'tr' ? 'Detaylı bilgi →' : 'Learn more →'}</span>
          </div>

          <div className="card c-edefter" onClick={() => goToService('edefter')}>
            <div className="icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7"><path d="M4 19.5A2.5 2.5 0 016.5 17H20M4 4.5A2.5 2.5 0 016.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15z"/></svg></div>
            <h3>{lang === 'tr' ? 'e-Defter' : 'e-Ledger'}</h3>
            <p>{lang === 'tr' ? 'SAP sistemleri için XBRL raporlama altyapısı ile hızlı e-defter üretimi.' : 'e-Ledger generation for SAP systems via familiar screens, powered by XBRL.'}</p>
            <span className="more">{lang === 'tr' ? 'Detaylı bilgi →' : 'Learn more →'}</span>
          </div>

          <div className="card c-ui5" onClick={() => goToService('ui5')}>
            <div className="icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7"><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/></svg></div>
            <h3>{lang === 'tr' ? 'Fiori / UI5 Uygulamaları' : 'Fiori / UI5 Applications'}</h3>
            <p>{lang === 'tr' ? 'Kurulum gerektirmeden tarayıcı üzerinden çalışan mobil, tablet ve masaüstü uygulamaları.' : 'Approval, data entry and reporting apps that run through the browser — no installation required.'}</p>
            <span className="more">{lang === 'tr' ? 'Detaylı bilgi →' : 'Learn more →'}</span>
          </div>

          <div className="card c-ik" onClick={() => goToService('ik')}>
            <div className="icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7"><circle cx="12" cy="8" r="4"/><path d="M4 21v-1a8 8 0 0116 0v1"/></svg></div>
            <h3>{lang === 'tr' ? 'İnsan Kaynakları' : 'Human Resources'}</h3>
            <p>{lang === 'tr' ? 'Sürekli eğitim, şeffaf yönetim ve çalışan haklarının korunması prensipleri.' : 'A corporate culture shaped by continuous training, transparent management and rights protection.'}</p>
            <span className="more">{lang === 'tr' ? 'Detaylı bilgi →' : 'Learn more →'}</span>
          </div>

          <div className="card c-contact" onClick={() => window.location.href='/#iletisim'}>
            <div className="icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7"><path d="M4 4h16v16H4V4z"/><path d="M4 6l8 7 8-7"/></svg></div>
            <h3>{lang === 'tr' ? 'Bize Ulaşın' : 'Get in Touch'}</h3>
            <p>{lang === 'tr' ? 'Projeleriniz veya demo talepleriniz için ekibimizle iletişime geçin.' : 'Reach out to our team directly for your projects or a demo of our applications.'}</p>
            <span className="more">{lang === 'tr' ? 'İletişim →' : 'Contact →'}</span>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Services;