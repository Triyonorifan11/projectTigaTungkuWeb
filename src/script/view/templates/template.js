import { formatRupiah, formatDate } from '../../utils/functions';

const tableProduk = (data, i) => `
<tr>
    <th scope="row">${i}</th>
    <td><img class="rounded" src="${data.foto_produk}" alt="" style="width: 100px"></td>
    <td>${data.nama_produk}</td>
    <td>Rp${formatRupiah(data.harga_produk.toString())}</td>
    <td>${formatDate(data.tgl_diupdate)}</td>
    <td>
        <a href="#/edit-produk/${data.idProduk}" class="btn btn-sm rounded-circle btn-secondary" title="Edit data"><i class="bi bi-pen"></i></a>
        <button type="button" id="btnDelete" class="btn btn-sm btn-orange rounded-circle" data-produk="${data.idProduk}" title="Delete data"><i class="bi bi-trash"></i></button>
    </td>
</tr>
`;

const tableTesti = (data, i) => `
<tr>
  <th scope="row">${i}</th>
  <td>${data.nama_lengkap}</td>
  <td>${data.email_tester}</td>
  <td>${data.pesan_tester}</td>
  <td>${formatDate(data.tgl_input)}</td>
  <td><span class="badge ${data.bedge}">${data.status}</span></td>
  <td>
      <button type="button" id="postingTesti" class="btn btn-sm btn-success rounded-circle" data-testi="${data.idTesti}" title="Posting Testi"><i class="bi bi-check-circle"></i></button>
      <button type="button" id="deleteTesti" class="btn btn-sm btn-orange rounded-circle" data-testi="${data.idTesti}" title="Delete Testi"><i class="bi bi-trash"></i></button>
  </td>
</tr>
`;

const spinnerTable = () => `
<tr>
      <td>
        <div class="d-flex justify-content-center">
          <div class="spinner-border text-orange" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      </td>
      <td>
        <div class="d-flex justify-content-center">
          <div class="spinner-border text-orange" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      </td>
      <td>
        <div class="d-flex justify-content-center">
          <div class="spinner-border text-orange" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      </td>
      <td>
        <div class="d-flex justify-content-center">
          <div class="spinner-border text-orange" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      </td>
      <td>
        <div class="d-flex justify-content-center">
          <div class="spinner-border text-orange" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      </td>
      <td>
        <div class="d-flex justify-content-center">
          <div class="spinner-border text-orange" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      </td>
    </tr>
`;

const spinnerTableTesti = () => `
<tr>
      <td>
        <div class="d-flex justify-content-center">
          <div class="spinner-border text-orange" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      </td>
      <td>
        <div class="d-flex justify-content-center">
          <div class="spinner-border text-orange" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      </td>
      <td>
        <div class="d-flex justify-content-center">
          <div class="spinner-border text-orange" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      </td>
      <td>
        <div class="d-flex justify-content-center">
          <div class="spinner-border text-orange" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      </td>
      <td>
        <div class="d-flex justify-content-center">
          <div class="spinner-border text-orange" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      </td>
      <td>
        <div class="d-flex justify-content-center">
          <div class="spinner-border text-orange" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      </td>
      <td>
        <div class="d-flex justify-content-center">
          <div class="spinner-border text-orange" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      </td>
    </tr>
`;

const formAddProduk = () => `
<div class="row">
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label for="namaProduk" class="form-label">Nama Produk</label>
                                <input type="text" class="form-control" name="namaProduk" placeholder="Cookies" id="namaProduk" required aria-describedby="emailHelp">
                            </div>
                            <label for="hargaProduk" class="form-label">Harga Produk</label>
                            <div class="input-group mb-3">
                                <span class="input-group-text">Rp</span>
                                <input type="number" class="form-control" name="hargaProduk" required aria-label="Harga Produk" id="hargaProduk" placeholder="13000">
                            </div>
                        </div>        
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label for="gambarProduk" class="form-label">Gambar Produk <small class="text-danger fst-italic">*Pastikan file tidak lebih 3mb dan format jpg/jpeg/png</small></label>
                                <input class="form-control" type="file" name="gambarProduk" id="gambarProduk" required accept=".jpg,.jpeg,.png">
                                
                            </div>
                            <div class="mb-3">
                                <label for="linkShopee" class="form-label">Tautan Shopee</label>
                                <input type="text" class="form-control" name="linkShopee" placeholder="https://shopee.co.id/product/224****" id="linkShopee" required aria-describedby="emailHelp">
                            </div>
                        </div>        
                    </div>
                    <div class="mb-3">
                        <label for="deskripsiProduk" class="form-label">Deskripsi</label>
                        <textarea class="form-control bg-white" name="deskripsiProduk" id="deskripsiProduk" required rows="3"></textarea>
                    </div>
                    <div class="d-grid gap-2">
                        <button class="btn btn-orange" id="btnSubmit" type="submit">Tambah Produk</button>
                    </div>
`;

const formEditProduk = (data) => `
<div class="row">
    <div class="col-md-6">
        <div class="mb-3">
            <label for="namaProduk" class="form-label">Nama Produk</label>
            <input type="text" class="form-control" name="namaProduk" value="${data.nama_produk}" placeholder="Cookies" id="namaProduk" required aria-describedby="emailHelp">
        </div>
        <label for="hargaProduk" class="form-label">Harga Produk</label>
        <div class="input-group mb-3">
            <span class="input-group-text">Rp</span>
            <input type="number" class="form-control" name="hargaProduk" value="${data.harga_produk}" required aria-label="Harga Produk" id="hargaProduk" placeholder="13000">
        </div>
        <div class="mb-3">
            <label for="linkShopee" class="form-label">Tautan Shopee</label>
            <input type="text" class="form-control" value="${data.linkShopee_produk}" name="linkShopee" placeholder="https://shopee.co.id/product/224****" id="linkShopee" required aria-describedby="emailHelp">
        </div>
    </div>        
    <div class="col-md-6">
        <div class="mb-3">
            <label for="gambarProduk" class="form-label">Gambar Produk <small class="text-danger fst-italic">*Pastikan file tidak lebih 3mb dan format jpg/jpeg/png</small></label>
            <input class="form-control mb-2" type="file" name="gambarProduk" id="gambarProduk" accept=".jpg,.jpeg,.png">
            <img class="rounded" src="${data.foto_produk}" alt="" style="width: 50%">
        </div>
    </div>        
</div>
<div class="mb-3">
    <label for="deskripsiProduk" class="form-label">Deskripsi</label>
    <textarea class="form-control bg-white" name="deskripsiProduk" id="deskripsiProduk" required rows="3">${data.deskripsi_produk}</textarea>
</div>
<div class="d-grid gap-2">
    <button class="btn btn-orange" id="btnSubmit" type="submit">Edit Produk</button>
</div>
`;

const spinnerCard = () => `
<div class="d-flex align-items-center">
  <strong class="text-orange">Loading...</strong>
  <div class="spinner-border ms-auto text-orange" role="status" aria-hidden="true"></div>
</div>
`;

export {
  tableProduk,
  spinnerTable, formEditProduk, spinnerCard, formAddProduk, spinnerTableTesti, tableTesti,
};
