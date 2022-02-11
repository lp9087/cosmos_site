import api from 'api';

const productsApi = {
  getProducts() {
    return api('/api/products/');
  },
};

export default productsApi;
