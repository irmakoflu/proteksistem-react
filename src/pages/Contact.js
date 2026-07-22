import React, { useState } from 'react';
import BackButton from '../components/BackButton';

function Contact({ lang }) {
  const mapQuery = encodeURIComponent(
    "TÜBİTAK Gebze Yerleşkesi Marmara Teknokent No:32/17 Gebze Kocaeli"
  );

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');
  const validationMessages = {
    tr: {
      name: 'Lütfen adınızı soyadınızı girin.',
      email: 'Lütfen geçerli bir e-posta adresi girin.',
      message: 'Lütfen bir mesaj yazın.',
    },
    en: {
      name: 'Please enter your full name.',
      email: 'Please enter a valid email address.',
      message: 'Please write a message.',
    },
  };

  const handleInvalid = (e) => {
    const field = e.target.name;
    const msg = validationMessages[lang]?.[field] || '';
    e.target.setCustomValidity(msg);
  };

  const handleChange = (e) => {
    e.target.setCustomValidity('');
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('https://formspree.io/f/mzdnvnqz', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(e.target),
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <div className="contact-page">
      <BackButton lang={lang} />
      <section className="block contact" id="iletisim">
        <div className="wrap">
          <h2>{lang === 'tr' ? 'İletişim' : 'Contact'}</h2>
          <p className="contact-company">
            {lang === 'tr' ? 'Protek Yazılım Sistem Danışmanlık' : 'Protek Software Systems Consulting'}
          </p>

          <div className="contact-columns">
            <div className="contact-col">
              <span className="contact-label">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 21s-7-6.2-7-11.5A7 7 0 0112 2a7 7 0 017 7.5C19 14.8 12 21 12 21z"/>
                  <circle cx="12" cy="9.5" r="2.3"/>
                </svg>
                {lang === 'tr' ? 'Adres' : 'Address'}
              </span>

              <a
                href="https://www.google.com/maps/search/?api=1&query=TÜBİTAK+Gebze+Yerleşkesi+Marmara+Teknokent+No:32/17+Gebze+Kocaeli"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                {lang === 'tr'
                  ? 'Barış Mah. Koşu Yolu Cad. TÜBİTAK Gebze Yerleşkesi Marmara Teknokent No: 32/17 İç Kapı No: Z01, Gebze / Kocaeli'
                  : 'Barış Mah. Koşu Yolu Cad. TÜBİTAK Gebze Campus, Marmara Technopark No: 32/17 Unit: Z01, Gebze / Kocaeli, Türkiye'}
              </a>
            </div>

            <div className="contact-col">
              <span className="contact-label">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.68 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.32 1.85.55 2.81.68A2 2 0 0122 16.92z"/>
                </svg>
                {lang === 'tr' ? 'Telefon' : 'Phone'}
              </span>
              <a href="tel:+902629994323" className="contact-link">+90 262 999 4323</a>
            </div>

            <div className="contact-col">
              <span className="contact-label">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="M2 6l10 7 10-7"/>
                </svg>
                {lang === 'tr' ? 'E-posta' : 'Email'}
              </span>
              <a href="mailto:bilgi@proteksistem.com" className="contact-link">bilgi@proteksistem.com</a>
            </div>
          </div>

          <div className="contact-map-form-row">
            <div className="contact-map-section">
              <span className="contact-label">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 21s-7-6.2-7-11.5A7 7 0 0112 2a7 7 0 017 7.5C19 14.8 12 21 12 21z"/>
                  <circle cx="12" cy="9.5" r="2.3"/>
                </svg>
                {lang === 'tr' ? 'Konum' : 'Location'}
              </span>
              <div className="contact-map-wrap">
                <iframe
                  title={lang === 'tr' ? 'Protek Yazılım Konum Haritası' : 'Protek Software Location Map'}
                  src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=TÜBİTAK+Gebze+Yerleşkesi+Marmara+Teknokent+No:32/17+Gebze+Kocaeli"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-map-link"
              >
                {lang === 'tr' ? 'Google Haritalar\'da Aç →' : 'Open in Google Maps →'}
              </a>
            </div>

            <div className="contact-form-section">
              <div className="contact-form-heading">
                <h3>{lang === 'tr' ? 'İletişim Formu' : 'Contact Form'}</h3>
                <p>{lang === 'tr' ? 'Size nasıl yardımcı olabiliriz?' : 'How can we help you?'}</p>
              </div>

              <form className="contact-form" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder={lang === 'tr' ? 'Adınız Soyadınız' : 'Full Name'}
                  value={formData.name}
                  onChange={handleChange}
                  onInvalid={handleInvalid}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder={lang === 'tr' ? 'E-posta Adresiniz' : 'Your Email'}
                  value={formData.email}
                  onChange={handleChange}
                  onInvalid={handleInvalid}
                  required
                />
                <textarea
                  name="message"
                  rows="4"
                  placeholder={lang === 'tr' ? 'Mesajınız' : 'Your Message'}
                  value={formData.message}
                  onChange={handleChange}
                  onInvalid={handleInvalid}
                  required
                ></textarea>

                <button type="submit" className="btn contact-form-btn" disabled={status === 'sending'}>
                  {status === 'sending'
                    ? (lang === 'tr' ? 'Gönderiliyor...' : 'Sending...')
                    : (lang === 'tr' ? 'Gönder' : 'Send')}
                </button>

                {status === 'success' && (
                  <p className="contact-form-status success">
                    {lang === 'tr' ? 'Mesajınız gönderildi, teşekkürler!' : 'Your message has been sent, thank you!'}
                  </p>
                )}
                {status === 'error' && (
                  <p className="contact-form-status error">
                    {lang === 'tr' ? 'Bir hata oluştu, lütfen tekrar deneyin.' : 'Something went wrong, please try again.'}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;