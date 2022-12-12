/* eslint-disable no-undef */
import {
  collection, getDocs, updateDoc, doc, deleteDoc,
} from 'firebase/firestore';
import CONFIG from '../global/config';
import { flassMessage } from './functions';

const db = CONFIG.DB;
const getDatatesti = {
  async init() {
    const data = await this._getDatatesti();
    return data;
  },

  async _getDatatesti() {
    const coll = collection(db, 'testimoni');
    const snap = await getDocs(coll);
    return snap;
  },

  async updateStatus() {
    const postingTesti = document.querySelectorAll('#postingTesti');
    postingTesti.forEach((btnPosting) => {
      btnPosting.addEventListener('click', async (e) => {
        e.preventDefault();
        const dataTesti = btnPosting.getAttribute('data-testi');
        Swal.fire({
          title: 'Posting testimoni? ',
          showCancelButton: true,
          confirmButtonText: 'Confirm',
          confirmButtonColor: '#f57c1a',
        }).then((result) => {
          if (result.isConfirmed) {
            this._postingDataTesti(dataTesti);
          }
        });
      });
    });
  },

  async _postingDataTesti(id) {
    if (!id) {
      flassMessage('error', 'Error', 'Error');
    }

    try {
      const docRef = doc(db, 'testimoni', id);
      await updateDoc(docRef, { status: 'Posting' });
      flassMessage('success', 'Berhasil!', 'Testi Berhasil diposting!');
      setTimeout(() => {
        location.reload();
      }, 2000);
    } catch (error) {
      flassMessage('error', 'Error', `Error${error}`);
    }
  },

  async deleteTesti() {
    const deleteTesti = document.querySelectorAll('#deleteTesti');
    deleteTesti.forEach((btnDelete) => {
      btnDelete.addEventListener('click', async (e) => {
        e.preventDefault();
        const iDdelete = btnDelete.getAttribute('data-testi');
        Swal.fire({
          title: 'Hapus testimoni? ',
          showCancelButton: true,
          confirmButtonText: 'Confirm',
          confirmButtonColor: '#f57c1a',
        }).then((result) => {
          if (result.isConfirmed) {
            this._deleteDataTesti(iDdelete);
          }
        });
      });
    });
  },

  async _deleteDataTesti(iddelete) {
    if (!iddelete) {
      flassMessage('error', 'Error', 'Error');
    }

    try {
      const docRef = doc(db, 'testimoni', iddelete);
      await deleteDoc(docRef);
      flassMessage('success', 'Berhasil!', 'Testi Berhasil dihapus!');
      setTimeout(() => {
        location.reload();
      }, 2000);
    } catch (error) {
      flassMessage('error', 'Error', `Error${error}`);
    }
  },
};
export default getDatatesti;
