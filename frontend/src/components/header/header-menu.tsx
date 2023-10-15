import { NavLink } from 'react-router-dom';
import { links } from './header';

type HeaderMenuProps = {
  openMenu: boolean;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

function HeaderMenu({ openMenu, setOpenMenu }: HeaderMenuProps) {
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
    </ul>
  );
}

export default HeaderMenu;
