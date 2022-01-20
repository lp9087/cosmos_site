import styled from 'styled-components';
import Image from 'next/image';

import Logo from '../../assets/img/Logo.png';
import PROMO_CONFIG from '@/constants/promo';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="flex flex-col justify-between fixed w-[360px] h-screen bg-black bg-opacity-50 text-white z-10">
      <div className="flex flex-col gap-2 w-11/12 pt-6 self-center place-items-center">
        <Link href="/" passHref>
          <a>
            <Image src={Logo} alt="Logo" layout="fixed" />
          </a>
        </Link>
        <h1 className="text-center">{PROMO_CONFIG.NAVBAR_HEADER_TEXT}</h1>
      </div>
      <div className="flex flex-col gap-3 justify-self-center px-8 text-opacity-75">
        {PROMO_CONFIG.MENU_ITEMS.map((x, idx) => (
          <MenuItem key={idx} {...x} />
        ))}
      </div>
      <div className="pb-4 text-center">{PROMO_CONFIG.COPYRIGHT}</div>
    </div>
  );
};

export default Navbar;

const MenuItem = ({ icon: Icon, text, link }) => {
  return (
    <Link href={link} passHref>
      <MenuItemContainer className="flex gap-4 items-center cursor-pointer">
        <div className="flex justify-center items-center w-14 h-14 bg-black rounded-full bg-opacity-30 transition-colors">
          <Icon className="transition-opacity" color="#fff" opacity={0.75} size={32} />
        </div>
        <span className="text-xl font-medium opacity-75 transition-opacity">{text}</span>
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
