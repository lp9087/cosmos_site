import Image from 'next/image';

import { ADVANTAGES_MOCK } from '../../constants/about';

export const About = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen gap-10 pt-28 pb-52">
      <div className="absolute w-full h-full -z-10">
        <Image
          className="scale-y-[1.6] scale-x-[1.6] translate-x-[10%] translate-y-[6%]"
          src="/assets/about-bg.svg"
          alt="Advatages backgound"
          layout="fill"
        />
      </div>
      <h3 className="text-4xl !leading-[1.2] font-bold text-center text-primary 2xl:text-5xl z-10">
        Сегодня компания
        <br />
        Космос-2 — это:
      </h3>
      <div
        className="grid grid-cols-3 grid-rows-2 gap-x-24 gap-y-20 max-w-[1100px] py-14 px-32 rounded-[34px]
          shadow-[0_26px_117px_0_rgba(32,36,138,0.06)] shadow-[rgba(32,36,138,0.06)] bg-white z-10"
      >
        {ADVANTAGES_MOCK.map((x, idx) => (
          <Item key={idx} {...x} />
        ))}
      </div>
    </div>
  );
};

const Item = ({ title, description }) => {
  return (
    <div className="flex flex-col gap-[14px] text-center">
      <span className="text-[64px] font-extrabold text-[#252b42]">{title}</span>
      <h4 className="leading-5 text-[#514f6e]">{description}</h4>
    </div>
  );
};
