import { useState } from 'react';

import PRODUCT_DETAIL_MOCK from '@/constants/mocks/productDetail';
import { BadgeListScreen, MDTextScreen } from '../screens';
import ParticlesBG from '../ParticlesBG';
import Layout from '../Layout';
import CTAJumbotron from '../CTAJumbotron';
import ContactModal from '../ContactModal';

const ProductDetailPage = ({}) => {
  const { title, short_description, description, advantages, anotherText } =
    PRODUCT_DETAIL_MOCK;
  const [modal, setModal] = useState(false);

  return (
    <Layout>
      <Hero title={title} description={short_description} />
      <MDTextScreen {...description} spacing="md" />
      <BadgeListScreen {...advantages} spacing="md" />
      <MDTextScreen {...anotherText} spacing="md" />
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

const Hero = ({ title, description }) => {
  return (
    <div className="relative h-[50vh] z-[1] text-white overflow-x-hidden">
      <ParticlesBG />
      <div className="container mx-auto h-full pt-12">
        <div className="flex flex-col justify-center gap-8 h-full pl-16">
          <h1 className="text-6xl font-semibold">{title}</h1>
          <p className="text-lg w-2/3">{description}</p>
        </div>
      </div>
    </div>
  );
};
