import React from 'react';

function Footer({ lang }) {
  return (
    <footer>
      <b>Protek {lang === 'tr' ? 'Yazılım' : 'Software'}</b> © 2026 — {lang === 'tr' ? 'Tüm hakları saklıdır.' : 'All rights reserved.'}
    </footer>
  );
}

export default Footer;