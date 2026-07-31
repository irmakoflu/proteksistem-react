import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToHash from './components/ScrollToHash';
import RequireAppNav from './components/RequireAppNav';
import FloatingContactButton from './components/FloatingContactButton';
import Home from './pages/Home';
import Services from './pages/Services';
import Marketing from './components/Marketing';
import Analytics from './components/Analytics';
import ServiceDetail from './pages/ServiceDetail';
import Contact from './pages/Contact';
import PolicyPage from './pages/PolicyPage';
import CookieConsent from './components/CookieConsent';
import NotFound from './pages/NotFound';
import { hasConsent } from './utils/cookieConsent';
import InfoSecurityPolicy from './pages/InfoSecurityPolicy';

function App() {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('lang') || sessionStorage.getItem('lang') || 'tr';
  });

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  const changeLang = (newLang) => {
    setLang(newLang);
    if (hasConsent('functional')) {
      localStorage.setItem('lang', newLang);
      sessionStorage.removeItem('lang');
    } else {
      sessionStorage.setItem('lang', newLang);
      localStorage.removeItem('lang');
    }
  };

  return (
    <HashRouter>
      <div className="App">
       <ScrollToHash />
        <Header lang={lang} setLang={changeLang} />
        <main className="page-content">
          <Routes>
            <Route path="/" element={<Home lang={lang} />} />
            <Route path="/hizmetlerimiz" element={<RequireAppNav><Services lang={lang} /></RequireAppNav>} />
            <Route path="/hizmetlerimiz/:serviceKey" element={<RequireAppNav><ServiceDetail lang={lang} /></RequireAppNav>} />
            <Route path="/iletisim" element={<RequireAppNav><Contact lang={lang} /></RequireAppNav>} />
            <Route path="/bilgi-guvenligi-politikasi" element={<RequireAppNav><InfoSecurityPolicy lang={lang} /></RequireAppNav>} />
            <Route path="*" element={<NotFound lang={lang} />} />
            <Route path="/politikalar/:policyKey" element={<RequireAppNav><PolicyPage lang={lang} /></RequireAppNav>} />
          </Routes>
        </main>
        <FloatingContactButton lang={lang} />
        <Footer lang={lang} />
        <CookieConsent lang={lang} />
        <Analytics />
        <Marketing />
      </div>
    </HashRouter>
  );
}

export default App;