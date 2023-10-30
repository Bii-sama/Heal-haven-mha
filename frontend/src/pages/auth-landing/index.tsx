import { Link } from 'react-router-dom';

import bgImg from '@/assets/auth-image.png';

function AuthLanding() {
  return (
    <section>
      <div className="healHavenContainer  flex flex-col items-center gap-8 py-16 lg:flex-row">
        <div className="flex flex-col items-center text-center lg:flex-1 lg:items-start lg:text-left">
          <h1 className="text-4xl font-semibold -tracking-[0.72px] text-healHavenGray700 lg:text-6xl lg:leading-[4.5rem]">
            Welcome to <br /> Heal Haven
          </h1>
          <p className="mb-8 mt-4 max-w-md lg:mb-12 lg:mt-6 lg:text-lg">
            We&apos;re here to connect you with therapists who understand your
            unique journey.
          </p>
          <Link
            to="find-therapist"
            className="flex w-full max-w-sm items-center justify-center rounded-lg bg-healHavenBrand600 px-5 py-3 font-semibold text-white hover:bg-healHavenBrand900 lg:max-w-[190px]"
          >
            Find a therapist
          </Link>
        </div>
        <div className="hidden lg:block lg:flex-1">
          <img src={bgImg} alt="" />
        </div>
      </div>
    </section>
  );
}

export default AuthLanding;
