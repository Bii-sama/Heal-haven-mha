import { Outlet } from 'react-router-dom';
import Header from './header/header';
import Footer from './footer';

function Layout() {
  return (
    <div className="relative grid h-screen grid-cols-1 grid-rows-[auto_1fr_auto] overflow-x-hidden">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
