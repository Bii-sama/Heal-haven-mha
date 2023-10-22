import { Smile, UserCheck, Zap } from 'react-feather';

const howItWorksData = [
  {
    id: 'works38d7s',
    title: 'Complete Your Profile',
    text: 'Fill out a brief questionnaire to help us understand your preferences and needs.',
    icon: <UserCheck stroke="inherit" />,
  },
  {
    id: 'works09876',
    title: 'Get Matched',
    text: 'Our algorithm connects you with therapists who resonate with your cultural background.',
    icon: <Zap stroke="inherit" />,
  },
  {
    id: 'works5678',
    title: 'Begin Therapy',
    text: 'Start your personalized therapy sessions from the comfort of your home.',
    icon: <Smile stroke="inherit" />,
  },
];

function HowItWorks() {
  return (
    <section className="bg-healHavenGray50">
      <div className="healHavenContainer flex flex-col items-center gap-9 py-16 lg:flex-row lg:gap-[5.1875rem] lg:py-24">
        <div className="flex max-w-[33.5rem] flex-col items-center gap-3 text-center lg:items-start lg:text-left">
          <h2 className="text-base font-semibold text-healHavenBrand700">
            How it Works
          </h2>
          <h3 className="text-3xl font-semibold text-healHavenGray900 lg:text-4xl lg:leading-[2.75rem]">
            We believe therapy should be a deeply personal experience
          </h3>
          <p className="lg:text-xl">
            At Heal Haven, we simplify your journey to the right therapist. By
            recognizing your unique needs and cultural background, we offer
            tailored therapist matches. Experience a seamless process that
            prioritizes your comfort at every step.
          </p>
        </div>
        <ul className="flex max-w-[533px] flex-col items-center gap-8">
          {howItWorksData.map((data) => {
            return (
              <li key={data.id} className="flex items-start gap-5">
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border-4  border-healHavenBrand900  bg-healHavenBrand700 stroke-white">
                    {data.icon}
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="text-lg font-medium text-healHavenGray900">
                    {data.title}
                  </h4>
                  <p>{data.text}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default HowItWorks;
