import React from 'react';
import { useNavigate } from 'react-router-dom';
import { markAppNav } from '../utils/navHelpers';

function BackButton({ lang }) {
  const navigate = useNavigate();

  const goBack = () => {
    markAppNav();
    navigate(-1);
  };

  return (
    <button
      className="floating-back-btn"
      onClick={goBack}
      title={lang === 'tr' ? 'Geri Dön' : 'Go Back'}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
        <path d="M15 18l-6-6 6-6" />
      </svg>
    </button>
  );
}

export default BackButton;