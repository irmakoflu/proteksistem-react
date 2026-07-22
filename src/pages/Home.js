import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { markAppNav } from '../utils/navHelpers';
const importAllClientLogos = require.context('../assets/clients', false, /\.(png|jpe?g|svg)$/);
const clientLogos = importAllClientLogos.keys().map(importAllClientLogos);

function Home({ lang }) {
  const navigate = useNavigate();

  const heroWords = lang === 'tr'
    ? ['SAP ERP Danışmanlığı', 'CRM Çözümleri', 'e-Dönüşüm Hizmetleri', 'Fiori / UI5 Uygulamaları', 'İş Zekâsı Projeleri']
    : ['SAP ERP Consulting', 'CRM Solutions', 'e-Transformation Services', 'Fiori / UI5 Applications', 'Business Intelligence Projects'];

  const [wordIndex, setWordIndex] = useState(0);

  const half = Math.ceil(clientLogos.length / 2);
  const logosRow1 = clientLogos.slice(0, half);
  const logosRow2 = clientLogos.slice(half);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % heroWords.length);
    }, 2600);
    return () => clearInterval(interval);
  }, [lang]);

  const goToService = (key) => {
    markAppNav();
    window.open(`/#/hizmetlerimiz/${key}`, '_blank');
  };

  const goToContact = () => {
    markAppNav();
    navigate('/iletisim');
  };

  return (
    <>
      <section className="hero" id="home">
        <div className="hero-rotator">
          <span className="hero-rotator-label">
            {lang === 'tr' ? 'Uzmanlık Alanlarımız' : 'Our Expertise'}
          </span>
          <h2 key={wordIndex} className="hero-rotator-word">
            {heroWords[wordIndex]}
          </h2>
        </div>
        <h1>
          {lang === 'tr'
            ? 'Kurumsal Süreçlerinizi Sağlam Zemine Oturtan Danışmanlık Ortağınız'
            : 'Your Trusted Partner for Solid Enterprise Processes'}
        </h1>
        <p>
          {lang === 'tr'
            ? 'SAP ERP ile başlayan yolculuğumuz; iş zekâsı, tedarik zinciri, müşteri ilişkileri ve e-dönüşüm alanlarında güçlenerek sürüyor.'
            : 'Our journey, which began with SAP ERP, continues to grow stronger in business intelligence, supply chain, customer relations and e-transformation.'}
        </p>
        <button className="btn" onClick={goToContact}>
          {lang === 'tr' ? 'Bize Ulaşın' : 'Get in Touch'}
        </button>
      </section>

      <section className="block about" id="hakkimizda">
        <div className="wrap">
          <div className="services-heading">
            <span className="services-kicker">
              {lang === 'tr' ? 'BİZ KİMİZ' : 'WHO WE ARE'}
            </span>
            <h2>{lang === 'tr' ? 'Hakkımızda' : 'About Us'}</h2>
          </div>

          <div className="about-text">
            <p>
              {lang === 'tr'
                ? 'Protek, kurumsal uygulamalar alanında hizmet verdiği müşterilerinin süreçlerini kolaylaştıran, hızlı ve doğru çözümler ortaya koyar.'
                : 'Protek delivers fast, accurate solutions that simplify the processes of the clients it serves in the field of enterprise applications.'}
            </p>
            <p>
              {lang === 'tr'
                ? 'SAP ERP ile başlayan çözüm serüvenimiz; iş zekâsı, tedarik zinciri yönetimi, müşteri ilişkileri ve e-dönüşüm gibi alanlarda güçlenerek devam ediyor.'
                : 'Our solutions journey, which began with SAP ERP, continues to grow stronger in areas such as business intelligence, supply chain management, customer relations and e-transformation.'}
            </p>
          </div>

          <div className="logo-marquee">
            <div className="logo-track logo-track-left">
              {[...logosRow1, ...logosRow1].map((src, i) => (
                <img src={src} alt="client-logo" key={`r1-${i}`} className="logo-marquee-img" />
              ))}
            </div>
            <div className="logo-track logo-track-right">
              {[...logosRow2, ...logosRow2].map((src, i) => (
                <img src={src} alt="client-logo" key={`r2-${i}`} className="logo-marquee-img" />
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="services" id="services">
        <div className="services-heading">
          <span className="services-kicker">
            {lang === 'tr' ? 'NELER SUNUYORUZ' : 'WHAT WE OFFER'}
          </span>
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

          <div className="card c-contact" onClick={goToContact}>
            <div className="icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7"><path d="M4 4h16v16H4V4z"/><path d="M4 6l8 7 8-7"/></svg></div>
            <h3>{lang === 'tr' ? 'Bize Ulaşın' : 'Get in Touch'}</h3>
            <p>{lang === 'tr' ? 'Projeleriniz veya demo talepleriniz için ekibimizle iletişime geçin.' : 'Reach out to our team directly for your projects or a demo of our applications.'}</p>
            <span className="more">{lang === 'tr' ? 'İletişim →' : 'Contact →'}</span>
          </div>

        </div>
      </div>
    </>
  );
}

export default Home;