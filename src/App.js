import React, { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToHash from './components/ScrollToHash';
import RequireAppNav from './components/RequireAppNav';
import Home from './pages/Home';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';

function App() {
  const [lang, setLang] = useState('tr');
  return (
    <HashRouter>
      <div className="App">
        <ScrollToHash />
        <Header lang={lang} setLang={setLang} />
        <Routes>
          <Route path="/" element={<Home lang={lang} />} />
          <Route path="/hizmetlerimiz" element={<RequireAppNav><Services lang={lang} /></RequireAppNav>} />
          <Route path="/hizmetlerimiz/:serviceKey" element={<RequireAppNav><ServiceDetail lang={lang} /></RequireAppNav>} />
        </Routes>
        <Footer lang={lang} />
      </div>
    </HashRouter>
  );
}

export default App;