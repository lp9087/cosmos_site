import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'react-feather';

import { BaseScreen } from '../screens';

const NewsList = ({ items = [] }) => {
  return (
    <BaseScreen className="gap-16">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-4xl">Новости</h2>
        <div className="flex gap-4">
          <a href="#" className="btn btn-link text-primary">
            Посмотреть все
          </a>
          {/* <button className="btn btn-sm btn-outline">
            <ArrowLeft />
          </button>
          <button className="btn btn-sm btn-outline">
            <ArrowRight />
          </button> */}
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

const NewsItem = ({ title, image, link = '#', dt_add }) => {
  return (
    <Link href={link} passHref>
      <a className="flex flex-col items-center gap-4">
        <div
          className="relative flex flex-col justify-center items-center
        w-full h-96 border rounded-lg overflow-hidden
      border-slate-300 bg-slate-900"
        >
          {image && (
            <Image
              src={image}
              alt={title}
              layout="fill"
              className="object-cover opacity-40 hover:opacity-60 transition-opacity"
            />
          )}
          {title && (
            <h3 className="absolute left-4 right-4 bottom-4 text-white text-xl font-semibold">
              {title}
            </h3>
          )}
          <p className="absolute top-4 right-4 text-white text-xl font-medium">
            {new Date(dt_add).toLocaleDateString()}
          </p>
        </div>
      </a>
    </Link>
  );
};
