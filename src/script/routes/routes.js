import dashboard from '../view/pages/dashboard';
import produk from '../view/pages/produk';
import addProduk from '../view/pages/addProduk';
import editProduk from '../view/pages/editProduk';

const routes = {
  '/': dashboard,
  '/produk': produk,
  '/tambah-produk': addProduk,
  '/edit-produk/:id': editProduk,
};

export default routes;
