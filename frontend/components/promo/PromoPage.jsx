import PROMO_MOCK from '@/constants/mocks/promo';
import Layout from '../Layout';
import { BadgeListScreen } from '../screens';
import { ServicesScreen } from '../screens/promo';

import CTASection from './CTASection';
import CTAJumbotron from './CTAJumbotron';
import NewsList from './NewsList';

const PromoPage = () => {
  const { services, partners, achievements, news } = PROMO_MOCK;

  return (
    <Layout>
      <CTASection />
      <ServicesScreen {...services} />
      <CTAJumbotron />
      <BadgeListScreen {...partners} />
      <BadgeListScreen {...achievements} />
      <NewsList {...news} />
    </Layout>
  );
};

export default PromoPage;
