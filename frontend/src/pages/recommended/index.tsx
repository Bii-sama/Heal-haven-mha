import TherapistCard from './therapist-card';

const recommendedTherapists = [
  {
    imgUrl:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmVzc2lvbmFsJTIwd29tYW58ZW58MHx8MHx8fDA%3D',
    name: 'Ayesha Patel',
    title: 'Clinical Psychologist',
    quote: '“Empathy is the bridge to understanding and healing.”',
    expertise: [
      'English and Arabic',
      'Muslim',
      'Grief and loss',
      'Cultural challenges',
      'Sexuality and gender identity',
    ],
    id: 's7ss78c6tsd5xxx5x',
  },
  {
    name: 'Alejandro Martinez',
    title: 'Counselling Psychologist',
    quote:
      "“Finding balance is a journey, not a destination. Let's walk it together.”",
    expertise: [
      'English, Spanish',
      'Chrisitian',
      'Relationship',
      'Cultural challenges',
      'Substance use and moderation',
    ],
    id: '37yc6td65ss5',
    imgUrl:
      'https://images.unsplash.com/photo-1568316674077-d72ee56de61c?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmVzc2lvbmFsJTIwbWFufGVufDB8fDB8fHww',
  },
  {
    imgUrl:
      'https://images.unsplash.com/photo-1581065178047-8ee15951ede6?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2Zlc3Npb25hbCUyMHdvbWFufGVufDB8fDB8fHww',
    name: 'Nada Al-Mansoor',
    title: 'Counselling Psychologist',
    quote: "“In the heart's quiet whispers, we find our truest selves.”",
    expertise: [
      'English and Arabic',
      'Muslim',
      'Grief and loss',
      'Family dynamics',
      'Sexuality and gender identity',
    ],
    id: 'nan23naa12',
  },
];

function Recommended() {
  return (
    <section>
      <div className="healHavenContainer pt-[1.25rem] md:pt-10">
        <div className="flex flex-col items-center gap-4 text-center">
          <h1 className="text-3xl font-semibold text-healHavenGray900 md:text-4xl md:-tracking-[0.72px]">
            Your Therapist Recommendations
          </h1>
          <p className=" max-w-3xl text-[1.25rem]">
            Based on the information you&apos;ve shared with us, we&apos;ve
            curated a list of therapists who align with your preferences and
            needs. Take your time to explore the profiles below and see who
            resonates with you.
          </p>
        </div>
        <ul className="flex flex-col gap-8 pt-6 md:flex-row md:pt-10">
          {recommendedTherapists.map((therapist) => {
            return (
              <TherapistCard
                key={therapist.id}
                name={therapist.name}
                imgUrl={therapist.imgUrl}
                expertises={therapist.expertise}
                title={therapist.title}
                quote={therapist.quote}
                id={therapist.id}
              />
            );
          })}
        </ul>
        <div className="flex flex-col items-center justify-center gap-8 pb-[5.5rem] pt-20 md:pb-[8.5rem] md:pt-32">
          <h2>Not sure if these are the right matches?</h2>
          <button
            type="button"
            className="w-full rounded-lg border border-healHavenGray300 bg-white px-[1.125rem] py-[0.625rem] font-semibold text-healHavenGray700 md:max-w-[116px]"
          >
            Try Again
          </button>
        </div>
      </div>
    </section>
  );
}

export default Recommended;
