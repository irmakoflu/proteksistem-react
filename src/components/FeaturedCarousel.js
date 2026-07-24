import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { markAppNav } from '../utils/navHelpers';
import { useTranslation } from '../i18n';

const icons = [
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.4">
    <rect x="3" y="7" width="18" height="13" rx="2" />
    <path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" />
  </svg>,
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.4">
    <path d="M3 3v18h18" />
    <path d="M7 14l4-4 3 3 5-6" />
  </svg>,
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.4">
    <circle cx="12" cy="8" r="3" />
    <path d="M4 21v-1a8 8 0 0116 0v1" />
    <path d="M9 8h.01M15 8h.01" />
  </svg>,
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.4">
    <path d="M12 2a4 4 0 014 4c0 1.5-.8 2.8-2 3.5V12h2a2 2 0 012 2v2a2 2 0 01-2 2h-2v2H10v-2H8a2 2 0 01-2-2v-2a2 2 0 012-2h2V9.5C8.8 8.8 8 7.5 8 6a4 4 0 014-4z" />
  </svg>,
];

function FeaturedCarousel({ lang }) {
  const { t } = useTranslation(lang);
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);

  const projects = t('home.featuredProjects') || [];
  if (projects.length === 0) return null;

  const total = projects.length;
  const current = projects[index];

  const goPrev = () => setIndex((i) => (i - 1 + total) % total);
  const goNext = () => setIndex((i) => (i + 1) % total);

  const goToContact = () => {
    markAppNav();
    navigate('/iletisim');
  };

  return (
    <section className="featured-carousel">
      <div className="wrap featured-carousel-wrap">
        <button
          className="carousel-arrow carousel-arrow-left"
          onClick={goPrev}
          aria-label="Önceki"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <div className="featured-carousel-content">
          <div className="featured-carousel-text">
            <span className="featured-carousel-badge">{current.kicker}</span>
            <h2>{current.title}</h2>
            <p>{current.desc}</p>
            <button className="btn featured-carousel-cta" onClick={goToContact}>
              {t('home.featuredCarouselCta')} <span aria-hidden="true">→</span>
            </button>
          </div>

          <div className="featured-carousel-visual">
            <div className="featured-carousel-visual-icon">
              {icons[index % icons.length]}
            </div>
          </div>
        </div>

        <button
          className="carousel-arrow carousel-arrow-right"
          onClick={goNext}
          aria-label="Sonraki"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      <div className="carousel-dots">
        {projects.map((_, i) => (
          <button
            key={i}
            className={`carousel-dot ${i === index ? 'active' : ''}`}
            onClick={() => setIndex(i)}
            aria-label={`Slayt ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default FeaturedCarousel;