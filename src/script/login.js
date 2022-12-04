/* eslint-disable no-undef */
import 'regenerator-runtime';
import '../style/style.css';
import loginAdmin from './utils/loginAdmin';

window.addEventListener('load', () => {
  document.getElementById('spinner').classList.add('show');
  setTimeout(() => {
    document.getElementById('spinner').classList.remove('show');
    loginAdmin.init();
  }, 2000);
});
