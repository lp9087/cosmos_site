import Image from 'next/image';

import { SERVICES_MOCK } from '../../constants/services';

export const Services = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="container flex flex-col pb-40 mx-auto gap-28 pt-28">
        <h3 className="text-4xl font-bold text-center 2xl:text-5xl text-primary">
          Услуги
        </h3>
        <div className="w-[9999px]">
          <div className="flex gap-7">
            {SERVICES_MOCK.map(({ title, description, image, link }, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between items-center gap-8 w-[350px] 2xl:w-[500px] pt-11 px-11 pb-9 text-center
              border border-[#E5E5E5] shadow-md"
              >
                <div className="relative w-full h-[240px]">
                  <Image src={image} alt={title} layout="fill" />
                </div>
                <div className="flex flex-col gap-6">
                  <h4 className="text-xl font-semibold 2xl:text-3xl text-secondary">
                    {title}
                  </h4>
                  <p className="text-lg 2xl:text-xl !leading-7 2xl:!leading-9">
                    {description}
                  </p>
                </div>
                <a className="py-3 font-semibold transition-all border cursor-pointer px-11 border-primary rounded-3xl text-primary hover:bg-primary hover:text-white">
                  Подробнее
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
