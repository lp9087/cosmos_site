import Link from 'next/link';

import BaseScreen from './BaseScreen';

const BadgeListScreen = ({ title, description, items = [], ...rest }) => {
  return (
    <BaseScreen className="gap-16" {...rest}>
      <div className="flex flex-col gap-8">
        <h2 className="font-bold text-4xl">{title}</h2>
        {description && <p className="text-xl">{description}</p>}
      </div>
      <div className="flex flex-wrap justify-center gap-12">
        {items.map(({ id, ...rest }) => (
          <BadgeItem key={id} {...rest} />
        ))}
      </div>
    </BaseScreen>
  );
};

export default BadgeListScreen;

const BadgeItem = ({ title, description, img, link }) => {
  const content = (
    <>
      {img && (
        <div className="flex justify-center w-full py-24 border border-slate-300">
          Image
        </div>
      )}
      {title && (
        <h3 className={`font-medium ${description ? 'text-lg' : ''}`}>{title}</h3>
      )}
      {description && <p>{description}</p>}
    </>
  );
  const containerStyles = `basis-1/5 flex-1 flex flex-col gap-4
    ${!description ? 'items-center' : ''}`;

  return link ? (
    <Link href={link} passHref>
      <a
        className={`${containerStyles}
        ${link ? 'hover:bg-slate-200 cursor-pointer rounded-xl px-8 py-6' : ''}`}
      >
        {content}
      </a>
    </Link>
  ) : (
    <div className={`${containerStyles} ${!description ? 'items-center' : ''}`}>
      {content}
    </div>
  );
};
