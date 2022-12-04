const dashboard = {
  async render() {
    return `
    <div class="row g-4">
        <div class="col-sm-6 col-xl-3">
            <div class="bg-orangelight rounded d-flex align-items-center justify-content-between p-4">
                <i class="fa fa-chart-line fa-3x text-orange"></i>
                <div class="ms-3">
                    <p class="mb-2 text-orange">Today Sale</p>
                    <h6 class="mb-0 text-orange">$1234</h6>
                </div>
            </div>
        </div>
        <div class="col-sm-6 col-xl-3">
            <div class="bg-orangelight rounded d-flex align-items-center justify-content-between p-4">
                <i class="fa fa-chart-bar fa-3x text-orange"></i>
                <div class="ms-3">
                    <p class="mb-2 text-orange">Total Sale</p>
                    <h6 class="mb-0 text-orange">$1234</h6>
                </div>
            </div>
        </div>
        <div class="col-sm-6 col-xl-3">
            <div class="bg-orangelight rounded d-flex align-items-center justify-content-between p-4">
                <i class="fa fa-chart-area fa-3x text-orange"></i>
                <div class="ms-3">
                    <p class="mb-2 text-orange">Today Revenue</p>
                    <h6 class="mb-0 text-orange">$1234</h6>
                </div>
            </div>
        </div>
        <div class="col-sm-6 col-xl-3">
            <div class="bg-orangelight rounded d-flex align-items-center justify-content-between p-4">
                <i class="fa fa-chart-pie fa-3x text-orange"></i>
                <div class="ms-3">
                    <p class="mb-2 text-orange">Total Revenue</p>
                    <h6 class="mb-0 text-orange">$1234</h6>
                </div>
            </div>
        </div>
    </div>
        `;
  },

  async afterRender() {
    document.querySelector('#dashboard').classList.add('active');
  },
};

export default dashboard;
