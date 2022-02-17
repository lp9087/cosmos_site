import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

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
    params: { slug: page.id },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

const deserializeBlocks = async blocks => {
  const promises = blocks.map(async x => {
    if (x.resourcetype === 'BlockText') {
      const { text, ...rest } = x;
      const { content, data } = matter(text);
      const source = await serialize(content, { scope: data });

      return { ...rest, source };
    }

    return x;
  });

  return Promise.all(promises);
};

export async function getStaticProps({ params: { slug } }) {
  // const { title, description, blocks } = PRODUCT_DETAIL_MOCK;
  const { data: productData } = await productsApi.getProduct({ slug });
  const { data: blocks } = await productsApi.getProductPageBlocks({ slug });
  const serializedBlocks = await deserializeBlocks(blocks);

  const contacts = await contactsApi.getContacts();
  const productCategories = await productCategoriesApi.getProductCategories();
  const products = await productsApi.getProducts();
  const services = await servicesApi.getServices();

  return {
    props: {
      product: {
        title: productData.title,
        description: productData.description,
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
