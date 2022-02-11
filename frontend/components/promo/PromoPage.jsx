import { useState } from 'react';
import Head from 'next/head';

import PROMO_CONFIG from '@/constants/promo';
import { BadgeListScreen } from '../screens';
import { ServicesScreen } from '../screens/promo';
import Layout from '../Layout';
import CTAJumbotron from '../CTAJumbotron';
import ContactModal from '../ContactModal';

import CTASection from './CTASection';
import NewsList from './NewsList';

const PromoPage = ({
  servicesBlock,
  partners,
  achievements,
  news,
  productCategories,
  products,
  services,
}) => {
  const [modal, setModal] = useState(false);

  console.log(services);
  return (
    <Layout
      products={products}
      productCategories={productCategories}
      services={services}
    >
      <Head>
        <title>{PROMO_CONFIG.SEO.title}</title>
      </Head>
      <CTASection onCTAClick={() => setModal(true)} />
      <ServicesScreen {...servicesBlock} />
      <CTAJumbotron onCTAClick={() => setModal(true)} />
      <BadgeListScreen title="Наши партнеры" items={partners} />
      <BadgeListScreen title="Достижения и награды" items={achievements} />
      <NewsList items={news} />
      <ContactModal isOpen={modal} onClose={() => setModal(false)} />
    </Layout>
  );
};

export default PromoPage;
