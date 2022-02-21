import Image from 'next/image';
import styled from 'styled-components';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import BaseScreen from './BaseScreen';

const SliderScreen = ({ title, images, ...rest }) => {
  return (
    <BaseScreen className="gap-12" {...rest}>
      {title && <h2 className="font-bold text-4xl">{title}</h2>}
      <StyledSwiper
        slidesPerView={3}
        spaceBetween={30}
        modules={images.length > 3 ? [Navigation] : []}
        loop={images.length > 3}
        navigation={images.length > 3}
        //
        alignCenter={images.length <= 3}
      >
        {images.map(x => (
          <SwiperSlide key={x.id}>
            <Image src={x.img} layout="fill" alt="" />
          </SwiperSlide>
        ))}
      </StyledSwiper>
    </BaseScreen>
  );
};

export default SliderScreen;

const StyledSwiper = styled(Swiper)`
  --swiper-navigation-color: #fff;

  width: 100%;
  height: 100%;
  min-height: 300px;

  .swiper-wrapper {
    ${({ alignCenter }) => alignCenter && 'justify-content: center;'}
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #afafaf;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
