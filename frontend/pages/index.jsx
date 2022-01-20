import { CTASection, Layout, SecondSection } from '@/components/promo';

const Home = () => {
  return (
    <Layout>
      <CTASection />
      <SecondSection />
      <div className="h-screen bg-cyan-700">Third section</div>
    </Layout>
  );
};

export default Home;
