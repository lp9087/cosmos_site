const ProductHeader = ({ title, description }) => {
  return (
    <div className="flex flex-col gap-6 h-full ml-32 pl-8 pr-16 pt-10 pb-8 text-white">
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold">{title}</h1>
        <a
          href="#"
          className="px-6 py-2 text-lg font-medium rounded-3xl
          bg-emerald-600 hover:bg-emerald-700 transition-colors"
        >
          Заказать презентацию
        </a>
      </div>
      <p className="text-sm font-medium">{description}</p>
    </div>
  );
};

export default ProductHeader;
