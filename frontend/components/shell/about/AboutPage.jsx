import ABOUT_MOCK from '@/constants/mocks/about';
import { Layout } from '..';
import { BadgeListScreen, RelatedListScreen, TextScreen } from '../screens';

import AboutHeader from './AboutHeader';

const AboutPage = () => {
  const { title, description, about, achievements, events, partners } = ABOUT_MOCK;

  return (
    <Layout header={<AboutHeader title={title} description={description} />}>
      <TextScreen className={'!pt-20'} {...about} />
      <BadgeListScreen container="bg-slate-300" {...achievements} />
      <RelatedListScreen showAllLink="#" displayShowAll {...events} />
      {/* GalleryListScreen */}
      <BadgeListScreen
        className={'!text-slate-100'}
        container="bg-sky-700"
        {...partners}
      />
      {/* MapWithContacts */}
      {/* ../../Footer */}
    </Layout>
  );
};

export default AboutPage;
