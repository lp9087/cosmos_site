import Image from 'next/image';
import { useState } from 'react';

import { PRODUCTS_MOCK } from '../../constants/products';

export const Products = () => {
  return (
    <div className="container flex flex-col items-center justify-center min-h-screen gap-20 pb-16 mx-auto 2xl:gap-28 pt-28">
      <h3 className="text-4xl font-bold 2xl:text-5xl text-primary">Наши решения</h3>
      <div className="px-24 2xl:px-48 grid grid-cols-3 grid-rows-3">
        {PRODUCTS_MOCK.map((x, idx) => (
          <Item key={idx} {...x} />
        ))}
      </div>
    </div>
  );
};

const Item = ({ title, link, icon }) => {
  const [hovered, setHovered] = useState(false);
  // filter: brightness(0) invert(1);
  return (
    <div
      className="flex flex-col justify-center gap-4 pt-8 2xl:pt-16 pb-6 pl-11 pr-7 2xl:pr-14 cursor-pointer
        border border-[#c4c4c4] text-secondary hover:text-white hover:bg-primary transition-all"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`relative w-20 h-20 transition-all
          ${hovered ? 'brightness-0 invert' : ''}`}
      >
        <Image src={icon} alt={title} layout="fill" />
      </div>
      <h4 className="text-lg font-medium !leading-[21px] 2xl:text-xl">{title}</h4>
    </div>
  );
};
