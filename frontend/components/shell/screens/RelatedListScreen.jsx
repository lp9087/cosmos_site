import styled from 'styled-components';
import Image from 'next/image';
import { Award } from 'react-feather';

import { Screen } from '../..';

const RelatedListScreen = ({
  className,
  container,
  title,
  content = [],
  displayShowAll = false,
  showAllLink,
  onShowAll,
}) => {
  return (
    <Screen className={`gap-16 text-gray-700 ${className}`} container={container}>
      {title && <h2 className="self-center font-bold text-3xl">{title}</h2>}
      <div className="flex flex-col gap-6">
        <div className="flex flex-wrap justify-evenly gap-x-8 gap-y-16 py-16">
          {content.map(x => (
            <ItemCard key={x.id} {...x} />
          ))}
        </div>
        {displayShowAll && (
          <a
            className="btn btn-primary w-1/4 self-center"
            href={showAllLink}
            onClick={onShowAll}
          >
            Посмотреть все
          </a>
        )}
      </div>
    </Screen>
  );
};

export default RelatedListScreen;

const ItemCard = ({ title, short_description, link, img }) => {
  return (
    <a
      href={link}
      className="flex flex-col basis-1/4 gap-4 p-1 rounded-xl hover:bg-slate-300 transition-colors cursor-pointer"
    >
      <div className="flex rounded-xl overflow-hidden">
        <Image src={img} alt={title} />
      </div>
      <div className="flex flex-col gap-2 px-2 pb-3">
        <h3 className="font-bold text-lg">{title}</h3>
        {short_description && <p>{short_description}</p>}
      </div>
    </a>
  );
};
