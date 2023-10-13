import { Outlet } from 'react-router-dom';
import Header from './header/header';

function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
