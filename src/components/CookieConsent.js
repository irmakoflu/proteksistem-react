import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { markAppNav } from '../utils/navHelpers';
import { useTranslation } from '../i18n';
import {
  getConsent,
  saveConsent,
  OPEN_COOKIE_SETTINGS_EVENT,
} from '../utils/cookieConsent';

function CookieConsent({ lang }) {
  const { t } = useTranslation(lang);
  const [visible, setVisible] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState(null);
  const [prefs, setPrefs] = useState({
    necessary: true,
    functional: false,
    targeting: false,
    performance: false,
  });

  useEffect(() => {
    const stored = getConsent();
    if (!stored) {
      setVisible(true);
    } else {
      setPrefs((p) => ({ ...p, ...stored }));
    }

    // Footer'dan "Çerez Ayarları" linkine tıklanınca modalı tekrar aç
    const openHandler = () => {
      setPrefs((p) => ({ ...p, ...(getConsent() || p) }));
      setSettingsOpen(true);
    };
    window.addEventListener(OPEN_COOKIE_SETTINGS_EVENT, openHandler);
    return () => window.removeEventListener(OPEN_COOKIE_SETTINGS_EVENT, openHandler);
  }, []);

  const finalizeConsent = (newPrefs) => {
    saveConsent(newPrefs);
    setPrefs((p) => ({ ...p, ...newPrefs }));
    setVisible(false);
    setSettingsOpen(false);
  };

  const handleAcceptAll = () =>
    finalizeConsent({ necessary: true, functional: true, targeting: true, performance: true });

  const handleRejectAll = () =>
    finalizeConsent({ necessary: true, functional: false, targeting: false, performance: false });

  const togglePref = (key) => setPrefs((p) => ({ ...p, [key]: !p[key] }));
  const toggleCategory = (key) => setOpenCategory((c) => (c === key ? null : key));

  if (!visible && !settingsOpen) return null;

  const categories = [
    { key: 'necessary', label: t('cookieConsent.necessary'), locked: true, desc: t('cookieConsent.necessaryDesc') },
    { key: 'functional', label: t('cookieConsent.functional'), locked: false, desc: t('cookieConsent.functionalDesc') },
    { key: 'targeting', label: t('cookieConsent.targeting'), locked: false, desc: t('cookieConsent.targetingDesc') },
    { key: 'performance', label: t('cookieConsent.performance'), locked: false, desc: t('cookieConsent.performanceDesc') },
  ];

  return (
    <>
      {visible && !settingsOpen && (
        <div className="cookie-banner">
          <div className="cookie-banner-text">
            <h4>{t('cookieConsent.title')}</h4>
            <p>
              {t('cookieConsent.text')}{' '}
              <Link to="/politikalar/cerez-politikasi" onClick={() => markAppNav()}>
                {t('cookieConsent.policyLinkLabel')}
              </Link>{' '}
              {t('cookieConsent.policyLinkSuffix')}
            </p>
          </div>
          <div className="cookie-banner-actions">
            <button className="cookie-text-btn" onClick={() => setSettingsOpen(true)}>
              {t('cookieConsent.settingsLink')}
            </button>
            <button className="cookie-text-btn" onClick={handleRejectAll}>
              {t('cookieConsent.reject')}
            </button>
            <button className="cookie-accept-btn" onClick={handleAcceptAll}>
              {t('cookieConsent.accept')}
            </button>
          </div>
        </div>
      )}

      {settingsOpen && (
        <div className="cookie-modal-overlay">
          <div className="cookie-modal-box">
            <button className="cookie-modal-close" onClick={() => setSettingsOpen(false)} aria-label="close">×</button>
            <h3>{t('cookieConsent.modalTitle')}</h3>
            <p>{t('cookieConsent.modalIntro')}</p>
            <button className="cookie-accept-all-btn" onClick={handleAcceptAll}>
              {t('cookieConsent.acceptAll')}
            </button>

            {categories.map((cat) => (
              <div className="cookie-category-accordion" key={cat.key}>
                <div
                  className="cookie-category"
                  onClick={() => toggleCategory(cat.key)}
                  style={{ cursor: 'pointer' }}
                >
                  <span>{openCategory === cat.key ? '−' : '+'} {cat.label}</span>
                  {cat.locked ? (
                    <span className="cookie-always-on">{t('cookieConsent.necessaryAlwaysOn')}</span>
                  ) : (
                    <label className="cookie-switch" onClick={(e) => e.stopPropagation()}>
                      <input
                        type="checkbox"
                        checked={prefs[cat.key]}
                        onChange={() => togglePref(cat.key)}
                      />
                      <span className="cookie-slider" />
                    </label>
                  )}
                </div>
                {openCategory === cat.key && (
                  <p className="cookie-category-desc">{cat.desc}</p>
                )}
              </div>
            ))}

            <button className="cookie-save-btn" onClick={() => finalizeConsent(prefs)}>
              {t('cookieConsent.saveSettings')}
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default CookieConsent;