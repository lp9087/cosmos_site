import { Navbar, ParticlesBG } from '..';

const Layout = ({ children, header }) => {
  return (
    <div className="h-screen overflow-hidden">
      <div className="w-full h-full bg-sky-900 overflow-auto">
        <Navbar opened={false} />
        <div className="relative h-48 z-[1]">
          <ParticlesBG />
          {header}
        </div>
        {children}
      </div>
    </div>
  );
};

export default Layout;
