import styled from 'styled-components';
import Image from 'next/image';
import { Award } from 'react-feather';

import { Layout } from '..';
import { Button, Screen } from '../..';
import { BadgeListScreen, TextScreen } from '../screens';
import ProductImage from '@/assets/img/MockProductImage.png';
import PRODUCT_DETAIL_MOCK from '@/constants/mocks/productDetail';

import ProductDetailHeader from './ProductDetailHeader';

const ProductDetailPage = () => {
  const { title, short_description, description, advantages, anotherText } =
    PRODUCT_DETAIL_MOCK;

  return (
    <Layout
      header={<ProductDetailHeader title={title} description={short_description} />}
    >
      <TextScreen className="pt-20" container="bg-slate-100 min-h-0" {...description} />
      <BadgeListScreen container="bg-slate-300" {...advantages} />
      <Screen>
        <Image src={ProductImage} alt="product image" />
      </Screen>
      <TextScreen className="pb-8" container="bg-slate-300 min-h-0" {...anotherText} />
      <Screen className="pt-8" container="bg-slate-300 min-h-0">
        <div className="flex flex-col gap-2 items-center mt-12">
          <span className="text-sm">Остались вопросы?</span>
          <Button className="px-12" text="Связаться с нами" />
        </div>
      </Screen>
    </Layout>
  );
};

export default ProductDetailPage;
