import { PromoPage } from '@/components/promo';

import {
  achievementsApi,
  newsApi,
  partnersApi,
  productCategoriesApi,
  productsApi,
  servicesApi,
} from 'api';

export default PromoPage;

export async function getStaticProps() {
  const partnersRes = await partnersApi.getPartners();
  const newsRes = await newsApi.getNews();
  const achievementsRes = await achievementsApi.getAchievements();
  const productCategories = await productCategoriesApi.getProductCategories();
  const products = await productsApi.getProducts();
  const services = await servicesApi.getServices();

  return {
    props: {
      partners: partnersRes.data,
      achievements: achievementsRes.data,
      news: newsRes.data,
      productCategories: productCategories.data,
      products: products.data,
      services: services.data,
    },
    revalidate: 3600, // One hour
  };
}
