import { Outlet, useLocation } from 'react-router-dom';
import Header from './header/header';
import Footer from './footer';

function Layout() {
  const { pathname } = useLocation();

  return (
    <div
      className={`relative grid h-screen grid-cols-1 grid-rows-[auto_1fr_auto]  ${
        pathname === '/find-therapist' ? 'overflow-hidden' : ''
      }`}
    >
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
