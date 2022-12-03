/* eslint-disable prefer-destructuring */
import { doc, updateDoc, getDoc } from 'firebase/firestore';
import CONFIG from '../global/config';
import {
  escapeHtml, uploadFile, flassMessage,
} from './functions';

const db = CONFIG.DB;

const dataEditProduk = {
  async init(id) {
    const data = await this._fetchDataProduk(id);
    return data;
  },

  async getValueFormEdit(id) {
    const namaProduk = document.querySelector('#namaProduk');
    const hargaProduk = document.querySelector('#hargaProduk');
    const deskripsiProduk = document.querySelector('#deskripsiProduk');
    const linkShopee = document.querySelector('#linkShopee');
    const gambarProduk = document.getElementById('gambarProduk');
    const formsubmitData = document.getElementById('formEditProduk');
    const btnSubmit = document.querySelector('#btnSubmit');

    gambarProduk.addEventListener('change', async (e) => {
      e.preventDefault();
      const fileImg = e.target.files[0];
      await uploadFile(fileImg, `products/${id}`).then((url) => {
        const data = {};
        data.foto_produk = url;
        data.tgl_diupdate = new Date().toISOString();
        this._insertEditdata(data, id);
      });
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
        tgl_diupdate: new Date().toISOString(),
      };
      await this._insertEditdata(data, id);
    });
  },

  async _insertEditdata(data, idProduk) {
    try {
      const docRef = doc(db, 'products', idProduk);
      await updateDoc(docRef, data);
      flassMessage('success', 'Berhasil!', 'Produk berhasil di edit');
      setTimeout(() => {
        location.reload();
      }, 2000);
    } catch (error) {
      flassMessage('error', 'Error!', `error:${error}`);
    }
  },

  async _fetchDataProduk(idProduk) {
    const getId = idProduk;

    const docRef = doc(db, 'products', `${getId}`);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    }
    return null;
  },
};

export default dataEditProduk;
