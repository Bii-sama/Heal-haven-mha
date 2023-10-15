import { Link, useLocation } from 'react-router-dom';
import { Mail } from 'react-feather';
import Logo from '@/assets/logo-footer.png';
import { links } from '../header/header';

function Footer() {
  const { pathname } = useLocation();
  if (pathname === '/find-therapist') {
    return (
      <footer>
        <div className="healHavenContainer flex  items-center justify-between py-12 pb-6 lg:pb-12">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Heal Haven.
          </p>
          <a href="mailto:help@healhaven.com " className="flex gap-[2px]">
            <Mail />
            <span className="text-sm">help@healhaven.com</span>
          </a>
        </div>
      </footer>
    );
  }
  return (
    <footer className="bg-healHavenBrand800">
      <div className="healHavenContainer flex flex-col gap-12 py-12 pb-6 lg:flex-row lg:items-center lg:justify-between lg:pb-12">
        <nav className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-[2.625rem]">
          <Link to="/">
            <img src={Logo} alt="heal haven logo" />
          </Link>

          <ul className="flex flex-col gap-1 lg:flex-row lg:items-center lg:gap-8">
            {links.map((link) => (
              <li key={`footer-${link.name}`}>
                <Link
                  to={link.path}
                  className="text-base font-semibold  text-healHavenBrand200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <p className="text-healHavenBrand300">
          &copy; {new Date().getFullYear()} Heal Haven. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
