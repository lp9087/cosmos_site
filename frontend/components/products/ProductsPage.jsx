import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import PROMO_CONFIG from '@/constants/promo';
import { Layout, ParticlesBG } from '@/components/index';
import { BaseScreen } from '@/components/screens';

const ProductsPage = ({ contacts, products, productCategories, services }) => {
  console.log(products, productCategories);
  return (
    <Layout
      contacts={contacts}
      products={products}
      productCategories={productCategories}
      services={services}
    >
      <Head>
        <title>{`Категории и продукты | ${PROMO_CONFIG.SEO.title}`}</title>
      </Head>

      <Hero title="Категории и продукты" />
      <Categories categories={productCategories} products={products} />
    </Layout>
  );
};

export default ProductsPage;

const Hero = ({ title }) => {
  return (
    <div className="relative h-80 z-[1] text-white overflow-x-hidden">
      <ParticlesBG />
      <div className="container flex items-center mx-auto h-full pt-16 pointer-events-none">
        <div className="grid grid-cols-[70%,25%] gap-[5%] justify-center w-full pl-16">
          <div className="flex flex-col gap-8">
            <h1 className="text-6xl font-semibold">{title}</h1>
          </div>
          {/* <div className="flex flex-col justify-evenly gap-4 h-full">
            <button className="btn btn-primary pointer-events-auto" onClick={onCTAClick}>
              Заказать демонстрацию
            </button>
            <button className="btn btn-ghost pointer-events-auto">
              Скачать презентацию
            </button>
            <button className="btn btn-ghost pointer-events-auto">
              Посмотреть демо
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

const Categories = ({ categories, products }) => {
  return (
    <BaseScreen spacing="md">
      <section className="flex flex-col gap-16">
        {categories.map(({ id, ...rest }) => (
          <CategoryItem
            key={id}
            {...rest}
            products={products.filter(x => x.categories.includes(id))}
          />
        ))}
      </section>
    </BaseScreen>
  );
};

const CategoryItem = ({ title, image, products }) => {
  return (
    <div className="flex flex-col gap-8">
      <div
        className="relative flex items-center px-12 py-16 border rounded-lg overflow-hidden
      !bg-slate-900 !border-slate-600 text-white cursor-pointer"
      >
        {image && (
          <Image
            src={image}
            alt={title}
            layout="fill"
            className="object-cover opacity-50 hover:opacity-70 transition-opacity"
          />
        )}
        <div className="absolute pointer-events-none">
          <h3 className="font-bold text-4xl">{title}</h3>
        </div>
      </div>
      <div className="flex flex-wrap gap-x-8 gap-y-6 px-4">
        {products.map(({ id, ...rest }) => (
          <ProductItem key={id} {...rest} />
        ))}
      </div>
    </div>
  );
};

const ProductItem = ({ title, slug }) => {
  const containerStyles = `basis-1/4 flex-1 flex flex-col gap-4 justify-center items-center`;

  return (
    <Link href={`/products/${slug}`} passHref>
      <a
        className={`${containerStyles} transition-colors bg-slate-200/70
      hover:bg-slate-200 cursor-pointer rounded-xl px-8 py-6`}
      >
        <h3 className="font-medium text-lg">{title}</h3>
      </a>
    </Link>
  );
};
