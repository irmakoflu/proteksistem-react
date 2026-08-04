import React from 'react';
import { useNavigate } from 'react-router-dom';
import { markAppNav } from '../utils/navHelpers';
import { useTranslation } from '../i18n';
import yapayzbg from '../assets/products/ats-calendar.png';



const gradients = [
  'linear-gradient(135deg, #7a2f1f 0%, #E12419 100%)',
  'linear-gradient(135deg, #0e2a3d 0%, #008CA8 100%)',
  'linear-gradient(135deg, #14181f 0%, #2b3644 100%)',
];

// project.link değerine göre özel arka plan görseli eşliyoruz.
// Sadece "yapayzeka" kartı görsel kullanıyor; diğerleri mevcut gradyanlarda kalıyor.
const cardImages = {
  yapayzeka: yapayzbg,
};

const icons = [
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.2">
    <rect x="3" y="7" width="18" height="13" rx="2" />
    <path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" />
  </svg>,
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.2">
    <path d="M3 3v18h18" />
    <path d="M7 14l4-4 3 3 5-6" />
  </svg>,
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.4">
    <path d="M3 16l5-5 4 4 8-9" />
    <path d="M15 6h5v5" />
  </svg>,
];

function FeaturedCarousel({ lang }) {
  const navigate = useNavigate();
  const { t } = useTranslation(lang);

  const projects = t('home.featuredProjects') || [];
  if (projects.length === 0) return null;

  const handleClick = (project) => {
    markAppNav();
    if (project.link) {
      navigate(`/urunler/${project.link}`);
    } else {
      navigate('/iletisim');
    }
  };

  return (
    <section className="featured-carousel" id="featured-urunler">
      <div className="wrap">
        <div className="services-heading featured-carousel-heading">
          <span className="services-kicker">{t('home.featuredKicker')}</span>
          <h2>{t('home.featuredSectionLabel')}</h2>
        </div>
      </div>

      <div className="wrap">
        <div className="featured-visual-grid">
          {projects.map((project, i) => {
            const bgImage = cardImages[project.link];
            return (
              <div
                key={i}
                className="featured-visual-card"
                style={
                  bgImage
                    ? {
                        backgroundImage: `linear-gradient(180deg, rgba(20,20,20,.15) 0%, rgba(20,20,20,.55) 100%), url(${bgImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }
                    : { background: gradients[i % gradients.length] }
                }
                onClick={() => handleClick(project)}
                role="button"
                tabIndex={0}
              >
                <h3 className="featured-visual-title">{project.title}</h3>
                {!bgImage && (
                  <div className="featured-visual-icon-bg">{icons[i % icons.length]}</div>
                )}
                <div className="featured-visual-overlay">
                  <span>{t('home.featuredMoreLabel')}</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>

        <div className="featured-info-grid">
          {projects.map((project, i) => (
            <div
              key={i}
              className="featured-info-card"
              onClick={() => handleClick(project)}
              role="button"
              tabIndex={0}
            >
              <span className="featured-info-kicker">{project.kicker}</span>
              <h4>{project.title}</h4>
              <p>{project.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedCarousel;