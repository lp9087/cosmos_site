import Link from 'next/link';
import Image from 'next/image';

import Phone from '../../../assets/phone-outline.svg';
import UserCircle from '../../../assets/user-circle.svg';
import Email from '../../../assets/email.svg';
import Location from '../../../assets/location.svg';
import { LAYOUT_CONFIG } from '../../constants/layout';

export const Footer = () => {
  return (
    <footer className="relative bg-primary text-white pb-12 overflow-hidden z-0">
      <div className="absolute w-full h-full -z-10">
        <Image
          className="scale-y-[1.6] scale-x-[1.6] translate-x-[12%] -translate-y-[30%]"
          src="/assets/footer-bg.svg"
          alt="Advatages backgound"
          layout="fill"
        />
      </div>
      <div className="container mx-auto pt-10 grid grid-cols-footer gap-x-16 gap-y-8 pr-20">
        <Info />
        <MenuSection title="Решения" items={LAYOUT_CONFIG.productsMenu} isDouble />
        <div className="grid grid-cols-2 gap-x-20">
          <MenuSection title="Услуги" items={LAYOUT_CONFIG.servicesMenu} />
          <MenuSection title="Вакансии" items={LAYOUT_CONFIG.jobsMenu} />
        </div>
        <div className="flex flex-col gap-3">
          <h5>Мы в соцсетях:</h5>
          <div className="flex gap-7">
            {LAYOUT_CONFIG.socials.map(({ icon, link }, idx) => (
              <a key={idx} href={link} className="relative h-10 w-10">
                <Image src={icon} alt={link} layout="fill" />
              </a>
            ))}
          </div>
        </div>
        <h5 className="text-[15px] self-end">{LAYOUT_CONFIG.copyright}</h5>
        <Link href={LAYOUT_CONFIG.policy.link}>
          <a className="text-[15px] text-[#BDBDBD] self-end">
            {LAYOUT_CONFIG.policy.title}
          </a>
        </Link>
      </div>
    </footer>
  );
};

const Info = () => (
  <div className="flex flex-col gap-5">
    <div className="relative h-11 w-40">
      <Image src="/assets/logo.png" alt="Logo" layout="fill" />
    </div>
    <div className="flex flex-col gap-7 w-3/4">
      <h2 className="text-[15px]">{LAYOUT_CONFIG.title}</h2>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <Phone />
          <div className="flex flex-col">
            {LAYOUT_CONFIG.footerPhones.map(({ title, link }, idx) => (
              <a className="text-[15px]" key={idx} href={link}>
                {title}
              </a>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <UserCircle />
          <div className="flex flex-col text-[15px]">
            <h3 className="">Отдел маркетинга и продаж:</h3>
            <a className="" href={LAYOUT_CONFIG.phone.link}>
              {LAYOUT_CONFIG.phone.title}
            </a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Email />
          <div className="flex flex-col text-[15px]">
            <a className="" href={LAYOUT_CONFIG.email.link}>
              {LAYOUT_CONFIG.email.title}
            </a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Location />
          <div className="flex flex-col text-[15px]">
            <h3>
              <pre className="font-sans !leading-[18px]">{LAYOUT_CONFIG.location}</pre>
            </h3>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const MenuSection = ({ title, items, isDouble = false }) => (
  <div className="flex flex-col gap-7">
    <h4 className="text-xl font-semibold">{title}</h4>
    <div className={`grid gap-x-20 gap-y-4 ${isDouble ? 'grid-cols-2' : 'grid-cols-1'}`}>
      {items.map(({ title, link }, idx) => (
        <Link key={idx} href={link}>
          <a className="text-[13px] !leading-4">{title}</a>
        </Link>
      ))}
    </div>
  </div>
);
