import BaseScreen from './BaseScreen';

const BadgeListScreen = ({ title, description, items = [], ...rest }) => {
  return (
    <BaseScreen className="gap-16" {...rest}>
      <div className="flex flex-col gap-8">
        <h2 className="font-bold text-4xl">{title}</h2>
        {description && <p className="text-xl">{description}</p>}
      </div>
      <div className="grid grid-cols-4 gap-12">
        {items.map(({ id, ...rest }) => (
          <BadgeItem key={id} {...rest} />
        ))}
      </div>
    </BaseScreen>
  );
};

export default BadgeListScreen;

const BadgeItem = ({ title, description, img }) => {
  return (
    <div className={`flex flex-col gap-4 ${!description ? 'items-center' : ''}`}>
      {img && (
        <div className="flex justify-center w-4/5 py-24 border border-slate-300">
          Image
        </div>
      )}
      {title && (
        <h3 className={`font-medium ${description ? 'text-lg' : ''}`}>{title}</h3>
      )}
      {description && <p>{description}</p>}
    </div>
  );
};
