import { useEffect, useState } from 'react';

import Navbar from '../Navbar';

const Layout = ({ children }) => {
  const [navbarOpened, setNavbarOpened] = useState(true);

  useEffect(() => {
    const listener = e => {
      const isFirstScreen = e.currentTarget.scrollY < e.currentTarget.innerHeight - 1;

      if (!isFirstScreen) {
        setNavbarOpened(false);
      } else {
        setNavbarOpened(true);
      }
    };

    window.addEventListener('scroll', listener);
    return () => {
      window.removeEventListener('scroll', listener);
    };
  }, []);

  return (
    <div>
      <Navbar opened={navbarOpened} />
      <div
        className={`w-full h-full min-h-screen bg-sky-900
        ${navbarOpened ? 'pl-[360px]' : 'pl-32'}`}
      >
        {children}
      </div>
    </div>
  );
};

export default Layout;
