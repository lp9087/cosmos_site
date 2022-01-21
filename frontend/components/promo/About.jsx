import styled from 'styled-components';
import Link from 'next/link';
import { Calendar } from 'react-feather';

const NEWS_MOCK = [
  {
    id: 1,
    title: 'Title 1',
    short_content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse posuere
      magna sit amet sapien malesuada placerat.`,
    link: '#',
  },
  {
    id: 2,
    title: 'Title 2',
    short_content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse posuere
      magna sit amet sapien malesuada placerat.`,
    link: '#',
  },
  {
    id: 3,
    title: 'Title 3',
    short_content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse posuere
      magna sit amet sapien malesuada placerat.`,
    link: '#',
  },
];

const About = () => {
  return (
    <div
      id="about"
      className="grid grid-cols-8 gap-6 gap-y-16 min-h-screen px-8 py-6 pb-32 bg-slate-200"
    >
      <div className="col-span-5 flex flex-col gap-8 items-center">
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-semibold text-center">О компании</h2>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse posuere
            magna sit amet sapien malesuada placerat. Curabitur lorem risus, porta eget
            vehicula non, consequat sit amet purus. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Aliquam erat volutpat. Pellentesque gravida
            lorem nec ligula porta auctor id eleifend orci. Aenean vel tortor et elit
            volutpat volutpat. In volutpat placerat erat et pretium. Nullam scelerisque
            erat sit amet quam eleifend tincidunt. Aliquam aliquet a risus eu maximus.
            Fusce eget iaculis odio. Aenean auctor nunc sed leo porttitor rhoncus.
            Vivamus bibendum a elit vitae aliquet. Curabitur eget fringilla justo, a
            elementum dolor. Curabitur non nibh vel lectus egestas vestibulum eu a risus.
            Praesent porta nisl pulvinar turpis malesuada tincidunt. Nunc justo erat,
            tristique vitae semper sed, eleifend vitae neque. Ut aliquet, mauris ut
            pretium feugiat, libero justo eleifend ligula, vel auctor velit tortor
            rhoncus turpis. Nulla facilisi. Nullam tincidunt tellus est, vel venenatis
            lectus rhoncus eu.
          </span>
        </div>
      </div>
      <div className="col-span-3 flex flex-col gap-6">
        <h2 className="text-2xl font-semibold">Последние новости</h2>
        <div className="flex flex-col gap-2">
          {NEWS_MOCK.map(x => (
            <NewsCard key={x.id} {...x} />
          ))}
        </div>
      </div>
      <div className="col-span-full flex flex-col gap-12 w-full">
        <h2 className="text-2xl font-semibold text-center">Наши преимущества</h2>
        <div className="flex w-full justify-evenly">
          <AdvantageItem icon="test" text="20 лет работы" />
          <AdvantageItem icon="test" text="40 разработанных решений" />
          <AdvantageItem icon="test" text="100+ клиентов" />
        </div>
        <div className="flex w-full justify-evenly">
          <AdvantageItem icon="test" text="60 регионов" />
          <AdvantageItem icon="test" text="80 звезд" />
        </div>
      </div>
    </div>
  );
};

export default About;

const NewsCard = ({ title, short_content, link }) => {
  return (
    <Link href={link} passHref>
      <a
        className="flex flex-col items-start px-6 py-4 bg-slate-300 hover:bg-slate-400 border-slate-600
      rounded-lg cursor-pointer transition-colors"
      >
        <span className="text-lg font-semibold">{title}</span>
        <span>{short_content}</span>
      </a>
    </Link>
  );
};

const AdvantageContainer = styled.div`
  &:hover .icon-container {
    --tw-bg-opacity: 1;

    svg {
      opacity: 1;
    }
  }
`;
const AdvantageItem = ({ text }) => {
  return (
    <AdvantageContainer className="flex flex-col gap-4 items-center max-w-[200px]">
      <div className="icon-container flex justify-center items-center w-16 h-16 bg-slate-400 bg-opacity-50 rounded-full transition-colors">
        <Calendar className="transition-opacity" color="#000" opacity={0.75} size={32} />
      </div>
      <span className="text-md font-medium text-center">{text}</span>
    </AdvantageContainer>
  );
};