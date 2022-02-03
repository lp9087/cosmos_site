import styled from 'styled-components';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import BaseScreen from './BaseScreen';

const SliderScreen = ({ title, content, ...rest }) => {
  return (
    <BaseScreen className="gap-12" {...rest}>
      {title && <h2 className="font-bold text-4xl">{title}</h2>}
      <StyledSwiper
        slidesPerView={3}
        spaceBetween={30}
        modules={[Navigation]} // items_count > 3
        loop // items_count > 3
        navigation // items_count > 3
        //
        alignCenter={false} // items_count < 3
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        {/* <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </StyledSwiper>
    </BaseScreen>
  );
};

export default SliderScreen;

const StyledSwiper = styled(Swiper)`
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
