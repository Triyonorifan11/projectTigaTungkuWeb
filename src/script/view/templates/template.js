import { formatRupiah, formatDate } from '../../utils/functions';

const tableProduk = (data, i) => `
<tr>
    <th scope="row">${i}</th>
    <td><img class="rounded" src="${data.foto_produk}" alt="" style="width: 100px"></td>
    <td>${data.nama_produk}</td>
    <td>Rp${formatRupiah(data.harga_produk.toString())}</td>
    <td>${formatDate(data.tgl_diupdate)}</td>
    <td>
        <button type="button" class="btn btn-sm rounded-circle btn-secondary" title="Edit data"><i class="bi bi-pen"></i></button>
        <button type="button" class="btn btn-sm btn-danger rounded-circle" title="Delete data"><i class="bi bi-trash"></i></button>
    </td>
</tr>
`;
const spinnerTable = () => `
<tr>
      <td>
        <div class="d-flex justify-content-center">
          <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      </td>
      <td>
        <div class="d-flex justify-content-center">
          <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      </td>
      <td>
        <div class="d-flex justify-content-center">
          <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      </td>
      <td>
        <div class="d-flex justify-content-center">
          <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      </td>
      <td>
        <div class="d-flex justify-content-center">
          <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      </td>
      <td>
        <div class="d-flex justify-content-center">
          <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      </td>
    </tr>
`;

export { tableProduk, spinnerTable };
