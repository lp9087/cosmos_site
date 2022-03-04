import Head from 'next/head';

import Layout from '../Layout';
import { BaseScreen } from '../screens';

import RegionsMap from './RegionsMap';

const AboutPage = ({ contacts, products, productCategories, services }) => {
  return (
    <Layout
      contacts={contacts}
      products={products}
      productCategories={productCategories}
      services={services}
    >
      <Head>
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v0.51.0/mapbox-gl.css"
          rel="stylesheet"
        />
      </Head>
      <BaseScreen>
        <div className="container flex flex-col gap-6">
          <h1 className="text-4xl font-semibold">Some large text</h1>
          <p className="w-3/5">
            Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum lorem ipsum ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum
          </p>
        </div>
      </BaseScreen>
      <RegionsMap />
    </Layout>
  );
};

export default AboutPage;
