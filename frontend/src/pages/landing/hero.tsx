import pic1 from '@/assets/landing-1.png';
import pic2 from '@/assets/landing-2.png';
import pic3 from '@/assets/landing-3.png';
import pic4 from '@/assets/landing-4.png';
import pic from '@/assets/landing.png';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

import { heroContainer } from '@/utils/variants';
import { useRef } from 'react';

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  });

  const pathProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  return (
    <motion.section
      ref={ref}
      variants={heroContainer}
      initial="hidden"
      animate="show"
      className="bg-gradient-to-r from-[#f4ebff] from-0% via-[#fdf2fa] via-[47.92%] to-[#fff6ed] to-[91.67%]"
    >
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
          <motion.svg
            width="176"
            height="171"
            viewBox="0 0 176 171"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute -top-9 right-10 h-[6.25rem] w-[6.25rem]  lg:-top-14 lg:h-auto lg:w-auto"
          >
            <motion.ellipse
              style={{ scale: scaleProgress }}
              transition={{ duration: 2, delay: 0.5 }}
              cx="88"
              cy="85.5"
              rx="88"
              ry="85.5"
              fill="#B9E6FE"
            />
          </motion.svg>
          <motion.svg
            width="289"
            height="129"
            viewBox="0 0 289 129"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute -bottom-2 left-11 z-[1] h-[3.25rem] w-[6.8125rem] lg:-bottom-[4.5rem] lg:left-0 lg:h-auto lg:w-auto"
          >
            <motion.path
              style={{ pathLength: pathProgress }}
              d="M2 77.4498C3.18644 73.1128 5.52631 69.8704 8.13185 66.318C19.476 50.8511 33.1398 37.4305 48.5286 26.9528C80.8367 4.95546 119.596 -6.22333 156.284 9.04587C177.256 17.7744 200.266 37.1665 203.455 63.3207C205.267 78.1732 198.79 91.0634 189.561 101.452C179.671 112.584 166.878 121.466 153.092 125.353C142.43 128.358 123.877 128.887 122.708 112.357C122.059 103.188 126.258 94.5558 131.205 87.5745C141.511 73.0316 156.47 64.2503 172.337 59.1147C199.917 50.1878 229.365 53.6661 253.244 71.7077C262.318 78.5623 280.642 98.8876 287 111.563"
              stroke="#36BFFA"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>

          <svg
            width="97"
            height="72"
            viewBox="0 0 97 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute right-2 top-32  z-[4] h-[2.375rem] w-[2.75rem] lg:top-48 lg:h-auto lg:w-auto"
          >
            <motion.path
              style={{
                pathLength: pathProgress,
              }}
              // animate={{ pathLength: pathProgress }}
              transition={{ duration: 2 }}
              d="M10.5165 8.90478C26.2344 -1.66797 67.638 0.555703 83.3559 11.1285C100.007 22.3287 97.7138 45.6407 83.3559 58.3507C65.5192 74.1404 29.7324 73.6236 10.5165 58.3507C-1.19348 49.0436 -0.478581 36.0823 10.5165 26.3425C24.185 14.2344 53.8118 12.724 68.9851 23.8849C79.1679 31.375 77.4267 42.9251 66.3573 48.5786C47.2237 58.3507 26.5298 44.3656 26.5298 44.3656"
              stroke="#4A3AFF"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>

          <svg
            width="160"
            height="160"
            viewBox="0 0 160 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute -bottom-2 -left-3 h-[6.375rem] w-[6.25rem] lg:h-auto lg:w-auto"
          >
            <motion.circle
              style={{ scale: scaleProgress }}
              cx="80"
              cy="80"
              r="80"
              fill="#E9D7FE"
            />
          </svg>
          <div className="healHavenContainer relative flex items-end gap-1 overflow-y-hidden">
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
          <div className="healHavenContainer relative z-[3] flex gap-1  overflow-y-hidden">
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
    </motion.section>
  );
}

export default Hero;
