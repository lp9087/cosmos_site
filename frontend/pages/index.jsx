import PROMO_MOCK from '@/constants/mocks/promo';
import { PromoPage } from '@/components/promo';

export default PromoPage;

export async function getStaticProps() {
  const { services, partners, achievements, news } = PROMO_MOCK;

  return {
    props: {
      services,
      partners,
      achievements,
      news,
    },
    revalidate: 3600, // One hour
  };
}
