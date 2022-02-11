import Image from 'next/image';
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

const BadgeItem = ({ title, description, image, link }) => {
  console.log(image);
  const content = (
    <>
      {image && (
        <div className="flex justify-center relative h-48 w-full">
          <Image
            src={image}
            alt={title}
            layout="fill"
            className="object-contain w-full relative h-auto"
          />
        </div>
      )}
      {title && (
        <h3 className={`font-medium ${description ? 'text-lg' : ''}`}>
          {title}
        </h3>
      )}
      {description && <p>{description}</p>}
    </>
  );
  const containerStyles = `basis-1/5 flex-1 flex flex-col gap-4 justify-center
    ${!description ? 'items-center' : ''}`;

  return link ? (
    <Link href={link} passHref>
      <a
        className={`${containerStyles} transition-colors
        ${
          link ? 'hover:bg-slate-200 cursor-pointer rounded-xl px-8 py-6' : ''
        }`}
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
