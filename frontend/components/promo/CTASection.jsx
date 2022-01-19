import Particles from 'react-tsparticles';
import { ArrowRight } from 'react-feather';

import PROMO_CONFIG from '@/constants/promo';
import config from '@/lib/particles.config';

const CTASection = () => {
  return (
    <div className="h-screen text-white">
      <Particles
        id="particles-bg"
        className="-ml-[360px] absolute h-full -z-10"
        options={config}
      />
      <Hero />
      <Contacts />
    </div>
  );
};

export default CTASection;

const Hero = () => {
  return (
    <div className="flex flex-col gap-8 h-full items-center justify-center">
      <div className="flex flex-col gap-3 text-center">
        <h2 className="text-5xl font-semibold">Создаём полезные IT-решения</h2>
        <h3 className="text-lg">Более 25 лет на рынке информационных технологий</h3>
      </div>
      <a
        className="flex gap-2 px-8 py-3 rounded-3xl
      justify-center items-center text-lg font-medium
      bg-emerald-600 hover:bg-emerald-700 transition-colors"
        href="#"
      >
        <span>Связаться с нами</span>
        <ArrowRight />
      </a>
    </div>
  );
};

const Contacts = () => {
  return (
    <div
      className="flex fixed right-6 top-4 py-2 px-3 rounded-xl
      bg-black bg-opacity-10 hover:bg-opacity-25 transition-colors cursor-default"
    >
      <div className="pr-2 flex flex-col text-right">
        <h3>{PROMO_CONFIG.ADDRESS1}</h3>
        <h3 className="pr-3">{PROMO_CONFIG.ADDRESS2}</h3>
      </div>
      {/* figure */}
      <div className="w-[3px] bg-white rounded -rotate-[150deg]"></div>
      <div className="pl-1 flex flex-col">
        <h3 className="pl-3">{PROMO_CONFIG.PHONE1}</h3>
        <h3>{PROMO_CONFIG.PHONE2}</h3>
      </div>
    </div>
  );
};
