import { CTASection, Layout, About, Products } from '@/components/promo';

const Home = () => {
  return (
    <Layout>
      <CTASection />
      <About />
      <Products />
    </Layout>
  );
};

export default Home;
