/* eslint-disable no-undef */
/* eslint-disable class-methods-use-this */
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({ header, aside, maincontent }) {
    this._header = header;
    this._aside = aside;
    this._maincontent = maincontent;
  }

  _logoutSeller() {
    console.log('logout');
  }

  _loaderShow() {
    $('#spinner').addClass('show');
  }

  _loaderHide() {
    setTimeout(() => {
      if ($('#spinner').length > 0) {
        $('#spinner').removeClass('show');
      }
    }, 500);
  }

  async renderPage() {
    this._loaderShow();
    try {
      const url = UrlParser.parseActiveUrlWithCombiner();
      const page = routes[url];
      this._maincontent.innerHTML = await page.render();
      await page.afterRender();
    } catch (error) {
      this._maincontent.innerHTML = `
      <div class="container-fluid pt-4 px-4">
          <div class="row vh-100 bg-light rounded align-items-center justify-content-center mx-0">
              <div class="col-md-6 text-center p-4">
                  <i class="bi bi-exclamation-triangle display-1 text-primary"></i>
                  <span>${error}</span>
                  <h1 class="display-1 fw-bold">404</h1>
                  <h1 class="mb-4">Page Not Found</h1>
                  <p class="mb-4">We’re sorry, the page you have looked for does not exist in our website!
                      Maybe go to our home page or try to use a search?</p>
                  <a class="btn btn-primary rounded-pill py-3 px-5" href="">Go Back To Home</a>
              </div>
          </div>
      </div>
      `;
    } finally {
      this._loaderHide();
    }
  }
}

export default App;
