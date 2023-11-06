import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { links } from './header';

type HeaderMenuProps = {
  openMenu: boolean;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

function HeaderMenu({ openMenu, setOpenMenu }: HeaderMenuProps) {
  const { token, setToken } = useAuth();
  const navigate = useNavigate();

  const logOut = () => {
    setToken(null);
    localStorage.removeItem('healHavenToken');
    navigate('/');
  };
  return (
    <ul
      className={`fixed inset-0 z-[5] space-y-4 bg-white pt-36 lg:hidden ${
        openMenu ? 'translate-x-0' : 'translate-x-full'
      } transition-transform duration-300`}
    >
      {' '}
      {links.map((link) => {
        return (
          <li
            key={`mobile-${link.name}`}
            className="text-center text-2xl font-semibold capitalize"
          >
            <NavLink
              to={link.path}
              className={({ isActive, isPending }) =>
                // eslint-disable-next-line no-nested-ternary
                isPending
                  ? ' text-gray-600'
                  : isActive
                  ? ' text-healHavenBrand600'
                  : ''
              }
              onClick={() => setOpenMenu(false)}
            >
              {link.name}
            </NavLink>
          </li>
        );
      })}
      {!token ? (
        <>
          <li className="mt-6 flex justify-center">
            <Link
              to="/auth/login"
              className="flex w-[190px] items-center justify-center rounded-lg bg-white px-[1.125rem] py-[0.625rem] text-healHavenBrand600 shadow hover:bg-slate-300"
            >
              Log in
            </Link>
          </li>
          <li className="flex justify-center">
            <Link
              to="/auth/register"
              className="flex w-[190px] items-center justify-center rounded-lg bg-healHavenBrand600 px-[1.125rem] py-[0.625rem] text-white shadow hover:bg-healHavenBrand900"
            >
              Sign up
            </Link>
          </li>
        </>
      ) : (
        <li className="flex justify-center">
          <button
            onClick={logOut}
            className="flex items-center justify-center rounded-lg bg-white px-[1.125rem] py-[0.625rem] text-healHavenBrand600 shadow hover:bg-slate-300"
          >
            Log Out
          </button>
        </li>
      )}
    </ul>
  );
}

export default HeaderMenu;
