/* eslint-disable no-undef */
import formTambahProduk from '../../utils/formTambahProduk';
import { spinnerCard, formAddProduk } from '../templates/template';

const addProduk = {
  async render() {
    return `
    <div class="row g-4">
        <div class="col-md-12">
            <div class="bg-light rounded h-100 p-4">
                <h3 class="mb-4 text-primary">Tambah Produk</h3>
                <form method="post" action="#" id="formTambahProduk" enctype="multipart/form-data">
                    
                </form>
            </div>
        </div>
    </div>
    `;
  },

  async afterRender() {
    document.querySelector('#produk').classList.add('active');
    const thisform = document.querySelector('#formTambahProduk');
    thisform.innerHTML = spinnerCard();
    thisform.innerHTML = formAddProduk();
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
