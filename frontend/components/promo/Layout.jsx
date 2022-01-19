import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="pl-[360px] w-full h-full min-h-screen">{children}</div>
    </div>
  );
};

export default Layout;
