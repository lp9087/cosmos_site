import styled from 'styled-components';
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
      <RocketContainer className="absolute w-7 bottom-0 left-1/2 pb-4">
        <Rocket />
      </RocketContainer>
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

const RocketContainer = styled.div`
  animation: scrollBounce 1s ease-in-out alternate infinite;

  @keyframes scrollBounce {
    100% {
      transform: translateY(-20%);
    }
  }
`;

const Rocket = () => {
  return (
    <svg viewBox="0 0 29 70" fill="#fff">
      <path d="M9.657 61.577a8.413 8.413 0 0 1 4.858-1.546c1.745 0 3.445.545 4.858 1.546a21.487 21.487 0 0 1-4.858 5.78 21.485 21.485 0 0 1-4.858-5.78zM6.823 50.962V29.39h15.383v21.572c0 3.134-.708 6.279-2.048 9.113a10.099 10.099 0 0 0-5.643-1.729 10.1 10.1 0 0 0-5.643 1.729 21.446 21.446 0 0 1-2.049-9.113zM1.66 35.756v-9.158l3.48 2.393v11.277zm7.36-10.141H20.01l-.621 2.09H9.64zm14.871 3.376l3.481-2.393v9.158l-3.48 4.512zm-9.893 40.112a.842.842 0 0 0 1.036 0c2.743-2.14 4.999-4.922 6.525-8.047a23.135 23.135 0 0 0 2.333-10.094v-7.937l4.99-6.467a.842.842 0 0 0 .175-.514V24.998a.842.842 0 0 0-1.32-.694l-4.95 3.402h-1.64l.8-2.693a.842.842 0 0 0-.806-1.082H7.89a.842.842 0 0 0-.807 1.082l.801 2.693H6.243l-4.95-3.402a.842.842 0 0 0-1.319.694v11.046c0 .186.062.367.176.514l4.99 6.467v7.937c0 3.478.806 6.969 2.332 10.094a23.136 23.136 0 0 0 6.525 8.047z"></path>
      <path d="M11.09 47.217a3.429 3.429 0 0 1 3.425-3.424 3.428 3.428 0 0 1 3.424 3.424c0 .945-.384 1.8-1.004 2.42a3.414 3.414 0 0 1-2.42 1.005 3.429 3.429 0 0 1-3.425-3.425zm8.534 0a5.115 5.115 0 0 0-5.11-5.109 5.093 5.093 0 0 0-3.61 1.499 5.094 5.094 0 0 0-1.498 3.61 5.115 5.115 0 0 0 5.109 5.11 5.115 5.115 0 0 0 5.109-5.11z"></path>
      <path d="M14.402 19.63c.62 0 1.123-.503 1.123-1.123V4.892a1.122 1.122 0 1 0-2.245 0v13.615c0 .62.503 1.122 1.122 1.122z"></path>
      <path d="M19.255 16.394c.62 0 1.122-.502 1.122-1.122V1.657a1.122 1.122 0 1 0-2.244 0v13.615c0 .62.503 1.122 1.122 1.122z"></path>
      <path d="M9.55 16.394c.62 0 1.122-.502 1.122-1.122V1.657a1.122 1.122 0 1 0-2.244 0v13.615c0 .62.502 1.122 1.122 1.122z"></path>
    </svg>
  );
};
