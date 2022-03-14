import { useState } from 'react';
import Head from 'next/head';

import PROMO_CONFIG from '@/constants/promo';
import { useBlocks } from '@/hooks';
import { Layout, ParticlesBG, ContactModal, RegionsMap } from '@/components';

const CustomPage = ({
  page,
  menuItems,
  contacts,
  products,
  productCategories,
  services,
}) => {
  const [modal, setModal] = useState(false);
  const content = useBlocks(page.blocks, {
    BlockCTA: { onCTAClick: () => setModal(true) },
  });

  return (
    <Layout
      menuItems={menuItems}
      contacts={contacts}
      products={products}
      productCategories={productCategories}
      services={services}
    >
      <Head>
        <title>{`${page.title} | ${PROMO_CONFIG.SEO.title}`}</title>
      </Head>

      <Hero
        title={page.title}
        description={page.description}
        onCTAClick={() => setModal(true)}
      />
      {content}
      {page.map && <RegionsMap />}
      <ContactModal isOpen={modal} onClose={() => setModal(false)} />
    </Layout>
  );
};

export default CustomPage;

const Hero = ({ title, description, onCTAClick }) => {
  return (
    <div className="relative h-[50vh] z-[1] text-white overflow-x-hidden">
      <ParticlesBG />
      <div className="container flex items-center h-full pt-16 mx-auto pointer-events-none">
        <div className="grid grid-cols-[70%,25%] gap-[5%] justify-center w-full pl-16">
          <div className="flex flex-col gap-8">
            <h1 className="text-6xl font-semibold">{title}</h1>
            <p className="text-lg">{description}</p>
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
