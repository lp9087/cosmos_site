import ABOUT_MOCK from '@/constants/mocks/about';
import { BadgeListScreen, RelatedListScreen, TextScreen } from '../screens';

import TestLayout from './TestLayout';
import AboutHeader from './AboutHeader';

const AboutPage = () => {
  const { title, description, about, achievements, events, partners } = ABOUT_MOCK;

  return (
    <TestLayout header={<AboutHeader title={title} description={description} />}>
      <TextScreen className={'!pt-20'} {...about} />
      <BadgeListScreen bg="bg-slate-300" {...achievements} />
      <RelatedListScreen showAllLink="#" displayShowAll {...events} />
      {/* GalleryListScreen */}
      <BadgeListScreen className={'!text-slate-100'} bg="bg-sky-700" {...partners} />
      {/* MapWithContacts */}
      {/* ../../Footer */}
    </TestLayout>
  );
};

export default AboutPage;
