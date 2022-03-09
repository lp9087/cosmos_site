import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import PROMO_CONFIG from '@/constants/promo';
import Layout from '@/components/Layout';
import ParticlesBG from '@/components/ParticlesBG';
import { BaseScreen } from '@/components/screens';

const ServicesPage = ({ contacts, products, productCategories, services }) => {
  return (
    <Layout
      contacts={contacts}
      products={products}
      productCategories={productCategories}
      services={services}
    >
      <Head>
        <title>{`Услуги | ${PROMO_CONFIG.SEO.title}`}</title>
      </Head>

      <Hero title="Услуги" />
      <List services={services} />
    </Layout>
  );
};

export default ServicesPage;

const Hero = ({ title }) => {
  return (
    <div className="relative h-80 z-[1] text-white overflow-x-hidden">
      <ParticlesBG />
      <div className="container flex items-center h-full pt-16 mx-auto pointer-events-none">
        <div className="grid grid-cols-[70%,25%] gap-[5%] justify-center w-full pl-16">
          <div className="flex flex-col gap-8">
            <h1 className="text-6xl font-semibold">{title}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

const List = ({ services }) => {
  return (
    <BaseScreen spacing="md">
      <section className="grid grid-cols-2 gap-24">
        {services.map(({ id, ...rest }) => (
          <ServiceItem key={id} {...rest} />
        ))}
      </section>
    </BaseScreen>
  );
};

const ServiceItem = ({ title, image, slug }) => {
  return (
    <Link href={`/services/${slug}`} passHref>
      <a className="relative flex items-center justify-center h-full min-h-[160px] px-6 py-4 overflow-hidden text-white border rounded-lg bg-slate-900 border-slate-400/50 cursor-pointer">
        {image && (
          <Image
            src={image}
            alt={title}
            layout="fill"
            className="object-cover transition-opacity opacity-70 hover:opacity-50"
          />
        )}
        <div className="relative pointer-events-none">
          <h3 className="text-4xl font-bold text-center">{title}</h3>
        </div>
      </a>
    </Link>
  );
};
