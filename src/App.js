import React, { useState } from 'react';
import './App.css';
const servicesData = {
  erp: { 
    color: "#1C3450", 
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>', 
    title: "ERP Danışmanlığı", 
    body: "SAP ERP, şirketiniz için hayati önemde olan süreç ve operasyonları yönetmenizi kolaylaştırır ve bulunduğunuz sektörün ihtiyaçlarına uygun çözümler sunar.",
    features: [
      "SAP Finans Çözümleri, bütünleşik bir mali işlemler yönetim sistemi sunarak farklı hesaplama gereksinimlerini karşılar; iç ve dış fonksiyonlarla entegre çalışarak çok boyutlu analizlere olanak tanır.",
      "Esnek mimarisi ve grafiksel raporlama uygulamaları sayesinde, işletmenizin özel gereksinimlerine hızlıca uyarlanabilir."
    ]
    
  },
  crm: { 
    color: "#146357", 
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>', 
    title: "CRM Danışmanlığı", 
    body: "SAP CRM; Pazarlama, Satış ve Servis olarak üç bölümden oluşur ve temel ERP modülleriyle çift yönlü etkileşim içinde çalışır.",
    features: [
      "Pazarlama: Marka Yönetimi, Segmentasyon, Kampanya ve Aday Müşteri Yönetimi",
      "Satış: Aktivite, Fırsat, Teklif, Sipariş, Sözleşme ve E-Ticaret",
      "Servis: Kurulum, Garanti, Servis Sözleşmeleri, Şikayet/İade Yönetimi"
    ]
  },

  
  
  edefter: { 
    color: "#A9762E", 
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12" y2="18"></line></svg>', 
    title: "e-Defter", 
    body: "Protek e-Defter yazılımı ile SAP kullanan firmaların e-defter gereksinimlerini hızlı ve kaliteli şekilde karşılıyoruz.",
    features: [
      "SAP sistemi üzerinde XBRL raporlama altyapısı",
      "Tanıdık SAP ekranları üzerinden kullanım kolaylığı",
      "Mevcut Yevmiye Defteri programınıza kolay adaptasyon",
      "Performans kaybı yaşamadan hızlı sonuç"
    ]
  },
  ui5: { 
    color: "#4A3E86", 
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12" y2="18"></line></svg>', 
    title: "Fiori / UI5 Uygulamaları", 
    body: "SAPUI5 teknolojisi ile tarayıcı üzerinden mobil, PC ve tablet gibi cihazlarda kurulum gerekmeden veri girişi, onay işlemleri ve raporlamalar yapılabilir.",
    features: [
      "Tedarikçi ana veri yönetim uygulaması",
      "İş akışı ve onay ekranları",
      "Servis / saha uygulamaları",
      "Kaynak planlama çizelgesi"
    ]
  },
  ik: { 
    color: "#8B4513", // İK'ya özel toprak tonu
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="4"/><path d="M4 21v-1a8 8 0 0116 0v1"/></svg>', 
    title: "Protek'te Kariyer", 
    body: "Ekibimize katılın! Sürekli eğitim, şeffaf yönetim ve çalışan haklarının ön planda olduğu bir çalışma kültürü sunuyoruz.",
    features: [
      "Sürekli Öğrenme ve Gelişim Programları",
      "Esnek ve Şeffaf Yönetim Yaklaşımı",
      "Modern Ofis Ortamı ve Teknolojik Altyapı",
      "Yetenek Gelişimini Destekleyen Mentörlük"
    ],
    
   
  }
};

