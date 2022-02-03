import BaseScreen from './BaseScreen';

const BadgeListScreen = ({ title, description, items = [] }) => {
  return (
    <BaseScreen className="gap-16">
      <div className="flex flex-col gap-8">
        <h2 className="font-bold text-4xl">{title}</h2>
        {description && <p className="text-2xl">{description}</p>}
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

const BadgeItem = ({ title, img }) => {
  return (
    <div className="flex flex-col items-center gap-4">
      {img && (
        <div className="flex justify-center w-4/5 py-24 border border-slate-300">
          Image
        </div>
      )}
      {title && <h3>{title}</h3>}
    </div>
  );
};
