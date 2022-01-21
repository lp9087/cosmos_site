const CATEGORIES_MOCK = [
  {
    id: 1,
    title: 'Category 1',
    nodes: [
      { id: 1, title: 'First Product' },
      { id: 2, title: 'Long Product Name 2' },
    ],
  },
  {
    id: 2,
    title: 'Category 2',
    nodes: [{ id: 3, title: 'Product 3' }],
  },
  {
    id: 3,
    title: 'Category 3',
  },
];

const Products = () => {
  return (
    <div id="products" className="grid grid-cols-3 min-h-screen bg-sky-700">
      <Categories />
      {/* Products List */}
      {/* or */}
      {/* Product/category Detail */}
    </div>
  );
};

export default Products;

const Categories = () => {
  return (
    <div className="flex flex-col place-items-center gap-16 bg-black bg-opacity-50 text-white">
      <h2 className="mt-8 text-2xl font-semibold">Каталог продуктов</h2>
      <div className="flex flex-col items-start gap-3 w-full px-12">
        {CATEGORIES_MOCK.map(x => (
          <div key={x.id} className="flex flex-col gap-3">
            <h3 className="text-lg font-medium underline underline-offset-4 cursor-pointer">
              {x.title}
            </h3>
            {x.nodes && (
              <div className="flex flex-col gap-1 pl-4">
                {x.nodes.map(x => (
                  <h3 key={x.id} className="font-medium cursor-pointer">
                    {x.title}
                  </h3>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
