import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToHash from './components/ScrollToHash';
import Home from './pages/Home';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';

function App() {
  const [lang, setLang] = useState('tr');

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <ScrollToHash />
        <Header lang={lang} setLang={setLang} />
        <Routes>
          <Route path="/" element={<Home lang={lang} />} />
          <Route path="/hizmetlerimiz" element={<Services lang={lang} />} />
          <Route path="/hizmetlerimiz/:serviceKey" element={<ServiceDetail lang={lang} />} />
        </Routes>
        <Footer lang={lang} />
      </div>
    </BrowserRouter>
  );
}

export default App;