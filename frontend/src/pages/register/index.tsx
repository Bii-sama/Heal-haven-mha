import Logo from '@/assets/logo-header.svg';
import { Mail } from 'react-feather';
import { Link, useLocation } from 'react-router-dom';
import CreateAccount from './create-account';
import Login from './Login';

function Register() {
  const { pathname } = useLocation();

  // let renderImg: string = genderImg;

  const renderFormContent = (step: string) => {
    switch (step) {
      case 'register':
        //   renderImg = genderImg;
        return <CreateAccount />;
      case 'login':
        //   renderImg = beliefImg;
        return <Login />;

      default:
        //   renderImg = genderImg;
        return <CreateAccount />;
    }
  };

  const getPath = pathname.split('/')[2];
  console.log(pathname, getPath);
  return (
    <section className="md:flex">
      <div className="grid h-screen grid-rows-[auto_1fr_auto] md:flex-1">
        <header>
          <nav className="relative z-10 flex items-center justify-between px-4 py-5 md:py-6 md:pl-28  md:pr-8">
            <Link to="/" className="flex items-center gap-[0.375rem]">
              <img src={Logo} alt="logo" />
              <span className="text-2xl font-bold text-healHavenGray800">
                Heal Haven
              </span>
            </Link>
          </nav>
        </header>
        <div className="flex max-w-xl flex-col gap-6 px-4 py-6 md:gap-8 md:py-[7.75rem] md:pl-40 md:pr-8 ">
          {renderFormContent(getPath)}
        </div>
        <footer>
          <div className="flex items-center  justify-between px-4  py-12 pb-7 md:pl-28 md:pr-8 lg:pb-12">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Heal Haven.
            </p>
            <a href="mailto:help@healhaven.com " className="flex gap-[2px]">
              <Mail />
              <span className="text-sm">help@healhaven.com</span>
            </a>
          </div>
        </footer>
      </div>
      <div className="hidden h-screen flex-col items-center justify-center gap-8 bg-healHavenGray50 md:flex md:flex-1 md:pt-[18.5rem]">
        <blockquote className="max-w-md text-center text-3xl text-healHavenGray700">
          Heal Haven helped me find a therapist who truly understands my
          cultural background. It's been a game-changer for my mental health
          journey.
        </blockquote>
        <div className="flex flex-col items-center gap-4">
          <img
            src="https://images.unsplash.com/photo-1616325629936-99a9013c29c6?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXNpYW4lMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D"
            className="h-16 w-16 rounded-full object-cover"
            alt="Candace Wu"
          />
          <p className="text-center text-lg text-healHavenGray900">
            Candace Wu
          </p>
        </div>
      </div>
    </section>
  );
}

export default Register;
