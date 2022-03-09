import { contactsApi, productCategoriesApi, productsApi, servicesApi } from '@/api';
import { ProductDetailPage } from '@/components/products';
import { deserializeBlocks } from '@/utils/blocks';

export default ProductDetailPage;

export async function getStaticPaths() {
  const res = await servicesApi.getServices();

  // Get the paths we want to pre-render based on posts
  const paths = res.data.map(x => ({ params: { slug: x.slug } }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export async function getStaticProps({ params: { slug } }) {
  const { data: serviceData } = await servicesApi.getService({ slug });
  const pageData = serviceData.service_pages[0];
  const serializedBlocks = await deserializeBlocks(pageData.blocks);

  const contacts = await contactsApi.getContacts();
  const productCategories = await productCategoriesApi.getProductCategories();
  const products = await productsApi.getProducts();
  const services = await servicesApi.getServices();

  return {
    props: {
      product: {
        title: pageData.title,
        description: pageData.description || '',
        blocks: serializedBlocks,
      },
      contacts: contacts.data,
      productCategories: productCategories.data,
      products: products.data,
      services: services.data,
    },
    revalidate: 3600, // One hour
  };
}
