import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { markAppNav } from '../utils/navHelpers';
import { useTranslation } from '../i18n';
import ikBg from '../assets/services/insankaynaklari.webp';
import { Settings, Handshake, Scale } from 'lucide-react';
import FeaturedCarousel from '../components/FeaturedCarousel';
import servicesData from '../data/servicesData';
import { Database, Network, FileText, MonitorSmartphone, BrainCircuit } from 'lucide-react';

const importAllClientLogos = require.context('../assets/clients', false, /\.(png|jpe?g|svg)$/);
const clientLogos = importAllClientLogos.keys().map(importAllClientLogos);
const hrIcons = [Settings, Handshake, Scale];

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
        <div className="services-grid-3col">

          <div className="card c-erp" onClick={() => goToService('erp')}>
            <div className="icon">
              <Database strokeWidth={1.6} />
            </div>
            <h3>{t('services.erp.title')}</h3>
            <p>{t('services.erp.cardDesc')}</p>
            <span className="more">{t('common.learnMore')}</span>
          </div>

          <div className="card c-crm" onClick={() => goToService('crm')}>
            <div className="icon">
              <Network strokeWidth={1.6} />
            </div>
            <h3>{t('services.crm.title')}</h3>
            <p>{t('services.crm.cardDesc')}</p>
            <span className="more">{t('common.learnMore')}</span>
          </div>

          <div className="card c-edefter" onClick={() => goToService('edefter')}>
            <div className="icon">
              <FileText strokeWidth={1.6} />
            </div>
            <h3>{t('services.edefter.title')}</h3>
            <p>{t('services.edefter.cardDesc')}</p>
            <span className="more">{t('common.learnMore')}</span>
          </div>

          <div className="card c-ui5" onClick={() => goToService('ui5')}>
            <div className="icon">
              <MonitorSmartphone strokeWidth={1.6} />
            </div>
            <h3>{t('services.ui5.title')}</h3>
            <p>{t('services.ui5.cardDesc')}</p>
            <span className="more">{t('common.learnMore')}</span>
          </div>

          <div className="card c-yapayzeka" onClick={() => goToService('yapayzeka')}>
            <div className="icon">
              <BrainCircuit strokeWidth={1.6} />
            </div>
            <h3>{t('services.yapayzeka.title')}</h3>
            <p>{t('services.yapayzeka.cardDesc')}</p>
            <span className="more">{t('common.learnMore')}</span>
          </div>

        </div>
      </div>



<section className="block hr-section home-anchor-offset" id="insan-kaynaklari">
  <div className="wrap">
    <div className="services-heading">
      <span className="services-kicker">{t('home.ourTeam')}</span>
      <h2>{t('services.ik.title')}</h2>
    </div>

    <div className="hr-photo-wrap">
      <img src={ikBg} alt={t('services.ik.title')} className="hr-photo" loading="eager" fetchPriority="high"/>

      <div className="hr-cards">
        {(t('services.ik.pillars') || []).map((p, i) => {
          const Icon = hrIcons[i] || Settings;
          return (
            <div className="hr-card" key={i}>
              <div className="hr-card-icon">
                <Icon strokeWidth={1.6} />
              </div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  </div>
</section>
    </>
  );
}

export default Home;