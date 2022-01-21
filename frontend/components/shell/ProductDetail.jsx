import styled from 'styled-components';
import Image from 'next/image';
import { Award } from 'react-feather';

import { Button } from '..';
import ProductImage from '@/assets/img/MockProductImage.png';

const ProductDetail = ({ product }) => {
  return (
    <div className="flex flex-col gap-12 px-14 pt-16 py-48">
      <div className="flex flex-col gap-4">
        <h3 className="font-bold text-xl text-gray-700">Описание</h3>
        <p className="font-light">{product.full_description}</p>
      </div>
      <div className="flex flex-col">
        <h3 className="font-bold text-xl text-gray-700">Преимущества</h3>
        <div className="flex justify-evenly py-16">
          <AdvantageBadge />
          <AdvantageBadge />
          <AdvantageBadge />
          <AdvantageBadge />
          <AdvantageBadge />
        </div>
      </div>
      <Image src={ProductImage} />
      <p className="font-light">{product.full_description}</p>
      <div className="flex flex-col gap-2 items-center mt-12">
        <span className="text-sm">Остались вопросы?</span>
        <Button className="px-12" text="Связаться с нами" />
      </div>
    </div>
  );
};

export default ProductDetail;

const BadgeContainer = styled.div`
  &:hover {
    div {
      --tw-bg-opacity: 0.6;
    }
  }
`;
const AdvantageBadge = () => {
  return (
    <BadgeContainer className="flex flex-col items-center gap-6">
      <div className="flex justify-center items-center w-16 h-16 rounded-full bg-black bg-opacity-40 transition-colors">
        <Award size={32} color="#fff" />
      </div>
      <span className="w-11/12 font-semibold text-lg text-center text-gray-700">
        Лучшая программа
      </span>
    </BadgeContainer>
  );
};
