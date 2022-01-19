import Particles from 'react-tsparticles';
import { ArrowRight } from 'react-feather';

import config from '@/lib/particles.config';

const CTASection = () => {
  return (
    <div className="h-screen text-white">
      <Particles
        id="particles-bg"
        className="-ml-[360px] absolute h-full -z-10"
        options={config}
      />
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
    </div>
  );
};

export default CTASection;
