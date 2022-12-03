/* eslint-disable prefer-destructuring */
import { doc, setDoc } from 'firebase/firestore';
import CONFIG from '../global/config';
import {
  getUserInfo, escapeHtml, uploadFile, flassMessage
} from './functions';
import { customAlphabet } from 'nanoid';

const db = CONFIG.DB;
let fileName;
const formTambahProduk = {

  async init() {
    await this._getDataInputForm();
  },

  async _getDataInputForm() {
    const namaProduk = document.querySelector('#namaProduk').value;
    const hargaProduk = document.querySelector('#hargaProduk').value;
    const deskripsiProduk = document.querySelector('#deskripsiProduk').value;
    const gambarProduk = document.querySelector('#gambarProduk');
    const formsubmitData = document.getElementById('formTambahProduk');
    const btnSubmit = document.querySelector('#btnSubmit');

    gambarProduk.addEventListener('change', (e) => {
      fileName = e.target.files[0];
    });

    formsubmitData.addEventListener('submit', async (e) => {
      e.preventDefault();
    });
  },

};

export default formTambahProduk;
