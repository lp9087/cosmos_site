import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

import Logo from '../assets/img/Logo.png';
import SmallLogo from '../assets/img/SmallLogo.png';
import PROMO_CONFIG from '@/constants/promo';

const Navbar = ({ opened = true }) => {
  return (
    <div
      className={`flex flex-col justify-between fixed h-screen bg-black bg-opacity-50 text-white z-10
      ${opened ? 'w-[360px]' : 'w-32'} transition-all`}
    >
      <div
        className={`flex flex-col gap-2 w-11/12 min-h-[150px] self-center place-items-center
        ${opened ? 'pt-6' : ''}`}
      >
        <Link href="/" passHref>
          <a>
            <div className={`${!opened && 'hidden'}`}>
              <Image src={Logo} alt="Logo" layout="intrinsic" />
            </div>
            <div className={`w-28 ${opened && 'hidden'}`}>
              <Image src={SmallLogo} alt="Logo" layout="intrinsic" />
            </div>
          </a>
        </Link>
        {opened && <h1 className="text-center">{PROMO_CONFIG.NAVBAR_HEADER_TEXT}</h1>}
      </div>
      <div className="flex flex-col gap-3 justify-self-center px-9 text-opacity-75">
        {PROMO_CONFIG.MENU_ITEMS.map((x, idx) => (
          <MenuItem key={idx} {...x} minimized={!opened} />
        ))}
      </div>
      <div className="pb-4 text-center min-h-[50px]">
        {opened && PROMO_CONFIG.COPYRIGHT}
      </div>
    </div>
  );
};

export default Navbar;

const MenuItem = ({ icon: Icon, text, link, minimized }) => {
  return (
    <Link href={link} passHref>
      <MenuItemContainer className="flex gap-4 items-center cursor-pointer">
        <div className="flex justify-center items-center w-14 h-14 bg-black rounded-full bg-opacity-30 transition-colors">
          <Icon className="transition-opacity" color="#fff" opacity={0.75} size={32} />
        </div>
        {!minimized && (
          <span className="text-xl font-medium opacity-75 transition-opacity">
            {text}
          </span>
        )}
      </MenuItemContainer>
    </Link>
  );
};

const MenuItemContainer = styled.a`
  &:hover {
    div {
      --tw-bg-opacity: 0.6;

      svg {
        opacity: 1;
      }
    }

    span {
      opacity: 1;
    }
  }
`;
