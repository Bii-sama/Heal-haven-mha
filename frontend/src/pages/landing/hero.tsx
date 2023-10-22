import { Link } from 'react-router-dom';
import pic from '@/assets/landing.png';
import pic1 from '@/assets/landing-1.png';
import pic2 from '@/assets/landing-2.png';
import pic3 from '@/assets/landing-3.png';
import pic4 from '@/assets/landing-4.png';

import ellipse from '@/assets/landing-ellipse.png';
import handDrawn from '@/assets/landing-hand-drawn.png';
import highlight from '@/assets/landing-hightlight.png';
import ellipsePurple from '@/assets/landing-ellipse-purple.png';

function Hero() {
  return (
    <section className="bg-gradient-to-r from-[#f4ebff] from-0% via-[#fdf2fa] via-[47.92%] to-[#fff6ed] to-[91.67%]">
      <div className="lg:healHavenContainer flex  flex-col items-center gap-[3.75rem] pb-[5.25rem] pt-6 lg:flex-row  lg:justify-between lg:gap-[5.5rem]  lg:pb-44 lg:pt-24 ">
        <div className="healHavenContainer flex max-w-xl flex-col items-center gap-4 text-center lg:mx-0 lg:items-start lg:px-0  lg:text-left  ">
          <h1 className="text-3xl font-semibold text-healHavenGray900 lg:text-4xl">
            Therapy Tailored to{' '}
            <span className="text-healHavenBrand600">You</span>
          </h1>

          <p className="max-w-xl lg:text-xl">
            Discover therapists who truly resonate with your unique background
          </p>
          <div className="mt-6 w-full max-w-sm lg:max-w-[190px]">
            <Link
              to="find-therapist"
              className="flex  w-full items-center justify-center rounded-lg bg-healHavenBrand600 px-5 py-3 font-semibold text-white hover:bg-healHavenBrand900"
            >
              Find a therapist
            </Link>
          </div>
        </div>
        <div className="relative flex flex-col gap-2">
          <img
            src={ellipse}
            alt=""
            className="absolute -top-9 right-10 h-[6.25rem] w-[6.25rem]  lg:-top-14 lg:h-auto lg:w-auto"
          />
          <img
            src={handDrawn}
            alt=""
            className="absolute -bottom-2 left-11 z-[1] h-[3.25rem] w-[6.8125rem] lg:-bottom-[4.5rem] lg:left-0 lg:h-auto lg:w-auto"
          />
          <img
            src={highlight}
            alt=""
            className="absolute right-2 top-32  z-[4] h-[2.375rem] w-[2.75rem] lg:top-48 lg:h-auto lg:w-auto"
          />
          <img
            src={ellipsePurple}
            alt=""
            className="absolute -bottom-2 -left-3 h-[6.375rem] w-[6.25rem] lg:h-auto lg:w-auto"
          />
          <div className="healHavenContainer relative flex items-end gap-1">
            <img
              src={pic4}
              alt="woman in glasses"
              className="h-[7.4375rem] w-[6.625rem] object-cover lg:h-40 lg:w-40"
            />
            <img
              src={pic}
              alt="man in white looking right"
              className="h-[9.375rem] w-[6.5625rem] object-cover lg:h-60 lg:w-40"
            />
          </div>
          <div className="healHavenContainer relative z-[3] flex  gap-1">
            <img
              src={pic2}
              alt="woman in braids"
              className="h-[7.75rem]  w-1/3  object-cover lg:h-48 "
            />
            <img
              src={pic3}
              alt="woman sitting"
              className="h-40 w-1/3  object-cover lg:h-60 "
            />
            <img
              src={pic1}
              alt="man in glasses"
              className="h-[117px] w-1/3 object-cover lg:h-40 "
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
