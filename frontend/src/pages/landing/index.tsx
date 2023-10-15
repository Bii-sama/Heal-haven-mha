import { Link } from 'react-router-dom';
import pic from '@/assets/landing.png';
import pic1 from '@/assets/landing-1.png';
import pic2 from '@/assets/landing-2.png';
import pic3 from '@/assets/landing-3.png';
import pic4 from '@/assets/landing-4.png';

function Landing() {
  return (
    <section>
      <div className="md:healHavenContainer flex flex-col gap-4 py-6 md:flex-row md:items-center md:justify-between  lg:py-24 ">
        <div className="healHavenContainer flex max-w-xl flex-col items-center gap-4 text-center md:mx-0 md:items-start md:px-0  md:text-left  ">
          <h1 className="text-3xl font-semibold text-healHavenGray900 md:text-4xl">
            Therapy Tailored to{' '}
            <span className="text-healHavenBrand600">You</span>
          </h1>

          <p className="max-w-xl md:text-xl">
            Discover therapists who truly resonate with your unique background
          </p>
          <div className="mt-6 w-full max-w-sm lg:max-w-[190px]">
            <Link
              to="find-therapist"
              className="flex  w-full items-center justify-center rounded-lg bg-healHavenBrand600 px-5 py-3 font-semibold text-white hover:bg-healHavenBrand900"
            >
              Find a therapists
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="healHavenContainer flex items-end gap-1">
            <img
              src={pic4}
              alt="woman in glasses"
              className="aspect-square h-40 w-40"
            />
            <img
              src={pic}
              alt="man in white looking right"
              className="h-[11.3125rem] w-[9.375rem] object-cover md:h-60 md:w-40"
            />
          </div>
          <div className="flex gap-[2px]">
            <img
              src={pic2}
              alt="woman in braids"
              className="h-[152px] w-1/3 object-cover md:h-48 md:w-48"
            />
            <img
              src={pic3}
              alt="woman sitting"
              className="w-1/3  object-cover md:h-60 md:w-40"
            />
            <img
              src={pic1}
              alt="man in glasses"
              className="h-[139px] w-1/3 object-cover md:h-40 md:w-48"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Landing;
