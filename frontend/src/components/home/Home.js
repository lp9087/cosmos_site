import { Layout } from '../layout';

import { Hero } from './Hero';
import { Products } from './Products';
import { Services } from './Services';
import { Advantages } from './Advantages';
import { About } from './About';
import { News } from './News';
import { Partners } from './Partners';

export const Home = () => {
  return (
    <Layout>
      <Hero />
      <Products />
      <Services />
      <Advantages />
      <About />
      <News />
      <Partners />
    </Layout>
  );
};
