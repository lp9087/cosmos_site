import { useState } from 'react';

import PRODUCT_DETAIL_MOCK from '@/constants/mocks/productDetail';
import { BadgeListScreen, MDTextScreen, SliderScreen } from '../screens';
import ParticlesBG from '../ParticlesBG';
import Layout from '../Layout';
import CTAJumbotron from '../CTAJumbotron';
import ContactModal from '../ContactModal';

const ProductDetailPage = ({
  contacts,
  products,
  productCategories,
  services,
}) => {
  const {
    title,
    short_description,
    description,
    advantages,
    anotherText,
    links,
  } = PRODUCT_DETAIL_MOCK;
  const [modal, setModal] = useState(false);

  return (
    <Layout
      contacts={contacts}
      products={products}
      productCategories={productCategories}
      services={services}
    >
      <Hero
        title={title}
        description={short_description}
        onCTAClick={() => setModal(true)}
      />
      <MDTextScreen {...description} />
      <SliderScreen spacing="none" />
      <BadgeListScreen {...advantages} />
      <MDTextScreen spacing="none" textAlign="center" {...anotherText} />
      <BadgeListScreen {...links} />
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
        <div className="grid grid-cols-[70%,25%] gap-[5%] justify-center pl-16">
          <div className="flex flex-col gap-8">
            <h1 className="text-6xl font-semibold">{title}</h1>
            <p className="text-lg">{description}</p>
          </div>
          <div className="flex flex-col justify-evenly gap-4 h-full">
            <button
              className="btn btn-primary pointer-events-auto"
              onClick={onCTAClick}
            >
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
