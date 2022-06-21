import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import ArrowLeft from '../../../assets/arrow-left.svg';
import ArrowRight from '../../../assets/arrow-right.svg';
import { SERVICES_MOCK } from '../../constants/services';

export const Services = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="container flex flex-col w-2/3 pb-40 mx-auto gap-12 pt-28 overflow-hidden">
        <h3 className="text-4xl font-bold text-center 2xl:text-5xl text-primary">
          Услуги
        </h3>
        <Slider slides={SERVICES_MOCK} />
      </div>
    </div>
  );
};

const Slider = ({ slides = [] }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  if (typeof window !== 'undefined') window.setActiveSlide = setActiveSlide;

  return (
    <div className="relative w-[1165px] mx-auto">
      <div
        className={`absolute -left-14 top-1/2 -translate-y-1/2 px-2 py-1 cursor-pointer z-10
          ${activeSlide === 0 ? 'hidden' : ''}`}
        onClick={() => setActiveSlide(state => state - 1)}
      >
        <ArrowLeft />
      </div>
      <div
        className={`absolute -right-14 top-1/2 -translate-y-1/2 px-2 py-1 cursor-pointer z-10
          ${activeSlide === slides.length - 3 ? 'hidden' : ''}`}
        onClick={() => setActiveSlide(state => state + 1)}
      >
        <ArrowRight />
      </div>
      <div
        className="grid grid-flow-col gap-5 transition-all"
        style={{ transform: `translate(${activeSlide * -395}px)` }}
      >
        {slides.map(({ title, description, image, link }, idx) => (
          <div
            key={idx}
            className={`flex flex-col items-center gap-9 w-[375px] pt-8 px-8 pb-7 text-center
              border border-[#E5E5E5] shadow-[0_4px_50px_0] shadow-black/5 transition-all
              ${idx < activeSlide ? `-translate-x-1/3` : ''}
              ${idx - 2 > activeSlide ? `translate-x-1/3` : ''}`}
          >
            <div className="relative w-full h-[180px]">
              <Image src={image} alt={title} layout="fill" />
            </div>
            <div className="flex flex-col grow gap-6">
              <h4 className="h-[50px] text-lg font-semibold 2xl:text-xl !leading-tight text-secondary">
                {title}
              </h4>
              <p className="my-auto text-[15px] !leading-tight">{description}</p>
            </div>
            <Link href={link}>
              <a
                className="mt-auto py-2 text-sm font-semibold transition-all border cursor-pointer px-8
                border-primary rounded-3xl text-primary hover:bg-primary hover:text-white"
              >
                Подробнее
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
