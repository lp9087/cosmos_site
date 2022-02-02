import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <main className="flex flex-col items-center">
      <Navbar />
      <div className="w-full">{children}</div>
    </main>
  );
};

export default Layout;
