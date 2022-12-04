/* eslint-disable no-undef */
import 'regenerator-runtime';
import '../style/style.css';
import loginAdmin from './utils/loginAdmin';

function checkLogin() {
  const localStr = localStorage.getItem('TigaTungku');
  const dataLocal = JSON.parse(localStr);
  if (dataLocal === 'tigatungku.id@gmail.com') {
    window.location.href = './';
  }
}

window.addEventListener('load', () => {
  document.getElementById('spinner').classList.add('show');
  checkLogin();
  setTimeout(() => {
    document.getElementById('spinner').classList.remove('show');
    loginAdmin.init();
  }, 2000);
});
