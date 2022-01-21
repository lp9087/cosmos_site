import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

import Logo from '@/assets/img/Logo.png';
import SmallLogo from '@/assets/img/SmallLogo.png';
import PROMO_CONFIG from '@/constants/promo';

const PRODUCT_CATEGORIES_MOCK = [
  {
    id: 1,
    title: 'Category 1',
    nodes: [
      { id: 1, title: 'First Product' },
      { id: 2, title: 'Long Product Name 2' },
    ],
  },
  {
    id: 2,
    title: 'Category 2',
    nodes: [{ id: 3, title: 'Product 3' }],
  },
  {
    id: 3,
    title: 'Category 3',
  },
];

const Navbar = ({ opened = true }) => {
  const [productsNav, setProductsNav] = useState(false);

  return (
    <div onMouseLeave={() => setProductsNav(false)}>
      <div
        className={`flex flex-col justify-between fixed h-screen bg-black bg-opacity-60 text-white z-10
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
          {PROMO_CONFIG.MENU_ITEMS.map((x, idx) => {
            let props = {};
            if (x.id === 'products') {
              props = {
                onClick: e => {
                  e.preventDefault();
                  setProductsNav(!productsNav);
                },
              };
            }

            return <MenuItem key={idx} minimized={!opened} {...x} {...props} />;
          })}
        </div>
        <div className="pb-4 text-center min-h-[50px]">
          {opened && PROMO_CONFIG.COPYRIGHT}
        </div>
      </div>
      <Categories opened={productsNav} minimized={!opened} />
    </div>
  );
};

export default Navbar;

const MenuItem = ({ icon: Icon, text, link, minimized, ...rest }) => {
  return (
    <Link href={link} passHref>
      <MenuItemContainer className="flex gap-4 items-center cursor-pointer" {...rest}>
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

const Categories = ({ opened, minimized }) => {
  return (
    <div
      className={`flex flex-col place-items-center gap-16 fixed h-screen
        bg-black text-white z-10 transition-all
        ${!opened ? 'hidden' : ''}
        ${minimized ? 'left-32 bg-opacity-80' : 'left-[360px] bg-opacity-70'}`}
    >
      <h2 className="mt-8 text-2xl font-semibold">Каталог продуктов</h2>
      <div className="flex flex-col items-start gap-3 w-full px-12">
        {PRODUCT_CATEGORIES_MOCK.map(x => (
          <div key={x.id} className="flex flex-col gap-3">
            <h3 className="text-lg font-medium underline underline-offset-4">
              {x.title}
            </h3>
            {x.nodes && (
              <div className="flex flex-col gap-1 pl-4">
                {x.nodes.map(x => (
                  <Link key={x.id} href="/products/slug" passHref>
                    <a>
                      <h3 className="font-medium cursor-pointer">{x.title}</h3>
                    </a>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
