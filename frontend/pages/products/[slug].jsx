import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

import PRODUCT_DETAIL_MOCK from '@/constants/mocks/productDetail';
import {
  contactsApi,
  productCategoriesApi,
  productsApi,
  servicesApi,
} from '@/api/index';
import { ProductDetailPage } from '@/components/products';

export default ProductDetailPage;

export async function getStaticPaths() {
  const res = await productsApi.getProductPages();

  // Get the paths we want to pre-render based on posts
  const paths = res.data.map(page => ({
    params: { slug: page.slug },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

const serializeBlocks = async blocks => {
  const promises = blocks.map(async x => {
    if (x.type === 'text') {
      const { content, ...rest } = x;
      const { content: matterContent, data } = matter(content);
      const source = await serialize(matterContent, { scope: data });

      return { ...rest, source };
    }

    return x;
  });

  return Promise.all(promises);
};

export async function getStaticProps() {
  const { title, description, blocks } = PRODUCT_DETAIL_MOCK;
  const serializedBlocks = await serializeBlocks(blocks);

  const contacts = await contactsApi.getContacts();
  const productCategories = await productCategoriesApi.getProductCategories();
  const products = await productsApi.getProducts();
  const services = await servicesApi.getServices();

  return {
    props: {
      product: {
        title,
        description,
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