function App() {
  // 2. Fonksiyonu buraya ekle:
const openService = (key) => {
  const s = servicesData[key];
  const modalBox = document.getElementById('modalBox');
  if (!s || !modalBox) return;
  
  // Arkaplan rengini ve temel bilgileri ata
  modalBox.style.background = s.color;
  document.getElementById('modalIcon').innerHTML = s.icon;
  document.getElementById('modalTitle').textContent = s.title;
  
  // İçeriği oluştur (İK kontrolü dahil)
  let htmlContent = `<p style="font-size: 1.1em; margin-bottom: 20px;">${s.body}</p>`;
  htmlContent += `<h4 style="margin-bottom:10px;">${key === 'ik' ? 'Neden Protek?' : 'Sunduğumuz Çözümler:'}</h4>`;
  htmlContent += `<ul>${s.features.map(f => `<li>→ ${f}</li>`).join('')}</ul>`;
  
  document.getElementById('modalBody').innerHTML = htmlContent;
  
  // MAİL GÜVENLİK KONTROLÜ: Eğer s.email yoksa 'bilgi@proteksistem.com' kullanır
  const targetEmail = s.email || 'bilgi@proteksistem.com';
  document.getElementById('modalMail').href = `mailto:${targetEmail}?subject=Bilgi Talebi: ${s.title}`;
  
  document.getElementById('modalOverlay').classList.add('active');
  document.body.classList.add('modal-open');
};
  const closeService = () => {
    document.getElementById('modalOverlay').classList.remove('active');
    document.body.classList.remove('modal-open');
  };
  
  const [lang, setLang] = useState('tr');
  return (
    <div className="App">
      {/* 1. TOPBAR */}
      <div className="topbar">
        <div className="wrap">
          <a href="tel:+902629994323">
            <span>{lang === 'tr' ? 'Tel' : 'Phone'}</span>+90 262 999 4323
          </a>
          <a href="mailto:bilgi@proteksistem.com">
            <span>{lang === 'tr' ? 'E-posta' : 'Email'}</span>bilgi@proteksistem.com
          </a>
        </div>
      </div>

      {/* 2. HEADER */}
      <header>
        <div className="navrow wrap">
          <a href="#home" className="logo">PROTEK <span>YAZILIM</span>
            <small>{lang === 'tr' ? 'Sistem Danışmanlık' : 'Systems Consulting'}</small>
          </a>
          <nav>
            <ul>
              <li><a href="#home">{lang === 'tr' ? 'Ana Sayfa' : 'Home'}</a></li>
              <li><a href="#hakkimizda">{lang === 'tr' ? 'Hakkımızda' : 'About Us'}</a></li>
              <li className="dropdown">
                <a href="#hizmetler">{lang === 'tr' ? 'Hizmetlerimiz' : 'Services'}</a>
                <div className="menu">
  <button className="menu-item-button" onClick={() => openService('erp')}>ERP</button>
  <button className="menu-item-button" onClick={() => openService('crm')}>CRM</button>
  <button className="menu-item-button" onClick={() => openService('edefter')}>e-Defter</button>
  <button className="menu-item-button" onClick={() => openService('ui5')}>UI5</button>
</div>
              </li>
              <li className="lang">
                <button onClick={() => setLang('en')} className={lang === 'en' ? 'active' : ''}>EN</button> / 
                <button onClick={() => setLang('tr')} className={lang === 'tr' ? 'active' : ''}>TR</button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      
      <section className="hero" id="home">
        <div className="eyebrow">
          {lang === 'tr' 
            ? 'SAP ERP · CRM · E-DÖNÜŞÜM DANIŞMANLIĞI' 
            : 'SAP ERP · CRM · E-TRANSFORMATION CONSULTING'}
        </div>
        <h1>
          {lang === 'tr' 
            ? 'Kurumsal Süreçlerinizi Sağlam Zemine Oturtan Danışmanlık Ortağınız' 
            : 'Your Trusted Partner for Solid Enterprise Processes'}
        </h1>
        <p>
          {lang === 'tr' 
            ? 'SAP ERP ile başlayan yolculuğumuz; iş zekâsı, tedarik zinciri, müşteri ilişkileri ve e-dönüşüm alanlarında güçlenerek sürüyor.' 
            : 'Our journey, which began with SAP ERP, continues to grow stronger in business intelligence, supply chain, customer relations and e-transformation.'}
        </p>
        <a href="#iletisim" className="btn">
          {lang === 'tr' ? 'Bize Ulaşın' : 'Get in Touch'}
        </a>
      </section>
     {/* 4. SERVICES */}
      <div className="services" id="services">
        <div className="grid">
          
          {/* ERP Kartı */}
          <div className="card c-erp" onClick={() => openService('erp')}>
            <div className="icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7"><path d="M4 21V7l8-4 8 4v14M9 21v-6h6v6M4 11h16"/></svg></div>
            <h3>{lang === 'tr' ? 'ERP Danışmanlığı' : 'ERP Consulting'}</h3>
            <p>{lang === 'tr' ? 'SAP ERP ile finans, tedarik zinciri ve operasyon süreçlerinizi tek bir platformda yönetin.' : 'Manage your finance, supply chain and operations processes on a single platform with SAP ERP.'}</p>
            <span className="more">{lang === 'tr' ? 'Detaylı bilgi →' : 'Learn more →'}</span>
          </div>

          {/* CRM Kartı */}
          <div className="card c-crm" onClick={() => openService('crm')}>
            <div className="icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7"><path d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m5-2.63a4 4 0 100-8 4 4 0 000 8zm7-2a4 4 0 10-2-7.47"/></svg></div>
            <h3>{lang === 'tr' ? 'CRM Danışmanlığı' : 'CRM Consulting'}</h3>
            <p>{lang === 'tr' ? 'Pazarlama, satış ve servis modülleriyle bütünleşik SAP CRM çözümleri.' : 'SAP CRM solutions integrated with marketing, sales and service modules.'}</p>
            <span className="more">{lang === 'tr' ? 'Detaylı bilgi →' : 'Learn more →'}</span>
          </div>

          {/* e-Defter Kartı */}
          <div className="card c-edefter" onClick={() => openService('edefter')}>
            <div className="icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7"><path d="M4 19.5A2.5 2.5 0 016.5 17H20M4 4.5A2.5 2.5 0 016.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15z"/></svg></div>
            <h3>{lang === 'tr' ? 'e-Defter' : 'e-Ledger'}</h3>
            <p>{lang === 'tr' ? 'SAP sistemleri için XBRL raporlama altyapısı ile hızlı e-defter üretimi.' : 'e-Ledger generation for SAP systems via familiar screens, powered by XBRL.'}</p>
            <span className="more">{lang === 'tr' ? 'Detaylı bilgi →' : 'Learn more →'}</span>
          </div>

          {/* UI5 Kartı */}
          <div className="card c-ui5" onClick={() => openService('ui5')}>
            <div className="icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7"><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/></svg></div>
            <h3>{lang === 'tr' ? 'Fiori / UI5 Uygulamaları' : 'Fiori / UI5 Applications'}</h3>
            <p>{lang === 'tr' ? 'Kurulum gerektirmeden tarayıcı üzerinden çalışan mobil, tablet ve masaüstü uygulamaları.' : 'Approval, data entry and reporting apps that run through the browser — no installation required.'}</p>
            <span className="more">{lang === 'tr' ? 'Detaylı bilgi →' : 'Learn more →'}</span>
          </div>

          {/* İK Kartı */}
          <div className="card c-ik" onClick={() => openService('ik')}>
            <div className="icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7"><circle cx="12" cy="8" r="4"/><path d="M4 21v-1a8 8 0 0116 0v1"/></svg></div>
            <h3>{lang === 'tr' ? 'İnsan Kaynakları' : 'Human Resources'}</h3>
            <p>{lang === 'tr' ? 'Sürekli eğitim, şeffaf yönetim ve çalışan haklarının korunması prensipleri.' : 'A corporate culture shaped by continuous training, transparent management and rights protection.'}</p>
            <span className="more">{lang === 'tr' ? 'Detaylı bilgi →' : 'Learn more →'}</span>
          </div>

          {/* İletişim Kartı */}
          <div className="card c-contact" onClick={() => window.location.href='#iletisim'}>
            <div className="icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7"><path d="M4 4h16v16H4V4z"/><path d="M4 6l8 7 8-7"/></svg></div>
            <h3>{lang === 'tr' ? 'Bize Ulaşın' : 'Get in Touch'}</h3>
            <p>{lang === 'tr' ? 'Projeleriniz veya demo talepleriniz için ekibimizle iletişime geçin.' : 'Reach out to our team directly for your projects or a demo of our applications.'}</p>
            <span className="more">{lang === 'tr' ? 'İletişim →' : 'Contact →'}</span>
          </div>

        </div>
      </div>
      
      {/* 5. ABOUT US */}
      <section className="block about" id="hakkimizda">
        <div className="wrap about-grid">
          <div>
            <div className="kicker">{lang === 'tr' ? 'Hakkımızda' : 'About Us'}</div>
            <h2>
              {lang === 'tr' 
                ? 'Kurulduğumuz günden bu yana doğru ve hızlı çözümler üretiyoruz' 
                : 'Delivering fast, accurate solutions since day one'}
            </h2>
            <p>
              {lang === 'tr' 
                ? 'Protek, kurumsal uygulamalar alanında hizmet verdiği müşterilerinin süreçlerini kolaylaştıran, hızlı ve doğru çözümler ortaya koyar.' 
                : 'Protek delivers fast, accurate solutions that simplify the processes of the clients it serves in the field of enterprise applications.'}
            </p>
            <p>
              {lang === 'tr' 
                ? 'SAP ERP ile başlayan çözüm serüvenimiz; iş zekâsı, tedarik zinciri yönetimi, müşteri ilişkileri ve e-dönüşüm gibi alanlarda güçlenerek devam ediyor.' 
                : 'Our solutions journey, which began with SAP ERP, continues to grow stronger in areas such as business intelligence, supply chain management, customer relations and e-transformation.'}
            </p>
          </div>
          
          {/* Bilgi Paneli */}
          <div className="ledger-panel">
            <div className="row"><span>{lang === 'tr' ? 'Odak Alanı' : 'Focus Area'}</span><b>SAP ERP</b></div>
            <div className="row"><span>{lang === 'tr' ? 'Uzmanlık' : 'Expertise'}</span><b>CRM · e-Dönüşüm</b></div>
            <div className="row"><span>{lang === 'tr' ? 'Platform' : 'Platform'}</span><b>UI5 / Fiori</b></div>
            <div className="row"><span>{lang === 'tr' ? 'Konum' : 'Location'}</span><b>{lang === 'tr' ? 'Gebze, Kocaeli' : 'Gebze, Kocaeli'}</b></div>
          </div>
        </div>
      </section>
      {/* 6. CONTACT */}
      <section className="block contact" id="iletisim">
        <div className="wrap contact-grid">
          <div>
            <h2>{lang === 'tr' ? 'İletişim' : 'Contact'}</h2>
            <div className="contact-info">
              <p><b>{lang === 'tr' ? 'Protek Yazılım Sistem Danışmanlık' : 'Protek Software Systems Consulting'}</b></p>
              <p>{lang === 'tr' ? 'Barış Mah. Koşu Yolu Cad. TÜBİTAK Gebze Yerleşkesi Marmara Teknokent No: 32/17 İç Kapı No: Z01, Gebze / Kocaeli' : 'Barış Mah. Koşu Yolu Cad. TÜBİTAK Gebze Campus, Marmara Technopark No: 32/17 Unit: Z01, Gebze / Kocaeli, Türkiye'}</p>
              <p><b>{lang === 'tr' ? 'Tel/Faks:' : 'Phone/Fax:'}</b> +90 262 999 4323</p>
              <p><b>{lang === 'tr' ? 'E-posta:' : 'Email:'}</b> bilgi@proteksistem.com</p>
            </div>
          </div>
          <div className="map-box">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d235.4149398459281!2d29.462633781081!3d40.78909292132639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1str!2str!4v1763541911264!5m2!1str!2str" 
              loading="lazy"
              title="Protek Map">
            </iframe>
          </div>
        </div>
      </section>
      <footer>
        <b>Protek {lang === 'tr' ? 'Yazılım' : 'Software'}</b> © 2026 — {lang === 'tr' ? 'Tüm hakları saklıdır.' : 'All rights reserved.'}
      </footer>
      {/* 8. MODAL */}
      <div className="modal-overlay" id="modalOverlay" onClick={(e) => { if(e.target.id === 'modalOverlay') closeService(); }}>
        <div className="modal-box" id="modalBox">
          <button className="modal-close" onClick={closeService}>✕</button>
          <div className="modal-icon" id="modalIcon"></div>
          <div className="modal-eyebrow">{lang === 'tr' ? 'HİZMETLERİMİZ' : 'SERVICES'}</div>
          <h2 id="modalTitle"></h2>
          <div id="modalBody"></div>
          <a href="#" id="modalMail" className="modal-btn">{lang === 'tr' ? 'Bilgi Talep Et' : 'Request Information'}</a>
        </div>
      </div>
    </div>
  );
}

export default App;