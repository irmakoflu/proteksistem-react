import ikBg from '../assets/services/ik-bg.jpg';
import erpBg from '../assets/services/erp.jpg';
import crmBg from '../assets/services/crm.jpg';
import edefterBg from '../assets/services/e-defter.jpg';
import sapBg from '../assets/services/sap.jpg';

const servicesData = {
  erp:     { color: '#1C3450', image: erpBg,     icon: '<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7"><path d="M4 21V7l8-4 8 4v14M9 21v-6h6v6M4 11h16"/></svg>', email: 'bilgi@proteksistem.com' },
  crm:     { color: '#146357', image: crmBg,     icon: '<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7"><path d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m5-2.63a4 4 0 100-8 4 4 0 000 8zm7-2a4 4 0 10-2-7.47"/></svg>', email: 'bilgi@proteksistem.com' },
  edefter: { color: '#A9762E', image: edefterBg, icon: '<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7"><path d="M4 19.5A2.5 2.5 0 016.5 17H20M4 4.5A2.5 2.5 0 016.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15z"/></svg>', email: 'edefter@proteksistem.com' },
  ui5:     { color: '#4A3E86', image: sapBg,     icon: '<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7"><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/></svg>', email: 'bilgi@proteksistem.com' },
  ik:      { color: '#96472F', image: ikBg,      icon: '<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7"><circle cx="12" cy="8" r="4"/><path d="M4 21v-1a8 8 0 0116 0v1"/></svg>', email: 'bilgi@proteksistem.com' },
};

export default servicesData;