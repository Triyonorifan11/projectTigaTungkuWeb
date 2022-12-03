/* eslint-disable no-undef */
import formTambahProduk from '../../utils/formTambahProduk';

const addProduk = {
  async render() {
    return `
    <div class="row g-4">
        <div class="col-md-12">
            <div class="bg-light rounded h-100 p-4">
                <h3 class="mb-4 text-primary">Tambah Produk</h3>
                <form method="post" action="#" id="formTambahProduk" enctype="multipart/form-data">
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
                        <button class="btn btn-primary" id="btnSubmit" type="submit">Tambah Produk</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    `;
  },

  async afterRender() {
    document.querySelector('#produk').classList.add('active');
    await formTambahProduk.init();

    $('#deskripsiProduk').summernote({
      placeholder: 'Tulis Deskripsi Produk',
      tabsize: 2,
      height: 100,
      toolbar: [
        ['style', ['undo', 'redo', 'style', 'bold', 'underline', 'clear']],
        ['font', ['strikethrough', 'superscript', 'subscript']],
        ['fontsize', ['fontsize']],
        ['height', ['height']],
        ['color', ['color']],
        ['para', ['ul', 'ol', 'paragraph']],
        ['insert', ['link']],
        ['view', ['help']],
      ],
    });
  },
};

export default addProduk;
