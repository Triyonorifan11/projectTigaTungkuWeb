/* eslint-disable prefer-destructuring */
import { doc, setDoc } from 'firebase/firestore';
import { customAlphabet } from 'nanoid';
import CONFIG from '../global/config';
import {
  escapeHtml, uploadFile, flassMessage,
} from './functions';

const db = CONFIG.DB;
let fileName;
const formTambahProduk = {

  async init() {
    await this._getDataInputForm();
  },

  async _getDataInputForm() {
    const namaProduk = document.querySelector('#namaProduk');
    const hargaProduk = document.querySelector('#hargaProduk');
    const deskripsiProduk = document.querySelector('#deskripsiProduk');
    const linkShopee = document.querySelector('#linkShopee');
    const gambarProduk = document.querySelector('#gambarProduk');
    const formsubmitData = document.getElementById('formTambahProduk');
    const btnSubmit = document.querySelector('#btnSubmit');

    gambarProduk.addEventListener('change', (e) => {
      e.preventDefault();
      const sizeMax = 3000000;
      if (e.target.files[0].size > sizeMax) {
        flassMessage('info', 'Perhatian!', 'File terlalu besar');
        fileName = '';
        setTimeout(() => {
          location.reload();
        }, 3000);
      } else {
        fileName = e.target.files[0];
      }
    });

    formsubmitData.addEventListener('submit', async (e) => {
      e.preventDefault();
      btnSubmit.innerHTML = 'Mohon Tunggu...';
      btnSubmit.classList.add('disabled');
      const data = {
        nama_produk: escapeHtml(namaProduk.value),
        harga_produk: escapeHtml(hargaProduk.value),
        deskripsi_produk: deskripsiProduk.value,
        linkShopee_produk: escapeHtml(linkShopee.value),
        tgl_dibuat: new Date().toISOString(),
        tgl_diupdate: new Date().toISOString(),
      };
      const nanoid = customAlphabet('1234567890abcdef', 20);
      const idProduk = `product_${nanoid()}`;
      await uploadFile(fileName, `products/${idProduk}`).then((url) => {
        data.foto_produk = url;
      });
      await this._insertDataProduk(data, idProduk);
    });
  },

  async _insertDataProduk(data, idproduk) {
    try {
      const docref = doc(db, 'products', idproduk);
      await setDoc(docref, data);
      flassMessage('success', 'Berhasil!', 'Tambah data produk berhasil!');
      setTimeout(() => {
        location.reload();
      }, 2000);
    } catch (error) {
      flassMessage('error', 'Gagal Tambah', `Error= ${error}`);
    }
  },

};

export default formTambahProduk;
