import Image from 'next/image';

import { ADVANTAGES_MOCK } from '../../constants/advantages';

export const Advantages = () => {
  return (
    <div className="relative flex flex-col w-full gap-8 pt-14 pb-28 bg-primary/50">
      <div className="absolute w-full h-full -mt-14 -z-10">
        <Image
          className="object-cover"
          src="/assets/advantages/bg.png"
          alt="Advatages backgound"
          layout="fill"
        />
      </div>
      <h3 className="text-4xl font-bold text-center text-white 2xl:text-5xl">
        Почему нас выбирают?
      </h3>
      <div className="container grid grid-cols-5 mx-auto">
        {ADVANTAGES_MOCK.map(({ title, image }, idx) => (
          <div
            key={idx}
            className={`flex flex-col gap-4 items-center pt-14 pb-10 px-8 bg-white border border-primary/30
              ${idx !== ADVANTAGES_MOCK.length - 1 ? '-mx-px' : ''}`}
          >
            <div className="relative w-24 h-24">
              <Image src={image} alt="Advatages backgound" layout="fill" />
            </div>
            <h4 className="font-semibold text-center text-primary">{title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};
