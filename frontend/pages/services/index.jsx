import {
  contactsApi,
  menuApi,
  productCategoriesApi,
  productsApi,
  servicesApi,
} from '@/api';
import { ServicesPage } from '@/components/services';

export default ServicesPage;

export async function getStaticProps() {
  const menuItems = await menuApi.getMenuItems();
  const contacts = await contactsApi.getContacts();
  const productCategories = await productCategoriesApi.getProductCategories();
  const products = await productsApi.getProducts();
  const services = await servicesApi.getServices();

  return {
    props: {
      menuItems: menuItems.data,
      contacts: contacts.data,
      productCategories: productCategories.data,
      products: products.data,
      services: services.data,
    },
    revalidate: 3600, // One hour
  };
}
