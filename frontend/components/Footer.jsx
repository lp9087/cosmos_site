import Link from 'next/link';

import FOOTER_MOCK from '@/constants/mocks/footer';

import { BaseScreen } from './screens';

const Footer = () => {
  const { columns, email, phones, address, socials, copyright } = FOOTER_MOCK;

  return (
    <BaseScreen className="gap-16 pb-16" container="w-full bg-sky-900 text-white">
      <div className="grid grid-cols-4 gap-6">
        <div className="flex flex-col gap-4 row-start-1 col-start-4">
          <h2 className="text-lg font-semibold">Свяжитесь с нами</h2>
          <div className="flex flex-col gap-2">
            <a href={`mailto:${email}`} className="underline">
              {email}
            </a>
            {phones.map(x => (
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
        {columns.map(x => (
          <div key={x.id} className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold">{x.title}</h2>
            <div className="flex flex-col gap-2">
              {x.items.map(x => (
                <Link key={x.id} href={x.link} passHref>
                  <a>{x.title}</a>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between">
        <span>&copy; {copyright}</span>
        <address>{address}</address>
      </div>
    </BaseScreen>
  );
};

export default Footer;
