import api from 'api';

const productCategoriesApi = {
  getProductCategories() {
    return api('/api/product-categories');
  },
};

export default productCategoriesApi;
