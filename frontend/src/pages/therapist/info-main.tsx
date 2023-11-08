import ScheduleCallBtn from '@/components/button';
import { Therapist } from '../recommended';

type InfoMainProps = {
  therapist: Therapist;
};

function InfoMain({ therapist }: InfoMainProps) {
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
          <h2 className="font-semibold text-healHavenGray700">
            My Roots and Journeys
          </h2>
        </div>
        <p className="px-6 text-healHavenGray500">{therapist.journey}</p>
      </div>

      <div className="flex flex-col gap-5 ">
        <div className="bg-healHavenGray100 px-6 py-3">
          <h2 className="font-semibold text-healHavenGray700">
            My Therapeutic Approach
          </h2>
        </div>
        <p className="px-6 text-healHavenGray500">{therapist.approach}</p>
      </div>

      <div className="flex flex-col gap-5 ">
        <div className="bg-healHavenGray100 px-6 py-3">
          <h2 className="font-semibold text-healHavenGray700">Education</h2>
        </div>
        <ul className="flex flex-col gap-4 px-6 text-healHavenGray500 lg:gap-6">
          {therapist.education && (
            <li className="flex flex-col gap-[2px] ">
              <h2 className="font-semibold ">
                PhD in Multicultural Counseling
              </h2>
              <p className="">{therapist.education}</p>
            </li>
          )}
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
          <h2 className="font-semibold text-healHavenGray700">
            Cultural Competency
          </h2>
        </div>

        {therapist.culturalCompetency && (
          <p className="px-6 ">{therapist.culturalCompetency}</p>
        )}
      </div>

      <div className="flex flex-col gap-5">
        <div className="bg-healHavenGray100 px-6 py-3">
          <h2 className="font-semibold text-healHavenGray700">Fee Structure</h2>
        </div>
        {therapist.feeStructure &&
          therapist.feeStructure.map((fee) => (
            <p className="px-6" key={fee}>
              {fee}
            </p>
          ))}
      </div>
      <div className="flex flex-col gap-5">
        <div className="bg-healHavenGray100 px-6 py-3">
          <h2 className="font-semibold text-healHavenGray700">Reviews</h2>
        </div>
        {therapist.reviews &&
          therapist.reviews.map((r) => (
            <blockquote key={`review-t-${r.review}`} className="px-6">
              “{r.review}” - <span className="font-semibold">{r.name}</span>.
            </blockquote>
          ))}
      </div>
      <div className="flex flex-col gap-5">
        <div className="bg-healHavenGray100 px-6 py-3">
          <h2 className="font-semibold text-healHavenGray700">
            Some resources I love
          </h2>
        </div>
        <ul className="flex flex-col gap-1">
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
        <ScheduleCallBtn text="Schedule a call" />
      </div>
    </>
  );
}

export default InfoMain;
