import {
  contactsApi,
  productCategoriesApi,
  productsApi,
  servicesApi,
} from '@/api/index';
import { ProductsPage } from '@/components/products';

export default ProductsPage;

export async function getStaticProps() {
  const contacts = await contactsApi.getContacts();
  const productCategories = await productCategoriesApi.getProductCategories();
  const products = await productsApi.getProducts();
  const services = await servicesApi.getServices();

  return {
    props: {
      contacts: contacts.data,
      productCategories: productCategories.data,
      products: products.data,
      services: services.data,
    },
    revalidate: 3600, // One hour
  };
}
