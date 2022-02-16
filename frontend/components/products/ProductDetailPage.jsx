import { useState } from 'react';
import Head from 'next/head';

import PROMO_CONFIG from '@/constants/promo';
import { useBlocks } from '@/hooks/index';
import { Layout, ParticlesBG, ContactModal, CTAJumbotron } from '@/components/index';

const ProductDetailPage = ({
  product,
  contacts,
  products,
  productCategories,
  services,
}) => {
  const [modal, setModal] = useState(false);
  const content = useBlocks(product.blocks);

  return (
    <Layout
      contacts={contacts}
      products={products}
      productCategories={productCategories}
      services={services}
    >
      <Head>
        <title>{`${product.title} | ${PROMO_CONFIG.SEO.title}`}</title>
      </Head>

      <Hero
        title={product.title}
        description={product.description}
        onCTAClick={() => setModal(true)}
      />
      {content}
      <CTAJumbotron
        className="mb-16"
        ctaText="Связаться с нами"
        onCTAClick={() => setModal(true)}
      />
      <ContactModal isOpen={modal} onClose={() => setModal(false)} />
    </Layout>
  );
};

export default ProductDetailPage;

const Hero = ({ title, description, onCTAClick }) => {
  return (
    <div className="relative h-[50vh] z-[1] text-white overflow-x-hidden">
      <ParticlesBG />
      <div className="container flex items-center mx-auto h-full pt-16 pointer-events-none">
        <div className="grid grid-cols-[70%,25%] gap-[5%] justify-center w-full pl-16">
          <div className="flex flex-col gap-8">
            <h1 className="text-6xl font-semibold">{title}</h1>
            <p className="text-lg">{description}</p>
          </div>
          <div className="flex flex-col justify-evenly gap-4 h-full">
            <button className="btn btn-primary pointer-events-auto" onClick={onCTAClick}>
              Заказать демонстрацию
            </button>
            <button className="btn btn-ghost pointer-events-auto">
              Скачать презентацию
            </button>
            <button className="btn btn-ghost pointer-events-auto">
              Посмотреть демо
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
