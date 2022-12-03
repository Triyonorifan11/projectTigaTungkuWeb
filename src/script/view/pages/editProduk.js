/* eslint-disable no-undef */
import UrlParser from '../../routes/url-parser';
import dataEditProduk from '../../utils/formEditProduk';
import { formEditProduk, spinnerCard } from '../templates/template';

const editProduk = {
  async render() {
    return `
    <div class="col-md-12">
      <div class="bg-light rounded d-flex align-items-center p-3 mb-4">
        <h3 class="text-primary m-0">Edit Produk</h3>
      </div>
    </div>

    <div class="bg-light rounded h-100 p-4">
        <form method="post" action="#" id="formEditProduk" enctype="multipart/form-data">
            
        </form>
    </div>
    `;
  },

  async afterRender() {
    const formEdit = document.querySelector('#formEditProduk');
    document.querySelector('#produk').classList.add('active');
    formEdit.innerHTML = spinnerCard();
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const getData = await dataEditProduk.init(url.id);
    formEdit.innerHTML = formEditProduk(getData);
    dataEditProduk.getValueFormEdit(url.id);

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

export default editProduk;
