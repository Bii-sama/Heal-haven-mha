import { useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';

import Logo from '@/assets/logo-header.svg';
import { useAuth } from '@/hooks/useAuth';
import HeaderMenu from './header-menu';
import MenuButton from './menu-button';

export const links = [
  {
    name: 'Home',
    path: '/',
  },
  // {
  //   name: 'About us',
  //   path: '/about',
  // },
  {
    name: ' Find a Therapist',
    path: '/find-therapist',
  },
  // {
  //   name: 'For Practitioners',
  //   path: '/practitioners',
  // },
  // {
  //   name: 'Contact us',
  //   path: '/contact-us',
  // },
];

function Index() {
  const [openMenu, setOpenMenu] = useState(false);
  const { pathname } = useLocation();
  const { token, setToken } = useAuth();
  const navigate = useNavigate();

  const logOut = () => {
    setToken(null);
    localStorage.removeItem('healHavenToken');
    navigate('/');
  };

  if (pathname.includes('find-therapist')) {
    return (
      <header>
        <nav className="healHavenContainer relative z-10 flex items-center justify-between py-5  md:py-6">
          <Link to="/" className="flex items-center gap-[0.375rem]">
            <img src={Logo} alt="logo" />
            <span className="text-2xl font-bold text-healHavenGray800">
              Heal Haven
            </span>
          </Link>
        </nav>
      </header>
    );
  }
  return (
    <header>
      <nav className="healHavenContainer flex items-center justify-between py-5  md:py-6">
        <div className="relative z-10 flex items-center gap-10">
          <Link to="/" className="flex items-center gap-[0.375rem]">
            <span>
              <img src={Logo} alt="heal haven logo" />
            </span>
            <span className="text-2xl font-bold text-healHavenGray800">
              Heal Haven
            </span>
          </Link>
          <ul className="hidden items-center gap-8 lg:flex">
            {links.map((link) => (
              <li key={`sesktop-${link.name}`}>
                <NavLink
                  to={link.path}
                  className={({ isActive, isPending }) =>
                    // eslint-disable-next-line no-nested-ternary
                    isPending
                      ? 'font-semibold text-gray-600'
                      : isActive
                      ? 'font-semibold text-healHavenBrand600'
                      : 'text-base font-semibold'
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden items-center gap-3 lg:flex">
          {!token ? (
            <>
              <Link
                to="/auth/login"
                className="flex items-center justify-center rounded-lg bg-white px-[1.125rem] py-[0.625rem] text-healHavenBrand600 shadow hover:bg-slate-300"
              >
                Log in
              </Link>
              <Link
                to="/auth/register"
                className="flex items-center justify-center rounded-lg bg-healHavenBrand600 px-[1.125rem] py-[0.625rem] text-white shadow hover:bg-healHavenBrand900"
              >
                Sign up
              </Link>{' '}
            </>
          ) : (
            <button
              onClick={logOut}
              className="flex items-center justify-center rounded-lg bg-white px-[1.125rem] py-[0.625rem] text-healHavenBrand600 shadow hover:bg-slate-300"
            >
              Log Out
            </button>
          )}
        </div>
        <div className="relative z-10 block lg:hidden">
          <MenuButton openMenu={openMenu} setOpenMenu={setOpenMenu} />
        </div>
      </nav>
      <HeaderMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
    </header>
  );
}

export default Index;
