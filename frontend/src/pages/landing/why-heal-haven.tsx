import woman from '@/assets/why-heal-haven-woman.png';
import man from '@/assets/why-heal-haven-man.png';

function WhyHealHaven() {
  return (
    <section>
      <div className="healHavenContainer  py-16 lg:items-start lg:py-24">
        <div className="flex  flex-col-reverse items-center gap-12 lg:flex-row ">
          <div className="flex max-w-[533px] flex-col items-center gap-5 text-center lg:max-w-[43.325rem]">
            <h2 className="text-healHavenBrand700">Why Heal Haven</h2>
            <h3 className="text-3xl text-healHavenGray900 lg:text-4xl lg:leading-[2.75rem]">
              We believe therapy should be a deeply personal experience
            </h3>
            <p className="text-xl">
              That&apos;s why we&apos;ve created a platform where every aspect
              of your identity is acknowledged and celebrated. Dive into a
              therapy journey tailored to your cultural experiences.
            </p>
          </div>
          <div className="relative flex max-w-[533px]">
            <div className="absolute right-[2.35rem] top-3">
              <svg
                className="h-[3.75rem] w-10 lg:w-12"
                viewBox="0 0 54 66"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.2708 2.33331C25.9375 6.11109 19.2042 13.6666 2.9375 13.6666"
                  stroke="#B692F6"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <path
                  d="M27.2712 63.3333C28.6045 50.4444 35.3378 24.6666 51.6045 24.6666"
                  stroke="#B692F6"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <path
                  d="M27.2712 2C28.6045 9.55556 35.3378 24.6667 51.6045 24.6667"
                  stroke="#B692F6"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <path
                  d="M27.2708 63.3333C25.9375 46.7778 19.2042 13.6666 2.9375 13.6667"
                  stroke="#B692F6"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
              <svg
                className="w-13 h-[3.75rem]"
                viewBox="0 0 64 66"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M37.2708 2.33331C35.3896 11 25.8891 28.3333 2.9375 28.3333"
                  stroke="#B692F6"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <path
                  d="M37.2712 63.3333C38.6045 54.7778 45.3378 37.6666 61.6045 37.6666"
                  stroke="#B692F6"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <path
                  d="M37.2712 2C38.6045 13.8889 45.3378 37.6667 61.6045 37.6667"
                  stroke="#B692F6"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <path
                  d="M37.2708 63.3333C35.3896 51.6666 25.8891 28.3333 2.9375 28.3333"
                  stroke="#B692F6"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="">
              <img src={woman} alt="" />
            </div>
            <div className="-ml-28 pt-36">
              {' '}
              <img src={man} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyHealHaven;
