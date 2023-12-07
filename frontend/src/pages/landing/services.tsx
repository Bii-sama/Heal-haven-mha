/* eslint-disable no-nested-ternary */
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const servicesData = [
  {
    id: 'service28y77g',
    icon: 'compass',
    text: 'Prioritized understanding of your cultural background',
    title: 'Cultural Compass',
  },
  {
    id: 'service38c7tc',
    icon: 'circle',
    text: 'Rigorously vetted therapists for expertise and cultural sensitivity',
    title: 'Quality Assurance',
  },
  {
    id: 'service93776s',
    icon: 'users',
    text: 'Tailored therapist recommendations for your unique needs',
    title: 'Personalized Matches',
  },
];

function Services() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  });

  const pathProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.75, 1]);
  return (
    <section ref={ref}>
      <div className="healHavenContainer">
        <div className="flex justify-center lg:px-8">
          <ul className="-mt-10 flex max-w-[533px] flex-col divide-y rounded-2xl bg-white px-4 py-8  shadow-small lg:max-w-[1152px]  lg:flex-row lg:divide-x lg:divide-y-0">
            {servicesData.map((service) => {
              return (
                <li
                  key={service.id}
                  className="flex flex-col items-center px-5 py-3"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-healHavenBrand100 stroke-healHavenBrand600">
                    {service.icon === 'compass' ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <motion.circle
                          pathLength={pathProgress}
                          transition={{ duration: 0.25 }}
                          cx="12"
                          cy="12"
                          r="10"
                        />
                        <motion.polygon
                          opacity={opacityProgress}
                          points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"
                        />
                      </svg>
                    ) : service.icon === 'circle' ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <motion.path
                          pathLength={pathProgress}
                          d="M22 11.08V12a10 10 0 1 1-5.93-9.14"
                        />
                        <motion.polyline
                          opacity={opacityProgress}
                          points="22 4 12 14.01 9 11.01"
                        />
                      </svg>
                    ) : service.icon === 'users' ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <motion.path
                          pathLength={pathProgress}
                          d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
                        />
                        <motion.circle
                          pathLength={pathProgress}
                          cx="9"
                          cy="7"
                          r="4"
                        />
                        <motion.path
                          pathLength={pathProgress}
                          d="M23 21v-2a4 4 0 0 0-3-3.87"
                        />
                        <motion.path
                          pathLength={pathProgress}
                          d="M16 3.13a4 4 0 0 1 0 7.75"
                        />
                      </svg>
                    ) : null}
                  </div>
                  <h2 className="text-xl font-medium text-healHavenGray900">
                    {service.title}
                  </h2>
                  <p className="mt-2 text-center">{service.text}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Services;
