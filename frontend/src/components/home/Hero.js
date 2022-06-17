import { useState } from 'react';
import Image from 'next/image';

import ArrowLeft from '../../../assets/arrow-left.svg';
import ArrowRight from '../../../assets/arrow-right.svg';
import { HERO_MOCK } from '../../constants/hero';

export const Hero = () => {
  return (
    <div className="relative h-screen -mt-20 2xl:-mt-[120px] text-white">
      <div className="absolute h-[86%] -left-2 -top-2 -right-2 -z-10 blur-sm 2xl:blur-[6px]">
        <Image
          className="object-cover "
          src="/assets/hero-bg.png"
          alt="Hero backgound"
          layout="fill"
          priority
        />
      </div>
      <div className="container flex flex-col h-full gap-1 mx-auto 2xl:gap-3 pt-28 2xl:pt-40">
        <div>
          <h2 className="text-xs 2xl:text-sm font-medium tracking-[0.08em] uppercase">
            Российский разработчик программных продуктов
          </h2>
          <h3 className="mt-3 text-4xl font-bold !leading-tight tracking-wide 2xl:mt-7 2xl:text-6xl">
            Создаем полезные <br />
            IT-решения
          </h3>
          <h4 className="mt-4 text-sm font-semibold tracking-wider 2xl:mt-8 2xl:text-xl opacity-80">
            Разработка. Внедрение. Сопровождение <br />
            программного обеспечения
          </h4>
          <button className="px-4 py-3 mt-4 text-sm font-semibold uppercase 2xl:mt-16 2xl:text-base rounded-3xl bg-brand">
            Оставить заявку
          </button>
        </div>
        <Slider slides={HERO_MOCK} />
      </div>
    </div>
  );
};

const Slider = ({ slides = [] }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div className="relative w-full h-full mb-8 2xl:mt-3 2xl:mb-16">
      <div
        className="absolute p-1 -ml-2 text-2xl -translate-y-1/2 cursor-pointer 2xl:-ml-5 top-1/2"
        onClick={() =>
          setActiveSlide(state => (state === 0 ? slides.length - 1 : state - 1))
        }
      >
        <ArrowLeft />
      </div>
      <div
        className="absolute right-0 p-1 -mr-2 text-2xl -translate-y-1/2 cursor-pointer 2xl:-mr-5 top-1/2"
        onClick={() =>
          setActiveSlide(state => (state === slides.length - 1 ? 0 : state + 1))
        }
      >
        <ArrowRight />
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2 translate-y-full -mb-3 2xl:-mb-6 z-20">
        {slides.map((_, idx) => (
          <div
            key={idx}
            className={`h-2.5 w-2.5 rounded-full cursor-pointer
              ${idx === activeSlide ? 'bg-brand' : 'bg-[#fffdfd]'}`}
            onClick={() => setActiveSlide(idx)}
          />
        ))}
      </div>
      <div
        className={`absolute w-[40%] h-full left-0 right-0 mx-auto
          rounded-xl overflow-hidden cursor-pointer shadow-2xl shadow-blue-500
          pointer-events-none transition-all -translate-x-[80%] scale-[.8]
          ${activeSlide === 0 ? 'opacity-100' : 'opacity-0'}`}
        onClick={() => setActiveSlide(slides.length - 1)}
      >
        <Image
          className="object-cover pointer-events-auto"
          src={slides[slides.length - 1].image}
          alt={slides[slides.length - 1].title}
          layout="fill"
        />
      </div>
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute w-[40%] h-full left-0 right-0 mx-auto
            rounded-xl overflow-hidden cursor-pointer shadow-2xl shadow-blue-500
            pointer-events-none transition-all
            ${
              idx - activeSlide > 0
                ? `translate-x-[${idx === activeSlide + 1 ? '80%' : '300%'}]`
                : ''
            }
            ${
              idx - activeSlide < 0
                ? `-translate-x-[${idx === activeSlide - 1 ? '80%' : '300%'}]`
                : ''
            }
            ${idx - activeSlide === 0 ? 'z-10' : `scale-[.8]`}`}
          onClick={() => {
            if (idx - activeSlide === 0) return;
            const dir = idx - activeSlide > 0 ? 'next' : 'prev';
            setActiveSlide(state => (dir === 'next' ? state + 1 : state - 1));
          }}
        >
          <Image
            className="object-cover pointer-events-auto"
            src={slide.image}
            alt={slide.title}
            layout="fill"
            priority={idx < 2}
          />
        </div>
      ))}
      <div
        className={`absolute w-[40%] h-full left-0 right-0 mx-auto
          rounded-xl overflow-hidden cursor-pointer shadow-2xl shadow-blue-500
          pointer-events-none transition-all translate-x-[80%] scale-[.8]
          ${
            activeSlide === slides.length - 1
              ? 'opacity-100'
              : 'opacity-0 translate-x-[200%]'
          }
          `}
        onClick={() => setActiveSlide(0)}
      >
        <Image
          className="object-cover pointer-events-auto"
          src={slides[0].image}
          alt={slides[0].title}
          layout="fill"
        />
      </div>
    </div>
  );
};
