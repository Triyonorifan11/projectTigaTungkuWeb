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

window.addEventListener('hashchange', () => {
  app.renderPage();
  setTimeout(() => {
    if ($('#spinner').length > 0) {
      $('#spinner').removeClass('show');
    }
  }, 500);
});

window.addEventListener('load', () => {
  app.renderPage();
  setTimeout(() => {
    if ($('#spinner').length > 0) {
      $('#spinner').removeClass('show');
    }
  }, 500);
});
