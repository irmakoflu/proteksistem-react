import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BackButton from '../components/BackButton';
import { markAppNav } from '../utils/navHelpers';
import { useTranslation } from '../i18n';

function ProductDetail({ lang }) {
  const { productKey } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation(lang);

  const product = t(`products.${productKey}`);

  const goToContact = () => {
    markAppNav();
    navigate('/iletisim');
  };

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
          {/* Olası bir hatayı önlemek için '?' (optional chaining) eklendi */}
          {product.features?.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>

        <p style={{ fontSize: 13.5, color: 'var(--text-light)', marginBottom: 24 }}>
          {product.partnerNote}
        </p>

        <div className="service-detail-actions">
          <button className="btn" onClick={goToContact}>
            {t('serviceDetail.requestInfo')}
          </button>
          
          {/* Buradaki eksik '<a' etiketi düzeltildi */}
          {product.partnerLinkUrl && (
            <a
              href={product.partnerLinkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="service-detail-back"
            >
              {product.partnerLinkLabel}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;