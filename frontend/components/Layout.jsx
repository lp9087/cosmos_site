import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <main className="flex flex-col items-center">
      <Navbar />
      <div className="w-full -mt-16">{children}</div>
      <Footer />
    </main>
  );
};

export default Layout;
