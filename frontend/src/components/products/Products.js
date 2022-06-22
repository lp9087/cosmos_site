import Link from 'next/link';

import { PRODUCTS_MOCK } from '../../constants/products';
import { Layout } from '../layout';
import { PageHeader } from '..';
import Image from 'next/image';

export const Products = () => {
  const TITLE = 'Экспертиза проектной документации и результатов инженерных изысканий';

  return (
    <Layout>
      <PageHeader
        title="Наши IT-решения"
        breadcrumbs={[{ title: 'Главная', link: '/' }, { title: 'Решения' }]}
      />
      <div className="container grid min-h-screen grid-cols-3 px-24 pt-40 mx-auto gap-9">
        <div className="flex flex-col h-[550px] border-2 border-[#c4c4c4]">
          <Link href="/products/slug">
            <a className="relative shrink-0 z-0 flex items-end h-40 px-8 py-3 -mx-0.5 -mt-0.5">
              <Image
                className="absolute -z-10"
                src="/assets/products/list/image1.png"
                alt={TITLE}
                layout="fill"
              />
              <h3 className="text-[22px] !leading-none font-medium text-white">
                {TITLE}
              </h3>
            </a>
          </Link>
          <div className="flex flex-col items-center justify-between px-5 pt-4 pb-12 grow">
            <div className="flex flex-col gap-2 !leading-tight font-medium">
              <span>— Веб-сервис «Экспертиза – личный кабинет Заявителя»</span>
              <span>
                — Подсистема «XML - схема Заключений» к Веб-сервису «Экспертиза-Личный
                кабинет Заявителя»
              </span>
              <span>
                — Подсистема «Интеграции с Государственной Информационной Системой
                «Единый государственный реестр заключений» (ГИС ЕГРЗ)
              </span>
              <span>— КУПР-Экспертиза</span>
            </div>
            <Link href="/products/slug">
              <a className="py-2 text-sm font-semibold text-white px-7 bg-primary rounded-3xl">
                Подробнее
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};
