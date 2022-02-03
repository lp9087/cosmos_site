import BaseScreen from '../BaseScreen';

const ServicesScreen = ({ title, items }) => {
  return (
    <BaseScreen className="gap-24">
      <h2 className="font-bold text-4xl w-2/3">{title}</h2>
      <ul className="grid grid-cols-2 gap-x-[15%] gap-y-16">
        {items.map(({ id, ...rest }, idx) => (
          <ServiceItem key={id} className={idx % 2 ? '-mt-16' : ''} {...rest} />
        ))}
      </ul>
    </BaseScreen>
  );
};

export default ServicesScreen;

const ServiceItem = ({ className, img, title, description }) => {
  return (
    <li className={`flex flex-col gap-4 ${className}`}>
      {img && (
        <div className="flex justify-center w-1/2 ml-auto py-24 border border-slate-300">
          Image
        </div>
      )}
      <h3 className="font-medium text-3xl -mt-4">{title}</h3>
      <p>{description}</p>
    </li>
  );
};
