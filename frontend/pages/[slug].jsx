import {
  contactsApi,
  customPagesApi,
  menuApi,
  productCategoriesApi,
  productsApi,
  servicesApi,
} from '@/api';
import { CustomPage } from '@/components/customPages';
import { deserializeBlocks } from '@/utils/blocks';

export default CustomPage;

export async function getStaticPaths() {
  const res = await customPagesApi.getCustomPages();

  // Get the paths we want to pre-render based on posts
  const paths = res.data.map(x => ({ params: { slug: x.slug } }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export async function getStaticProps({ params: { slug } }) {
  const { data: pageData } = await customPagesApi.getCustomPage({ slug });
  const serializedBlocks = await deserializeBlocks(pageData.blocks);

  const menuItems = await menuApi.getMenuItems();
  const contacts = await contactsApi.getContacts();
  const productCategories = await productCategoriesApi.getProductCategories();
  const products = await productsApi.getProducts();
  const services = await servicesApi.getServices();

  return {
    props: {
      page: {
        title: pageData.title,
        description: pageData.description,
        blocks: serializedBlocks,
        map: pageData.map,
      },
      menuItems: menuItems.data,
      contacts: contacts.data,
      productCategories: productCategories.data,
      products: products.data,
      services: services.data,
    },
    revalidate: 3600, // One hour
  };
}
