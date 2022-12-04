import {
  collection, query, where, getDocs, limit,
} from 'firebase/firestore';
import { escapeHtml, flassMessage, redirect } from './functions';
import CONFIG from '../global/config';

const db = CONFIG.DB;

const loginAdmin = {
  async init() {
    await this._getInputLogin();
  },

  async _getInputLogin() {
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');
    const formLogin = document.getElementById('formLogin');
    const btnLogin = document.querySelector('#btnLogin');

    formLogin.addEventListener('submit', async (e) => {
      e.preventDefault();
      btnLogin.innerHTML = 'Mohon tunggu ...';
      btnLogin.classList.add('disabled');
      const data = {
        email: escapeHtml(email.value),
        password: escapeHtml(password.value),
      };
      await this._getDataUser(data);
    });
  },

  async _checkEmail(email) {
    const collec = collection(db, 'users');
    const q = query(collec, where('email', '==', email), limit(1));
    const querySnap = await getDocs(q);
    if (querySnap.size > 0) {
      const docindex = querySnap.docs[0];
      const user = docindex.data();
      user.id = docindex.id;
      return user;
    }
    return null;
  },

  async _getDataUser(data) {
    const btnLogin = document.querySelector('#btnLogin');
    const checkEmail = await this._checkEmail(data.email);
    if (checkEmail) {
      const passwordInput = data.password;
      if (passwordInput === checkEmail.password) {
        localStorage.setItem('TigaTungku', JSON.stringify(checkEmail.email));
        redirect('./');
      } else {
        flassMessage('error', 'Gagal login', 'Password Salah!');
        btnLogin.innerHTML = 'Login';
        btnLogin.classList.remove('disabled');
      }
    } else {
      flassMessage('error', 'Gagal login', 'Akun tidak ada');
      btnLogin.innerHTML = 'Login';
      btnLogin.classList.remove('disabled');
    }
  },
};

export default loginAdmin;
