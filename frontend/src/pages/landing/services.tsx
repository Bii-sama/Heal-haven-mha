import { CheckCircle, Compass, Users } from 'react-feather';

const servicesData = [
  {
    id: 'service28y77g',
    icon: <Compass stroke="inherit" />,
    text: 'Prioritized understanding of your cultural background',
    title: 'Cultural Compass',
  },
  {
    id: 'service38c7tc',
    icon: <CheckCircle stroke="inherit" />,
    text: 'Rigorously vetted therapists for expertise and cultural sensitivity',
    title: 'Quality Assurance',
  },
  {
    id: 'service93776s',
    icon: <Users stroke="inherit" />,
    text: 'Tailored therapist recommendations for your unique needs',
    title: 'Personalized Matches',
  },
];

function Services() {
  return (
    <section>
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
                    {service.icon}
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
