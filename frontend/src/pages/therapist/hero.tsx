import { ArrowLeft } from 'react-feather';

import ScheduleCallBtn from '@/components/button';

import bgMobile from '@/assets/mobile-therapist-bg.png';
import bgDesktop from '@/assets/desktop-therapist-bg.png';

import india from '@/assets/india.png';
import newZealand from '../../assets/NZ@2x.png';

function Hero() {
  return (
    <section className="relative h-[455px] lg:h-[558px]">
      <div className="healHavenContainer relative z-[1] flex flex-col  gap-[4.75rem] py-4 lg:gap-[16.5rem] lg:py-10">
        <div className=" flex items-center gap-1 ">
          <ArrowLeft className="stroke-healHavenBrand700" />
          <span className="text-sm text-healHavenBrand700">
            Back to results
          </span>
        </div>
        <div className="flex flex-col items-center gap-6 lg:flex-row  lg:justify-between">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmVzc2lvbmFsJTIwd29tYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
              alt="Mrs Therapist"
              className="aspect-square w-40 rounded-full border-4 border-solid border-white object-cover"
            />
            <div className="flex flex-col">
              <div className=" flex items-center gap-1">
                <p className="text-2xl  font-medium text-healHavenGray700 lg:text-5xl">
                  Aisha Patel
                </p>
                <div className="flex items-center gap-1 ">
                  <img
                    src={newZealand}
                    alt="new zealand flag"
                    className="aspect-square w-6"
                  />
                  <img
                    src={india}
                    alt="indian flag"
                    className="aspect-square w-6"
                  />
                </div>
              </div>
              <p className="text-lg font-medium text-healHavenGray500 lg:text-4xl">
                Clinical Psychologist
              </p>
            </div>
          </div>

          <ScheduleCallBtn text="Schedule a call" />
        </div>
      </div>
      <picture className="absolute inset-0 h-full w-full ">
        <source srcSet={bgMobile} media="(max-width:1023px)" />
        <source srcSet={bgDesktop} media="(min-width:1024px)" />
        <img src={bgDesktop} alt="" className="h-full w-full object-cover" />
      </picture>
    </section>
  );
}

export default Hero;
