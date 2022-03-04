import type { AppProps } from 'next/app';
import Head from 'next/head';
import { SWRConfig } from 'swr';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        fetcher: (resource, init) => fetch(resource, init).then(res => res.json()),
      }}
    >
      <Component {...pageProps} />
      <ToastContainer />
    </SWRConfig>
  );
}

export default MyApp;
