import api from 'api';

interface IDetailPayload {
  slug: string;
}

const productsApi = {
  getProducts() {
    return api('/api/products');
  },
  getProductPages() {
    return api('/api/products-pages');
  },
  getProduct({ slug }: IDetailPayload) {
    return api(`/api/products-pages/${slug}/`);
  },
  getProductPageBlocks({ slug }: IDetailPayload) {
    return api(`/api/products-pages/${slug}/blocks-pages/`);
  },
};

export default productsApi;
