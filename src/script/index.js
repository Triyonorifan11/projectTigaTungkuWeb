/* eslint-disable no-undef */
import 'regenerator-runtime';
import '../style/style.css';
import '../style/bootstrap.min.css';
import App from './view/app';

const app = new App({
  header: document.querySelector('#headerNav'),
  aside: document.querySelector('#asideNav'),
  maincontent: document.querySelector('#mainContent'),
});

function checkLogin() {
  const localStr = localStorage.getItem('TigaTungku');
  const dataLocal = JSON.parse(localStr);
  if (!dataLocal) {
    window.location.href = './login.html';
  }
}

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  checkLogin();
  app.renderPage();
  setTimeout(() => {
    if ($('#spinner').length > 0) {
      $('#spinner').removeClass('show');
    }
  }, 500);
});
