import dynamic from 'next/dynamic';

import {
  contactsApi,
  productCategoriesApi,
  productsApi,
  servicesApi,
} from 'api';

const DynamicComponentWithNoSSR = dynamic(
  () => import('../../components/about/AboutPage'),
  {
    ssr: false,
  }
);

const AboutPage = ({ ...props }) => <DynamicComponentWithNoSSR {...props} />;

export default AboutPage;

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
