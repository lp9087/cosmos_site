import Image from 'next/image';
import Link from 'next/link';

import Phone from '../../../assets/phone.svg';
import { LAYOUT_CONFIG } from '../../constants/layout';

export const Header = () => {
  return (
    <header className="absolute w-full z-50">
      <div
        className="container flex justify-between items-center
        mx-auto py-5 2xl:py-10 text-white"
      >
        <Link href="/">
          <a className="relative h-10 w-40">
            <Image src="/assets/logo.svg" alt="Logo" layout="fill" priority />
          </a>
        </Link>
        <div className="flex gap-6 2xl:gap-10 text-sm font-semibold">
          {LAYOUT_CONFIG.menuItems.map(x => (
            <Link key={x.title} href={x.link}>
              <a className="uppercase">{x.title}</a>
            </Link>
          ))}
        </div>
        <a className="flex items-center gap-3" href={LAYOUT_CONFIG.phone.link}>
          <Phone />
          <span className="font-bold tracking-widest">{LAYOUT_CONFIG.phone.title}</span>
        </a>
      </div>
    </header>
  );
};
