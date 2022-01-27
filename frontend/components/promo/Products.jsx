import Image from 'next/image';
import Link from 'next/link';

import ProductImage from '@/assets/img/AboutPic1.jpg';

const Products = () => {
  return (
    <div className="flex flex-col gap-12 px-16 py-32 bg-slate-300">
      <h2 className="text-2xl font-semibold text-center">Наши решения</h2>
      <div className="grid grid-cols-3 gap-y-8 gap-x-6">
        <ProductCard
          title="Решение 1"
          short_description="Очень короткое описание технического решения"
          link="#"
        />
        <ProductCard
          title="Решение 2"
          short_description="Очень короткое описание технического решения"
          link="#"
        />
        <ProductCard
          title="Решение 3"
          short_description="Очень короткое описание технического решения"
          link="#"
        />
        {/* Products List */}
        {/* or */}
        {/* Product/category Detail */}
      </div>
    </div>
  );
};

export default Products;

const ProductCard = ({ title, short_description, link }) => {
  return (
    <Link href={link} passHref>
      <a
        className="min-h-[150px] bg-slate-200 hover:bg-slate-400 border-slate-600
          rounded-lg cursor-pointer transition-colors overflow-hidden"
      >
        <figure className="h-[200px] w-full overflow-hidden">
          <Image src={ProductImage} alt={title} />
        </figure>
        <div className="flex flex-col justify-center gap-4 py-6 px-8">
          <h3 className="text-xl font-semibold">{title}</h3>
          <span>{short_description}</span>
        </div>
      </a>
    </Link>
  );
};
