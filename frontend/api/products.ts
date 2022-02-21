import api from 'api';

interface IDetailPayload {
  slug: string;
}

const productsApi = {
  getProducts() {
    return api('/api/products/');
  },
  getProduct({ slug }: IDetailPayload) {
    return api(`/api/products/${slug}/`);
  },
};

export default productsApi;
