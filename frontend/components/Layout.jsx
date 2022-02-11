import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({
  children,
  className,
  contacts,
  products,
  productCategories,
  services,
}) => {
  return (
    <main className="flex flex-col items-center">
      <Navbar contacts={contacts} />
      <div className={`w-full -mt-16 ${className ?? ''}`}>{children}</div>
      <Footer
        contacts={contacts}
        products={products}
        productCategories={productCategories}
        services={services}
      />
    </main>
  );
};

export default Layout;
