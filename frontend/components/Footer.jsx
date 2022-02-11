import Link from 'next/link';

import FOOTER_MOCK from '@/constants/mocks/footer';

import { BaseScreen } from './screens';

const Footer = ({ products, productCategories, services }) => {
  const { email, phone1, phone2, address, socials, copyright } = FOOTER_MOCK;

  return (
    <BaseScreen
      className="gap-16 pb-16"
      container="w-full bg-sky-900 text-white"
    >
      <div className="grid grid-cols-4 gap-6 gap-y-12">
        <About
          items={[
            { id: 1, title: 'О компании', link: '#' },
            { id: 2, title: 'Сотрудничество', link: '#' },
            { id: 3, title: 'Вакансии', link: '#' },
          ]}
        />
        <ContactUs
          email={email}
          phone1={phone1}
          phone2={phone2}
          socials={socials}
        />
        {productCategories.map(x => {
          const curProducts = products.filter(prod =>
            prod.categories.includes(x.id)
          );
          return (
            <div key={x.id} className="flex flex-col gap-4">
              <h2 className="text-lg font-semibold">{x.title}</h2>
              <div className="flex flex-col gap-2">
                {curProducts.map(x => (
                  <Link key={x.id} href="/products/slug" passHref>
                    <a>{x.title}</a>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
        <Services items={services} />
      </div>
      <div className="flex justify-between">
        <span>&copy; {copyright}</span>
        <address>{address}</address>
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

const ContactUs = ({ email, phone1, phone2, socials }) => (
  <div className="flex flex-col gap-4 row-start-2 col-start-4">
    <h2 className="text-lg font-semibold">Свяжитесь с нами</h2>
    <div className="flex flex-col gap-2">
      <a href={`mailto:${email}`} className="underline">
        {email}
      </a>
      {[phone1, phone2].map(x => (
        <span key={x.id}>{x.phone}</span>
      ))}
    </div>
    <div className="flex gap-3">
      {socials.map(x => (
        <a key={x.id} href={x.link} className="underline">
          {x.name}
        </a>
      ))}
    </div>
  </div>
);
