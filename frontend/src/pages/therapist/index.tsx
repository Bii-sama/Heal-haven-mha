import { ArrowLeft } from 'react-feather';

import bgMobile from '../../assets/mobile-therapist-bg.png';
import bgDesktop from '../../assets/desktop-therapist-bg.png';

import india from '../../assets/india.png';
import newZealand from '../../assets/NZ@2x.png';

function Therapist() {
  return (
    <div>
      <div className="relative ">
        <div className="healHavenContainer relative z-[1] flex flex-col  gap-[4.75rem] py-4 lg:gap-[18.5rem] lg:py-10">
          <div className=" flex items-center gap-1 ">
            <ArrowLeft className="stroke-healHavenBrand700" />
            <span className="text-healHavenBrand700 text-sm">
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
                  <p className="text-healHavenGray700  text-2xl font-medium lg:text-5xl">
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
                <p className="text-healHavenGray500 text-lg font-medium lg:text-4xl">
                  Clinical Psychologist
                </p>
              </div>
            </div>
            <div className="w-full max-w-sm lg:max-w-[190px]">
              <button
                type="button"
                className="hover:bg-healHavenBrand900 flex items-center justify-center rounded-lg bg-healHavenBrand600 px-5 py-3 text-white"
              >
                Schedule A Call
              </button>
            </div>
          </div>
        </div>
        <picture className="absolute inset-0 h-[400px] ">
          <source srcSet={bgMobile} media="(max-width:1023px)" />
          <source srcSet={bgDesktop} media="(min-width:1024px)" />
          <img src={bgDesktop} alt="" />
        </picture>
      </div>
    </div>
  );
}

export default Therapist;
