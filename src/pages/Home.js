import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { markAppNav } from '../utils/navHelpers';
import { useTranslation } from '../i18n';
import ikBg from '../assets/services/ik-bg.jpg';
import FeaturedCarousel from '../components/FeaturedCarousel';
import servicesData from '../data/servicesData';

const importAllClientLogos = require.context('../assets/clients', false, /\.(png|jpe?g|svg)$/);
const clientLogos = importAllClientLogos.keys().map(importAllClientLogos);

function Home({ lang }) {
  const navigate = useNavigate();
  const { t } = useTranslation(lang);

  const heroWords = t('home.heroWords');

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

  useEffect(() => {
    Object.values(servicesData).forEach((meta) => {
      if (meta.image) {
        const img = new Image();
        img.src = meta.image;
      }
    });
  }, []);

  const goToService = (key) => {
    markAppNav();
    navigate(`/hizmetlerimiz/${key}`);
  };

  const goToContact = () => {
    markAppNav();
    navigate('/iletisim');
  };
  const scrollToFeatured = () => {
    const el = document.getElementById('featured-urunler');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <section className="hero" id="home">
        <div className="hero-rotator">
          <span className="hero-rotator-label">
            {t('home.heroLabel')}
          </span>
          <h2 key={wordIndex} className="hero-rotator-word">
            {heroWords[wordIndex]}
          </h2>
        </div>
        <h1>
          {t('home.heroTitle')}
        </h1>
        <p>
          {t('home.heroText')}
        </p>
        <button className="btn" onClick={scrollToFeatured}>
          {t('home.getInTouch')}
        </button>
      </section>

      <section className="block about home-anchor-offset" id="hakkimizda">
        <div className="wrap">
          <div className="services-heading">
            <span className="services-kicker">
               {t('home.whoWeAre')}
            </span>
            <h2>{t('home.aboutTitle')}</h2>
          </div>

          <div className="about-text">
            <p>
              {t('home.aboutP1')}
            </p>
            <p>
              {t('home.aboutP2')}
            </p>

            <h4 style={{ marginTop: 24, marginBottom: 12 }}>
              {t('home.aboutHighlightsTitle')}
            </h4>
            <ul className="service-detail-list" style={{ textAlign: 'left', maxWidth: 640, margin: '0 auto' }}>
              {(t('home.aboutHighlightsList') || []).map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
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

      <FeaturedCarousel lang={lang} />

      <div className="services home-anchor-offset" id="services">
        <div className="services-heading">
          <span className="services-kicker">
            {t('home.whatWeOffer')}
          </span>
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

          <div className="card c-yapayzeka" onClick={() => goToService('yapayzeka')}>
            <div className="icon">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7">
                <rect x="7" y="7" width="10" height="10" rx="2" />
                <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.8 4.8l1.8 1.8M17.4 17.4l1.8 1.8M4.8 19.2l1.8-1.8M17.4 6.6l1.8-1.8" />
                <circle cx="9.7" cy="9.7" r="0.9" fill="currentColor" stroke="none" />
                <circle cx="14.3" cy="9.7" r="0.9" fill="currentColor" stroke="none" />
                <path d="M9.3 14c1.2 1 4.2 1 5.4 0" />
              </svg>
            </div>
            <h3>{t('services.yapayzeka.title')}</h3>
            <p>{t('services.yapayzeka.cardDesc')}</p>
            <span className="more">{t('common.learnMore')}</span>
          </div>

        </div>
      </div>

      <section
        className="block hr-section home-anchor-offset"
        id="insan-kaynaklari"
        style={{ '--hr-bg-image': `url(${ikBg})` }}
      >
        <div className="wrap">
          <div className="services-heading">
            <span className="services-kicker">
              {t('home.ourTeam')}
            </span>
            <h2>{t('services.ik.title')}</h2>
          </div>

          <div className="hr-content">
            <p className="hr-lead">{t('services.ik.body')}</p>
            <ul className="service-detail-list hr-list">
              {(t('services.ik.features') || []).map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;