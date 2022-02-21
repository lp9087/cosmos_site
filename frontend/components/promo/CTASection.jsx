import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

import { ParticlesBG } from '@/components/index';
import Cube from '@/assets/Cube.gif';

const CTASection = ({ onCTAClick }) => {
  return (
    <div className="relative h-screen z-[1] text-white overflow-x-hidden">
      <ParticlesBG />
      <Hero onCTAClick={onCTAClick} />
      <RocketContainer className="absolute w-7 bottom-0 left-1/2 pb-4">
        <Rocket />
      </RocketContainer>
    </div>
  );
};

export default CTASection;

const Hero = ({ onCTAClick }) => {
  return (
    <div className="container flex mx-auto h-full pointer-events-none">
      <div className="flex flex-col gap-16 justify-center max-w-[750px] h-full">
        <div className="flex flex-col gap-10">
          <h2 className="font-medium text-7xl">Создаём полезные IT-решения</h2>
          <p className="text-lg">Более 25 лет на рынке информационных технологий</p>
        </div>
        <div className="grid grid-cols-2 gap-3 w-3/4">
          <button
            className="btn btn-primary py-6 h-auto rounded-2xl pointer-events-auto"
            onClick={onCTAClick}
          >
            Стать клиентом
          </button>
          <Link href="/about" passHref>
            <a
              className={`btn btn-outline border-neutral backdrop-blur
              hover:bg-slate-900/25 text-white py-6 h-auto rounded-2xl
              pointer-events-auto`}
            >
              {' '}
              Больше о нас
            </a>
          </Link>
        </div>
      </div>
      <div className="flex items-center m-2">
        <Image src={Cube} layout="intrinsic" alt="cube" />
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
