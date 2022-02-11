import { ProductDetailPage } from '@/components/products';
import { productCategoriesApi, productsApi, servicesApi } from 'api';

export default ProductDetailPage;

export async function getStaticPaths() {
  const res = await productsApi.getProducts();

  // Get the paths we want to pre-render based on posts
  const paths = res.data.map(product => ({
    params: { slug: product.id },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export async function getStaticProps() {
  const productCategories = await productCategoriesApi.getProductCategories();
  const products = await productsApi.getProducts();
  const services = await servicesApi.getServices();

  return {
    props: {
      productCategories: productCategories.data,
      products: products.data,
      services: services.data,
    },
    revalidate: 3600, // One hour
  };
}
