import dashboardData from '../../utils/dashboard';

const dashboard = {
  async render() {
    return `
    <div class="row g-4">
        <div class="col-sm-6 col-xl-6">
            <div class="bg-orangelight rounded d-flex align-items-center justify-content-between p-4">
                <i class="fa fa-chart-bar fa-3x text-orange"></i>
                <div class="ms-3">
                    <h4 class="mb-2 text-orange">Total Produk</h4>
                    <h5 class="mb-0 text-orange" id="countProduk">Loading...</h5>
                </div>
            </div>
        </div>
        <div class="col-sm-6 col-xl-6">
            <div class="bg-orangelight rounded d-flex align-items-center justify-content-between p-4">
                <i class="fa fa-chart-pie fa-3x text-orange"></i>
                <div class="ms-3">
                    <h4 class="mb-2 text-orange">Total Testimoni</h4>
                    <h5 class="mb-0 text-orange" id="countTesti">Loading...</h6>
                </div>
            </div>
        </div>
    </div>
        `;
  },

  async afterRender() {
    document.querySelector('#dashboard').classList.add('active');
    const countProduk = document.getElementById('countProduk');
    const countTesti = document.getElementById('countTesti');
    const data = await dashboardData.init();
    countProduk.innerHTML = `${data.countProduk} produk`;
    countTesti.innerHTML = `${data.countTesti} testi`;
  },
};

export default dashboard;
