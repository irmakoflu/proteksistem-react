import React, { useRef, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BackButton from '../components/BackButton';
import { markAppNav } from '../utils/navHelpers';
import { useTranslation } from '../i18n';
import atsLogin from '../assets/products/ats-login.png';
import atsCalendar from '../assets/products/ats-calendar.png';
import atsEfforts from '../assets/products/ats-efforts.png';
import atsTasks from '../assets/products/ats-tasks.png';
import atsProjects from '../assets/products/ats-projects.png';

// productKey -> galeri görselleri eşlemesi. Yeni bir ürünün galerisi olacaksa buraya eklenir.
const productGalleries = {
  yapayzeka: [atsLogin, atsCalendar, atsEfforts, atsTasks, atsProjects],
};

function ProductDetail({ lang }) {
  const { productKey } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation(lang);
  const scrollerRef = useRef(null);

  // Lightbox: null iken kapalı, bir sayı (index) iken o resim büyütülmüş olarak açık
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const product = t(`products.${productKey}`);
  const gallery = productGalleries[productKey] || [];

  const goToContact = () => {
    markAppNav();
    navigate('/iletisim');
  };

  const scrollGallery = (direction) => {
    const el = scrollerRef.current;
    if (!el) return;
    const cardWidth = el.querySelector('.service-detail-gallery-img')?.offsetWidth || 260;
    el.scrollBy({ left: direction * (cardWidth + 16), behavior: 'smooth' });
  };

  const openLightbox = (i) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const showPrevLightbox = () =>
    setLightboxIndex((prev) => (prev === null ? prev : (prev - 1 + gallery.length) % gallery.length));
  const showNextLightbox = () =>
    setLightboxIndex((prev) => (prev === null ? prev : (prev + 1) % gallery.length));

  // Lightbox açıkken arka planın kaymasını engelle + klavye ile gezinme
  useEffect(() => {
    if (lightboxIndex === null) return;

    document.body.classList.add('modal-open');

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showPrevLightbox();
      if (e.key === 'ArrowRight') showNextLightbox();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.classList.remove('modal-open');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxIndex]);

  if (!product || !product.title) {
    return (
      <div className="service-detail-body wrap">
        <BackButton lang={lang} />
        <p>{t('serviceDetail.notFound')}</p>
      </div>
    );
  }

  return (
    <div>
      <BackButton lang={lang} />
      <section className="service-detail-hero" style={{ background: 'var(--ink)' }}>
        <div className="service-detail-hero-overlay" />
        <div className="service-detail-hero-content">
          <span
            style={{
              display: 'block',
              fontSize: 12.5,
              letterSpacing: 2,
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,.65)',
              fontWeight: 600,
              marginBottom: 12,
            }}
          >
            {product.eyebrow}
          </span>
          <h1>{product.title}</h1>
        </div>
      </section>

      <div className="service-detail-body wrap">
        <p className="service-detail-lead">{product.lead}</p>

        <h4>{t('serviceDetail.ourSolutions')}</h4>
        <ul className="service-detail-list">
          {product.features?.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>

        {product.subProduct && (
          <div className="service-detail-subproduct" style={{ marginTop: 44 }}>
            <span
              style={{
                display: 'block',
                fontSize: 12,
                letterSpacing: 1.5,
                textTransform: 'uppercase',
                color: 'var(--brass)',
                fontWeight: 700,
                marginBottom: 10,
              }}
            >
              {product.subProduct.kicker}
            </span>
            <h3 style={{ fontSize: 22, fontWeight: 600, color: 'var(--ink)', marginBottom: 14 }}>
              {product.subProduct.title}
            </h3>
            <p className="service-detail-lead">{product.subProduct.lead}</p>

            <h4>{product.subProduct.featuresHeading}</h4>
            <ul className="service-detail-list">
              {product.subProduct.features?.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </div>
        )}

        {gallery.length > 0 && (
          <div className="service-detail-gallery-wrap">
            <button
              type="button"
              className="carousel-arrow gallery-arrow gallery-arrow-left"
              onClick={() => scrollGallery(-1)}
              aria-label="previous"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                <path d="M15 6l-6 6 6 6" />
              </svg>
            </button>

            <div className="service-detail-gallery" ref={scrollerRef}>
              {gallery.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${product.title} ${i + 1}`}
                  className="service-detail-gallery-img"
                  onClick={() => openLightbox(i)}
                  style={{ cursor: 'zoom-in' }}
                />
              ))}
            </div>

            <button
              type="button"
              className="carousel-arrow gallery-arrow gallery-arrow-right"
              onClick={() => scrollGallery(1)}
              aria-label="next"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>
          </div>
        )}

        <p style={{ fontSize: 13.5, color: 'var(--text-light)', marginBottom: 24 }}>
          {product.partnerNote}
        </p>

        <div className="service-detail-actions">
          <button className="btn" onClick={goToContact}>
            {t('serviceDetail.requestInfo')}
          </button>

          {product.partnerLinkUrl && (
            <a
              href={product.partnerLinkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="service-detail-back external-link-btn"
            >
              {product.partnerLinkLabel}
            </a>
          )}

          {product.appStoreLinkUrl && (
            <a
              href={product.appStoreLinkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="service-detail-back external-link-btn"
            >
              {product.appStoreLinkLabel}
            </a>
          )}
        </div>
      </div>

      {lightboxIndex !== null && gallery.length > 0 && (
        <div
          className="gallery-lightbox-overlay"
          onClick={(e) => {
            if (e.target.classList.contains('gallery-lightbox-overlay')) closeLightbox();
          }}
        >
          <button
            type="button"
            className="gallery-lightbox-close"
            onClick={closeLightbox}
            aria-label="close"
          >
            ✕
          </button>

          {gallery.length > 1 && (
            <button
              type="button"
              className="gallery-lightbox-nav gallery-lightbox-prev"
              onClick={showPrevLightbox}
              aria-label="previous"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                <path d="M15 6l-6 6 6 6" />
              </svg>
            </button>
          )}

          <img
            src={gallery[lightboxIndex]}
            alt={`${product.title} ${lightboxIndex + 1}`}
            className="gallery-lightbox-img"
          />

          {gallery.length > 1 && (
            <button
              type="button"
              className="gallery-lightbox-nav gallery-lightbox-next"
              onClick={showNextLightbox}
              aria-label="next"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default ProductDetail;