import { useState } from 'react';

import { BadgeListScreen } from '../screens';
import { ServicesScreen } from '../screens/promo';
import Layout from '../Layout';
import CTAJumbotron from '../CTAJumbotron';
import ContactModal from '../ContactModal';

import CTASection from './CTASection';
import NewsList from './NewsList';

const PromoPage = ({ services, partners, achievements, news }) => {
  const [modal, setModal] = useState(false);

  return (
    <Layout>
      <CTASection onCTAClick={() => setModal(true)} />
      <ServicesScreen {...services} />
      <CTAJumbotron onCTAClick={() => setModal(true)} />
      <BadgeListScreen {...partners} />
      <BadgeListScreen {...achievements} />
      <NewsList {...news} />
      <ContactModal isOpen={modal} onClose={() => setModal(false)} />
    </Layout>
  );
};

export default PromoPage;
