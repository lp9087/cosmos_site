import { CTASection, Layout, About } from '@/components/promo';

const Home = () => {
  return (
    <Layout>
      <CTASection />
      <About />
      {/* <div className="h-screen bg-cyan-700">Third section</div> */}
    </Layout>
  );
};

export default Home;
