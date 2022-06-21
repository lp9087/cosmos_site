import Image from 'next/image';
import { PARTNERS_MOCK } from '../../constants/partners';

export const Partners = () => {
  return (
    <div className="container flex flex-col items-center pb-36 2xl:pb-48 mx-auto gap-20 2xl:gap-28">
      <h3 className="text-4xl font-bold 2xl:text-5xl text-primary">
        Среди наших клиентов
      </h3>
      <div
        className="grid grid-cols-7 2xl:grid-cols-10 grid-rows-3 2xl:grid-rows-2
          gap-x-10 2xl:gap-x-14 gap-y-16 2xl:gap-y-24"
      >
        {PARTNERS_MOCK.map(({ title, link, image }, idx) => (
          <div
            key={idx}
            className="relative w-[120px] h-[90px] grayscale hover:grayscale-0 transition-all cursor-pointer"
          >
            <Image
              className="object-contain pointer-events-none"
              src={image}
              alt={title}
              layout="fill"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
