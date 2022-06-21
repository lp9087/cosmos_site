import Link from 'next/link';
import Image from 'next/image';

import { NEWS_MOCK } from '../../constants/news';
import { useState } from 'react';

export const News = () => {
  return (
    <div className="container flex flex-col items-center justify-center mx-auto pb-36">
      <h3 className="text-4xl font-bold 2xl:text-5xl text-primary mb-14">Новости</h3>
      <div className="grid grid-cols-4 grid-rows-1 gap-7">
        {NEWS_MOCK.map((x, idx) => (
          <Item key={idx} {...x} />
        ))}
      </div>
      <Link href="#">
        <a
          className="mt-12 px-9 py-[10px] rounded-[37px] font-semibold
          text-primary border border-primary hover:bg-primary hover:text-white transition-all"
        >
          Смотреть все
        </a>
      </Link>
    </div>
  );
};

const Item = ({ title, date, image, link, description }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Link href={link}>
      <a
        className="relative w-72 pb-72 pointer-events-auto"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div
          className={`absolute flex flex-col justify-between w-full h-full pt-7 pb-3 px-5
            border border-black/[0.15] shadow-[0_4px_50px_0] shadow-black/10
            transition-all pointer-events-none overflow-hidden
            ${hovered ? 'bg-primary/60' : 'bg-white/80'}`}
        >
          <Image className="object-cover -z-10" src={image} alt={title} layout="fill" />
          <span
            className={`text-sm 2xl:text-base font-semibold
              ${hovered ? 'text-white' : 'text-[#606060]'}`}
          >
            {date}
          </span>
          <h4
            className={`text-lg 2xl:text-xl !leading-tight font-semibold transition-all text-secondary
              ${hovered ? '-translate-y-[350%]' : ''}`}
          >
            {title}
          </h4>
          <h5
            className={`absolute text-sm 2xl:text-base !leading-[1.2] font-medium transition-all text-white
              ${hovered ? 'bottom-8 left-7 right-7' : 'translate-y-[400%]'}`}
          >
            {description}
          </h5>
        </div>
      </a>
    </Link>
  );
};
