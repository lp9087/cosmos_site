import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Phone } from 'react-feather';

import Logo from '@/assets/img/Logo.png';

const menuPriority = {
  ProductMenuItems: 1,
  ServiceMenuItems: 2,
  CustomPageMenuItems: 99,
};

const getMenuLink = (type, slug) => {
  if (type === 'ProductMenuItems') return `/products${slug ? `/${slug}` : ''}`;
  if (type === 'ServiceMenuItems') return '/services';

  return `/${slug}`;
};

const Navbar = ({ menuItems, products, productCategories, contacts }) => {
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
      <div className="container flex items-center justify-between h-full gap-10">
        <Link href="/" passHref>
          <a className="flex w-40">
            <Image src={Logo} alt="Logo" layout="intrinsic" />
          </a>
        </Link>
        <div className="flex items-center h-full gap-8">
          <nav className="flex h-full">
            {[...menuItems]
              .sort(
                (a, b) => menuPriority[a.resourcetype] - menuPriority[b.resourcetype]
              )
              .map(x => (
                <NavbarItem key={x.title} className="p-2">
                  <Link href={getMenuLink(x.resourcetype, x.page_slug)} passHref>
                    <NavbarLink className="text-sm font-semibold uppercase">
                      {x.title}
                    </NavbarLink>
                  </Link>
                  {x.resourcetype === 'ProductMenuItems' && <ChevronDown size={20} />}
                  {x.resourcetype === 'ProductMenuItems' && (
                    <ProductsMenu
                      products={products}
                      productCategories={productCategories}
                    />
                  )}
                </NavbarItem>
              ))}
          </nav>
          <div className="flex gap-2">
            <Phone />
            <span>{contacts.find(x => x.title === 'phone1').values}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

const NavbarItem = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;

  & #products-menu {
    display: none;
    opacity: 0;
  }

  &:hover {
    a::after {
      width: 100%;
    }

    #products-menu {
      display: grid;
      opacity: 1;
    }
  }
`;

const NavbarLink = styled.a`
  position: relative;
  display: flex;

  &::after {
    display: block;
    position: absolute;
    left: 0; /*изменить на right:0;, чтобы изменить направление подчёркивания */
    bottom: -2px;
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

const ProductsMenu = ({ products, productCategories }) => {
  return (
    <div
      id="products-menu"
      className="absolute w-[650px] top-16 left-1/2 -translate-x-1/2 bg-slate-100 text-black 
        px-8 py-6 grid grid-cols-2 gap-x-6 gap-y-4 border border-slate-200/75 shadow-xl
        before:absolute before:-top-[10px] before:left-1/2 before:-translate-x-1/2
        before:border-x-[10px] before:border-b-[10px] before:border-x-transparent before:border-b-slate-100
        transition-all rounded-md"
    >
      {productCategories.map(category => (
        <div key={category.id} className="flex flex-col gap-3">
          <h2 className="font-semibold">{category.title}</h2>
          <div className="flex flex-col gap-1">
            {products
              .filter(x => x.categories.includes(category.id))
              .map(x => (
                <Link key={x.id} href={`/products/${x.slug}`} passHref>
                  <a className="hover:text-blue-600">
                    <h3 className="text-sm">{x.title}</h3>
                  </a>
                </Link>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};
