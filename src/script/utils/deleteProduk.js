import { deleteObject, getStorage, ref } from 'firebase/storage';
import {
  getDoc, doc, deleteDoc,
} from 'firebase/firestore';
import CONFIG from '../global/config';
import { flassMessage } from './functions';

/* eslint-disable no-undef */
const db = CONFIG.DB;
const deleteProduk = {
  async init() {
    await this.__btnDeleteProduk();
  },

  async __btnDeleteProduk() {
    const btnDelete = document.querySelectorAll('#btnDelete');
    btnDelete.forEach((btndelete) => {
      btndelete.addEventListener('click', async (e) => {
        e.preventDefault();
        const idProduk = btndelete.getAttribute('data-produk');
        Swal.fire({
          title: 'Produk ini akan dihapus? ',
          showCancelButton: true,
          confirmButtonText: 'Confirm',
          confirmButtonColor: '#f57c1a',
        }).then((result) => {
          if (result.isConfirmed) {
            this._deleteDataProduk(idProduk);
          }
        });
      });
    });
  },

  async _getproduk(id) {
    const docRef = doc(db, 'products', id);
    const docSnap = await getDoc(docRef);
    return docSnap.data();
  },

  async _deleteFileproduct(url) {
    const storage = getStorage();
    const desertRef = ref(storage, url);
    try {
      await deleteObject(desertRef);
    } catch (error) {
      flassMessage('error', 'Error', `Error${error}`);
    }
  },

  async _deleteDataProduk(id) {
    const dataproduk = await this._getproduk(id);
    try {
      await this._deleteFileproduct(dataproduk.foto_produk);
      await deleteDoc(doc(db, 'products', id));
      flassMessage('success', 'Berhasil!', 'Data produk dihapus!');
      setTimeout(() => {
        location.reload();
      }, 2000);
    } catch (error) {
      flassMessage('error', 'Error', `Error${error}`);
    }
  },
};

export default deleteProduk;
