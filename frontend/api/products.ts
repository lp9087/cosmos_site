import api from 'api';

const productsApi = {
  getProducts() {
    return api('/api/products');
  },
  getProductPages() {
    return api('/api/products_pages');
  },
};

export default productsApi;
