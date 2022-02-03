import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children, className }) => {
  return (
    <main className="flex flex-col items-center">
      <Navbar />
      <div className={`w-full -mt-16 ${className ?? ''}`}>{children}</div>
      <Footer />
    </main>
  );
};

export default Layout;
