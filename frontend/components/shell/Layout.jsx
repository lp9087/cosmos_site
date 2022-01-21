import { Navbar, ParticlesBG } from '..';

const Layout = ({ children, header }) => {
  return (
    <div>
      <Navbar opened={false} />
      <div className="relative h-48 z-[1]">
        <ParticlesBG />
        {header}
      </div>
      <div className="w-full h-full bg-sky-900 pl-32">
        <div className="w-full min-h-screen bg-gray-100">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
