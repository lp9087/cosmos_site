import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { Phone } from 'react-feather';

import Logo from '@/assets/img/Logo.png';
import PROMO_CONFIG from '@/constants/promo';

const Navbar = () => {
  const [isTransparent, setIsTransparent] = useState(true);

  useEffect(() => {
    const listener = e => setIsTransparent(e.currentTarget.scrollY < 50);

    window.addEventListener('scroll', listener);
    return () => window.removeEventListener('scroll', listener);
  }, []);

  return (
    <header
      className={`sticky top-0 flex justify-center items-center w-full h-16 z-10
      border-b border-slate-50/[0.06] text-white
        transition-colors duration-500 backdrop-blur
        ${isTransparent ? 'bg-slate-900/20' : 'bg-slate-900/60'}`}
    >
      <div className="container flex items-center justify-between gap-10">
        <Link href="/" passHref>
          <a className="flex w-40">
            <Image src={Logo} alt="Logo" layout="intrinsic" />
          </a>
        </Link>
        <div className="flex items-center gap-8">
          <nav className="flex gap-4">
            {PROMO_CONFIG.MENU_ITEMS.map(x => (
              <Link key={x.id} href={x.link} passHref>
                <NavbarLink className="text-sm font-semibold uppercase">
                  {x.title}
                </NavbarLink>
              </Link>
            ))}
          </nav>
          <div className="flex gap-2">
            <Phone />
            <span>{PROMO_CONFIG.PHONE}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

const NavbarLink = styled.a`
  position: relative;

  &::after {
    display: block;
    position: absolute;
    left: 0; /*изменить на right:0;, чтобы изменить направление подчёркивания */
    width: 0; /*задаём длинну линии до наведения курсора*/
    height: 2px; /*задаём ширину линии*/
    content: '';
    background-color: #00a650; /*задаём цвет линии*/
    transition: width 0.3s ease-out; /*задаём время анимации*/
  }

  &:hover::after {
    width: 100%;
  }
`;
