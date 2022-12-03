/* eslint-disable no-undef */
import getProduk from '../../utils/getProduk';
import deleteProduk from '../../utils/deleteProduk';
import { tableProduk, spinnerTable } from '../templates/template';
import { flassMessage } from '../../utils/functions';

const produk = {
  async render() {
    return `
    <div class="col-md-12">
      <div class="bg-light rounded d-flex align-items-center p-3 mb-4">
        <h3 class="text-primary m-0">Daftar Produk</h3>
        <a class="btn btn-primary ms-auto rounded-pill" title="Tambah Produk" href="#/tambah-produk" role="button">Tambah Produk</a>
      </div>
      <div class="shadow rounded p-4">
        <div class="table-responsive p-2">
          <table class="table table-striped table-hover table-bordered" id="daftarproduk">
            <thead class="">
              <tr>
                <th scope="col">No</th>
                <th scope="col" class="no-sort">Gambar</th>
                <th scope="col">Nama Produk</th>
                <th scope="col">Harga Produk</th>
                <th scope="col">Tanggal Update</th>
                <th scope="col" class="no-sort">Action</th>
              </tr>
            </thead>
            <tbody>           
            </tbody>
          </table>
        </div>
      </div>
    </div>
    `;
  },

  async afterRender() {
    document.querySelector('#produk').classList.add('active');
    const tbody = document.querySelector('tbody');
    tbody.innerHTML = spinnerTable();
    try {
      const dataProduk = await getProduk.init();
      let i = 0;
      tbody.innerHTML = '';
      dataProduk.forEach((doc) => {
        const docProduk = doc.data();
        docProduk.idProduk = doc.id;
        i += 1;
        tbody.innerHTML += tableProduk(docProduk, i);
      });

      await deleteProduk.init();

      $('#daftarproduk').DataTable({
        lengthMenu: [[5, 10, 25, 50, -1], [5, 10, 25, 50, 'All']],
        columnDefs: [{
          targets: 'no-sort',
          orderable: false,
        }],
      });
    } catch (error) {
      flassMessage('error', 'Error', `Error: ${error}`);
    }
  },
};

export default produk;
