/* eslint-disable no-undef */
import { spinnerTableTesti, tableTesti } from '../templates/template';
import getDatatesti from '../../utils/getTestimoni';

const testimoni = {
  async render() {
    return `
    <div class="col-md-12">
    <div class="bg-orangelight rounded d-flex align-items-center p-3 mb-4">
      <h3 class="m-0 text-orange">Testimoni Pengguna</h3>
    </div>
    <div class="shadow rounded p-4">
      <div class="table-responsive p-2">
        <table class="table table-striped table-hover table-bordered" id="daftarTestimoni">
          <thead class="">
            <tr>
              <th scope="col">No</th>
              <th scope="col">Nama</th>
              <th scope="col">Email</th>
              <th scope="col">Pesan</th>
              <th scope="col">Tanggal Pesan</th>
              <th scope="col">Status</th>
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
    document.querySelector('#testimoni').classList.add('active');
    const tbody = document.querySelector('tbody');
    tbody.innerHTML = spinnerTableTesti();
    try {
      const dataTesti = await getDatatesti.init();
      let i = 0;
      tbody.innerHTML = '';
      dataTesti.forEach((doc) => {
        const data = doc.data();
        data.idTesti = doc.id;
        const status = data.status.toLowerCase();
        data.bedge = 'text-bg-warning';
        if (status !== 'pending') {
          data.bedge = 'text-bg-success';
        }
        i += 1;
        tbody.innerHTML += tableTesti(data, i);
      });

      await getDatatesti.updateStatus();
      await getDatatesti.deleteTesti();

      $('#daftarTestimoni').DataTable({
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

export default testimoni;
