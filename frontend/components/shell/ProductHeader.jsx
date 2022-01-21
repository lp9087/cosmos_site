import { Button } from '..';

const ProductHeader = ({ title, description }) => {
  return (
    <div className="flex flex-col gap-6 h-full ml-32 pl-8 pr-16 pt-10 pb-8 text-white pointer-events-none">
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold">{title}</h1>
        <Button className="pointer-events-auto" text="Заказать презентацию" />
      </div>
      <p className="text-sm font-medium">{description}</p>
    </div>
  );
};

export default ProductHeader;
