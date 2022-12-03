/* eslint-disable no-undef */
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
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>
                  <button type="button" class="btn btn-sm rounded-circle btn-secondary" title="Edit data"><i class="bi bi-pen"></i></button>
                  <button type="button" class="btn btn-sm btn-danger rounded-circle" title="Delete data"><i class="bi bi-trash"></i></button>
                </td>
              </tr>
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
    `;
  },

  async afterRender() {
    document.querySelector('#produk').classList.add('active');

    $('#daftarproduk').DataTable({
      lengthMenu: [[5, 10, 25, 50, -1], [5, 10, 25, 50, 'All']],
      columnDefs: [{
        targets: 'no-sort',
        orderable: false,
      }],
    });
  },
};

export default produk;
