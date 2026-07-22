import React from 'react';

function Contact({ lang }) {
  return (
    <div className="contact-page">
      <section className="block contact" id="iletisim">
        <div className="wrap">
          <h2>{lang === 'tr' ? 'İletişim' : 'Contact'}</h2>
          <p className="contact-company">
            {lang === 'tr' ? 'Protek Yazılım Sistem Danışmanlık' : 'Protek Software Systems Consulting'}
          </p>

          <div className="contact-columns">
            <div className="contact-col">
              <span className="contact-label">{lang === 'tr' ? 'Adres' : 'Address'}</span>
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
              <span className="contact-label">{lang === 'tr' ? 'Telefon' : 'Phone'}</span>
              <a href="tel:+902629994323" className="contact-link">+90 262 999 4323</a>
            </div>

            <div className="contact-col">
              <span className="contact-label">{lang === 'tr' ? 'E-posta' : 'Email'}</span>
              <a href="mailto:bilgi@proteksistem.com" className="contact-link">bilgi@proteksistem.com</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;