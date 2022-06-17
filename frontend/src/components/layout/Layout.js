import Head from 'next/head';

import { Footer } from './Footer';
import { Header } from './Header';

export const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Космос 2</title>
      </Head>

      <Header />
      <main className="relative pt-20 2xl:pt-[120px] overflow-hidden">
        <div className="absolute w-full h-full -mt-20 2xl:-mt-[120px] bg-[#f5f5f5] -z-50"></div>
        {children}
      </main>
      <Footer />
    </>
  );
};
