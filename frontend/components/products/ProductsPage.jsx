import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import PROMO_CONFIG from '@/constants/promo';
import { Layout, ParticlesBG } from '@/components';
import { BaseScreen } from '@/components/screens';

const ProductsPage = ({ contacts, products, productCategories, services }) => {
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
      <div className="container flex items-center h-full pt-16 mx-auto pointer-events-none">
        <div className="grid grid-cols-[70%,25%] gap-[5%] justify-center w-full pl-16">
          <div className="flex flex-col gap-8">
            <h1 className="text-6xl font-semibold">{title}</h1>
          </div>
          {/* <div className="flex flex-col h-full gap-4 justify-evenly">
            <button className="pointer-events-auto btn btn-primary" onClick={onCTAClick}>
              Заказать демонстрацию
            </button>
            <button className="pointer-events-auto btn btn-ghost">
              Скачать презентацию
            </button>
            <button className="pointer-events-auto btn btn-ghost">
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
      <section className="grid grid-cols-2 gap-24">
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
      <div className="relative flex items-center justify-center h-full min-h-[160px] px-6 py-4 overflow-hidden text-white border rounded-lg bg-slate-900 border-slate-400/50">
        {image && (
          <Image
            src={image}
            alt={title}
            layout="fill"
            className="object-cover opacity-70"
          />
        )}
        <div className="relative pointer-events-none">
          <h3 className="text-4xl font-bold text-center">{title}</h3>
        </div>
      </div>
      <div className="flex flex-wrap px-4 gap-x-8 gap-y-6">
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
        <h3 className="text-lg font-medium">{title}</h3>
      </a>
    </Link>
  );
};
