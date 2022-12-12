import { collection, getCountFromServer } from 'firebase/firestore';
import CONFIG from '../global/config';

const db = CONFIG.DB;
const dashboardData = {

  async init() {
    const countProduk = await this._countProduk();
    const countTesti = await this._countTesti();
    return {
      countProduk,
      countTesti,
    };
  },

  async _countProduk() {
    const coll = collection(db, 'products');
    const snapshot = await getCountFromServer(coll);
    return snapshot.data().count;
  },

  async _countTesti() {
    const coll = collection(db, 'testimoni');
    const snapshot = await getCountFromServer(coll);
    return snapshot.data().count;
  },

};

export default dashboardData;
