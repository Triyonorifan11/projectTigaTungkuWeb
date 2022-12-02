const produk = {
  async render() {
    return `
        <h1>Produk</h1>
    `;
  },

  async afterRender() {
    document.querySelector('#produk').classList.add('active');
  },
};

export default produk;
