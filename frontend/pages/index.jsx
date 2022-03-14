import { PromoPage } from '@/components/promo';

import {
  achievementsApi,
  contactsApi,
  menuApi,
  newsApi,
  partnersApi,
  productCategoriesApi,
  productsApi,
  servicesApi,
} from 'api';

export default PromoPage;

export async function getStaticProps() {
  const menuItems = await menuApi.getMenuItems();
  const partners = await partnersApi.getPartners();
  const news = await newsApi.getNews();
  const achievements = await achievementsApi.getAchievements();
  const contacts = await contactsApi.getContacts();
  const productCategories = await productCategoriesApi.getProductCategories();
  const products = await productsApi.getProducts();
  const services = await servicesApi.getServices();

  return {
    props: {
      menuItems: menuItems.data,
      partners: partners.data,
      achievements: achievements.data,
      news: news.data,
      contacts: contacts.data,
      productCategories: productCategories.data,
      products: products.data,
      services: services.data,
    },
    revalidate: 3600, // One hour
  };
}
