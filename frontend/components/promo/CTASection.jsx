import { useState } from 'react';
import { ArrowRight } from 'react-feather';

import PROMO_CONFIG from '@/constants/promo';
import ParticlesBG from '../ParticlesBG';

import ContactModal from './ContactModal';

const CTASection = () => {
  const [modal, setModal] = useState(false);

  return (
    <div className="relative h-screen text-white z-[1]">
      <ParticlesBG className="-ml-[360px] w-screen" />
      <Hero onCTAClick={() => setModal(true)} />
      <Contacts />
      <ContactModal isOpen={modal} onClose={() => setModal(false)} />
    </div>
  );
};

export default CTASection;

const Hero = ({ onCTAClick }) => {
  return (
    <div className="flex flex-col gap-8 h-full items-center justify-center pointer-events-none">
      <div className="flex flex-col gap-3 text-center">
        <h2 className="text-5xl font-semibold">Создаём полезные IT-решения</h2>
        <h3 className="text-lg">Более 25 лет на рынке информационных технологий</h3>
      </div>
      <button
        className="flex gap-2 px-8 py-3 rounded-3xl
      justify-center items-center text-lg font-medium
      bg-emerald-600 hover:bg-emerald-700 transition-colors pointer-events-auto"
        onClick={onCTAClick}
      >
        <span>Связаться с нами</span>
        <ArrowRight />
      </button>
    </div>
  );
};

const Contacts = () => {
  return (
    <div
      className="flex absolute right-6 top-4 py-2 px-3 rounded-xl
      bg-black bg-opacity-10 hover:bg-opacity-25 transition-colors cursor-default"
    >
      <div className="pr-2 flex flex-col text-right">
        <h3>{PROMO_CONFIG.ADDRESS1}</h3>
        <h3 className="pr-3">{PROMO_CONFIG.ADDRESS2}</h3>
      </div>
      <div className="w-[3px] bg-white rounded -rotate-[150deg]"></div>
      <div className="pl-1 flex flex-col">
        <h3 className="pl-3">{PROMO_CONFIG.PHONE1}</h3>
        <h3>{PROMO_CONFIG.PHONE2}</h3>
      </div>
    </div>
  );
};
