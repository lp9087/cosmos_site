import Link from 'next/link';

import { BaseScreen } from './screens';

const Footer = ({ contacts, products, productCategories, services }) => {
  const getContact = name => contacts.find(x => x.title === name)?.values || '';

  return (
    <BaseScreen className="gap-16 pb-16" container="w-full bg-sky-900 text-white">
      <div className="grid grid-cols-4 gap-6 gap-y-12">
        <About
          items={[
            { id: 1, title: 'О компании', link: '#' },
            { id: 2, title: 'Сотрудничество', link: '#' },
            { id: 3, title: 'Вакансии', link: '#' },
          ]}
        />
        <ContactUs
          email={getContact('email')}
          phone1={getContact('phone1')}
          phone2={getContact('phone2')}
          inst={getContact('inst')}
          vk={getContact('vk')}
          fb={getContact('fb')}
        />
        {productCategories.map(x => (
          <div key={x.id} className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold">{x.title}</h2>
            <div className="flex flex-col gap-2">
              {products
                .filter(prod => prod.categories.includes(x.id))
                .map(x => (
                  <Link key={x.id} href={`/products/${x.slug}`} passHref>
                    <a>{x.title}</a>
                  </Link>
                ))}
            </div>
          </div>
        ))}
        <Services items={services} />
      </div>
      <div className="flex justify-between">
        <span>{getContact('copyright')}</span>
        <address>{getContact('address')}</address>
      </div>
    </BaseScreen>
  );
};

export default Footer;

const Services = ({ items }) => (
  <div className="flex flex-col gap-4">
    <h2 className="text-lg font-semibold">Услуги</h2>
    <div className="flex flex-col gap-2">
      {items.map(x => (
        <Link key={x.id} href="#" passHref>
          <a>{x.title}</a>
        </Link>
      ))}
    </div>
  </div>
);

const About = ({ items }) => (
  <div className="flex flex-col gap-4 row-start-1 col-start-4">
    <h2 className="text-lg font-semibold">Компания</h2>
    <div className="flex flex-col gap-2">
      {items.map(x => (
        <Link key={x.id} href={x.link} passHref>
          <a>{x.title}</a>
        </Link>
      ))}
    </div>
  </div>
);

const ContactUs = ({ email, phone1, phone2, inst, vk, fb }) => (
  <div className="flex flex-col gap-4 row-start-2 col-start-4">
    <h2 className="text-lg font-semibold">Свяжитесь с нами</h2>
    <div className="flex flex-col gap-2">
      <a href={`mailto:${email}`} className="underline">
        {email}
      </a>
      {[phone1, phone2].map((x, idx) => (
        <span key={idx}>{x}</span>
      ))}
    </div>
    <div className="flex gap-3">
      <a href={inst} className="underline">
        INSTA
      </a>
      <a href={vk} className="underline">
        VK
      </a>
      <a href={fb} className="underline">
        FB
      </a>
      {/* {socials.map(x => (
        <a key={x.id} href={x.link} className="underline">
          {x.name}
        </a>
      ))} */}
    </div>
  </div>
);
