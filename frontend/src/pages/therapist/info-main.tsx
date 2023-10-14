import ScheduleCallBtn from '@/components/buttons/schedule-call-btn';

function InfoMain() {
  const resources = [
    {
      type: 'Book',
      title: 'The Art of Happiness',
      author: 'Dalai Lama',
      content: 'A beautiful blend of Eastern wisdom and Western science.',
    },
    {
      type: 'Podcast',
      title: 'Code Switch',
      author: 'NPR',
      content: 'An insightful look into how race and identity shape our lives.',
    },
    {
      type: 'Article',
      title: 'Cultural Competence in Therapy: What it is and how to Find it',
      author: '',
      content:
        'A deep dive into why understanding culture is crucial in therapeutic settings.',
    },
  ];
  return (
    <>
      <div className="flex h-fit flex-col gap-5 ">
        <div className="bg-healHavenGray100 px-6 py-3">
          <h2 className="font-semibold text-healHavenGray500">
            My Roots and Journeys
          </h2>
        </div>
        <p className="px-6 text-healHavenGray500">
          Born in Morocco and raised in a blend of eastern and western cultures,
          I&apos;ve experienced firsthand the challenges and beauty of
          navigating multiple cultural worlds. My journey from Morocco to the
          U.S. has shaped my passion for understanding diverse perspectives.
        </p>
      </div>

      <div className="flex flex-col gap-5 ">
        <div className="bg-healHavenGray100 px-6 py-3">
          <h2 className="font-semibold text-healHavenGray500">
            My Therapeutic Approach
          </h2>
        </div>
        <p className="px-6 text-healHavenGray500">
          I believe in a holistic approach to therapy, blending Eastern
          philosophies of mindfulness and meditation with Western therapeutic
          techniques. Every individual is a confluence of their cultural,
          personal, and spiritual experiences, and I aim to honor that in our
          sessions.
        </p>
      </div>

      <div className="flex flex-col gap-5 ">
        <div className="bg-healHavenGray100 px-6 py-3">
          <h2 className="font-semibold text-healHavenGray500">Education</h2>
        </div>
        <ul className="flex flex-col gap-4 px-6 text-healHavenGray500 lg:gap-6">
          <li className="flex flex-col gap-[2px] ">
            <h2 className="font-semibold ">PhD in Multicultural Counseling</h2>
            <p className="">Stanford University, Stanford, CA, 2008 - 2012</p>
          </li>
          <li className="flex flex-col gap-[2px] ">
            <h2 className="font-semibold ">Masters in Clinical Psychology</h2>
            <p className="">University of Auckland, New Zealand, 2005 - 2007</p>
          </li>
          <li className="flex flex-col gap-[2px] ">
            <h2 className="font-semibold ">Bachelors in Psychology</h2>
            <p className="">University of Mumbai, India, 2001 - 2005</p>
          </li>
        </ul>
      </div>

      <div className="flex flex-col gap-5 ">
        <div className="bg-healHavenGray100 px-6 py-3">
          <h2 className="font-semibold text-healHavenGray500">
            Cultural Competency
          </h2>
        </div>

        <p className="px-6 ">
          Certified Multicultural Counselor - International Association of
          Counseling Services
        </p>
        <p className="px-6 ">
          Cultural Sensitivity in Therapy - Global Therapists&apos; Conference,
          Toronto
        </p>
        <p className="px-6 ">
          Understanding Intersectionality in Counseling - Mental Health
          Professionals&apos; Summit, London
        </p>
        <p className="px-6 ">
          Bridging Cultural Gaps in Therapeutic Settings - Annual Counseling
          Workshop, New York
        </p>
        <p className="px-6 ">
          Trauma-Informed Care for Immigrants and Refugees - Specialized
          Training Institute, Los Angeles
        </p>
      </div>

      <div className="flex flex-col gap-5">
        <div className="bg-healHavenGray100 px-6 py-3">
          <h2 className="font-semibold text-healHavenGray500">Fee Structure</h2>
        </div>
        <p className="px-6">
          I offer a FREE 30-minute consultation to new patients.
        </p>
        <p className="px-6">
          Regular Heart-to-Hearts:{' '}
          <span className="text-healHavenBrand600">$150</span> per 50-minute
          session.
        </p>
        <p className="px-6">
          Package Deal: <span className="text-healHavenBrand600">$700</span> for
          5 sessions.
        </p>
        <p className="px-6">
          Flexible Pricing: I understand everyone&apos;s situation is different,
          so I offer a sliding scale upon request.
        </p>
      </div>
      <div className="flex flex-col gap-5">
        <div className="bg-healHavenGray100 px-6 py-3">
          <h2 className="font-semibold text-healHavenGray500">Fee Structure</h2>
        </div>
        <blockquote className="px-6">
          “Dr. Patel&apos;s understanding of my South Asian background made me
          feel seen in ways I hadn&apos;t before. She seamlessly integrates my
          cultural values into our sessions.” -{' '}
          <span className="font-semibold">Rahul K</span>.
        </blockquote>

        <blockquote className="px-6">
          “As an immigrant, I faced unique challenges. Dr. Patel, with her own
          rich cultural background, provided the understanding and tools I
          needed to thrive.” - <span className="font-semibold">Linda W</span>.
        </blockquote>

        <blockquote className="px-6">
          “I&apos;ve been to therapists before, but with Dr. Patel, it was the
          first time I didn&apos;t have to explain my cultural nuances. She just
          gets it.” - <span className="font-semibold">Priya N</span>.
        </blockquote>
      </div>
      <div className="flex flex-col gap-5">
        <div className="bg-healHavenGray100 px-6 py-3">
          <h2 className="font-semibold text-healHavenGray500">
            Some resources I love
          </h2>
        </div>
        <ul>
          {resources.map(({ title, type, author, content }) => (
            <li key={title} className="list-inside list-disc px-6 ">
              <span className="font-semibold ">{type}:</span>{' '}
              <span className="font-semibold text-healHavenBrand600">
                {title}
              </span>{' '}
              by {author} - {content}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col items-center gap-8 bg-healHavenGray50 py-16 lg:flex-row lg:items-center lg:justify-between lg:px-16">
        <div className="flex flex-col items-center gap-4 lg:items-start">
          <h2 className="text-3xl font-semibold text-healHavenGray900">
            Let&apos;s have a chat
          </h2>
          <p className="text-center lg:text-left">
            Book a consultation to see if we’re a good fit.
          </p>
        </div>
        <ScheduleCallBtn />
      </div>
    </>
  );
}

export default InfoMain;
