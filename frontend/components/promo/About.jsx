import Link from 'next/link';

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
    <div id="about" className="grid grid-cols-8 gap-6 h-screen px-8 py-6 bg-slate-200">
      <div className="col-span-5 flex flex-col gap-6 items-center">
        <h2 className="text-2xl font-semibold">О компании</h2>
        <div>
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
            lectus rhoncus eu. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Nulla pulvinar commodo ullamcorper.
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas. Vivamus imperdiet massa quis ligula aliquam, nec lacinia
            massa egestas. Cras sed dui nec eros pharetra bibendum. Quisque tincidunt
            massa at vehicula aliquet. Proin placerat lacus nec maximus dignissim. Ut
            condimentum diam vitae ipsum molestie tempor. Maecenas faucibus ullamcorper
            nibh non scelerisque. In placerat sodales risus. Praesent venenatis luctus
            erat, et tincidunt odio ultricies ut. Etiam in ultrices diam, ut porttitor
            diam. Morbi ultricies sem lectus, quis sagittis risus vulputate quis. Cras
            gravida condimentum lacus eget varius. In nunc erat, dignissim ac quam in,
            fermentum aliquam enim. Etiam ac felis nisi. Proin lorem libero, tempor
            congue facilisis quis, finibus id velit. Orci varius natoque penatibus et
            magnis dis parturient montes, nascetur ridiculus mus. Aenean non nisl id
            justo viverra semper. Nunc et placerat est, in viverra nulla. Integer
            tincidunt in ex in sagittis.
          </span>
        </div>
      </div>
      <div className="col-span-3 flex flex-col gap-6 items-center">
        <h2 className="text-2xl font-semibold">Последние новости</h2>
        <div className="flex flex-col gap-2">
          {NEWS_MOCK.map(x => (
            <NewsCard key={x.id} {...x} />
          ))}
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
