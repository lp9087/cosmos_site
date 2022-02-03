import { ArrowLeft, ArrowRight } from 'react-feather';

import { BaseScreen } from '../screens';

const NewsList = ({ items = [] }) => {
  return (
    <BaseScreen className="gap-16">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-4xl">Новости</h2>
        <div className="flex gap-4">
          <button className="btn btn-sm btn-outline">
            <ArrowLeft />
          </button>
          <button className="btn btn-sm btn-outline">
            <ArrowRight />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-6">
        {items.map(({ id, ...rest }) => (
          <NewsItem key={id} {...rest}>
            News
          </NewsItem>
        ))}
      </div>
    </BaseScreen>
  );
};

export default NewsList;

const NewsItem = ({ title, img }) => {
  return (
    <div className="flex flex-col items-center gap-4">
      {img && (
        <div className="relative flex flex-col justify-center items-center w-full py-48 border border-slate-300">
          BG Image
          {title && <h3 className="absolute bottom-4 left-4">{title}</h3>}
        </div>
      )}
    </div>
  );
};
