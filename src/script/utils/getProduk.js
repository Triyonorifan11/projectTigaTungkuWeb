import { collection, getDocs } from 'firebase/firestore';
import CONFIG from '../global/config';

const db = CONFIG.DB;

const getProduk = {
  async init() {
    const data = await this._getDataproduk();
    return data;
  },

  async _getDataproduk() {
    const coll = collection(db, 'products');
    const snap = await getDocs(coll);
    return snap;
  },
};

export default getProduk;
