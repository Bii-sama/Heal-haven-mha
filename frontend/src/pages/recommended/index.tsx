/* eslint-disable no-underscore-dangle */
import { axiosInstance } from '@/utils/urls';
import { useNavigation } from 'react-router-dom';
import { makeLoader, useLoaderData } from 'react-router-typesafe';
import { cn } from '@/utils/cn';
import TherapistCard from './therapist-card';

export const imageUrls = [
  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmVzc2lvbmFsJTIwd29tYW58ZW58MHx8MHx8fDA%3D',
  'https://images.unsplash.com/photo-1568316674077-d72ee56de61c?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmVzc2lvbmFsJTIwbWFufGVufDB8fDB8fHww',
  'https://images.unsplash.com/photo-1581065178047-8ee15951ede6?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2Zlc3Npb25hbCUyMHdvbWFufGVufDB8fDB8fHww',
];

export type Therapist = {
  _id?: string;
  fullName?: string;
  title?: string;
  gender?: string;
  religion?: string;
  languages?: string[];
  experiences?: string[];
  quote?: string;
  journey?: string;
  approach?: string;
  education?: string;
  culturalCompetency?: string;
  feeStructure?: string[];
  reviews?: Review[];
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
};

export type FeeStructureItem = {
  description: string;
  // price: number;
};

export type Review = {
  name: string;
  review: string;
};

export const loader = makeLoader(
  async ({ params }): Promise<{ therapists: Therapist[] }> => {
    const token = localStorage.getItem('healHavenToken');

    if (token) {
      const res = await axiosInstance.get(`/api/matching/${params.patientId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log('==> server', res.data);
      return { therapists: res.data };
    }

    throw new Error('Oh! Unauthorized request!');
  }
);

function Recommended() {
  const { therapists } = useLoaderData<typeof loader>();
  const navigation = useNavigation();

  if (!therapists || therapists.length === 0) {
    return (
      <div className="healHavenContainer pt-[1.25rem] text-center md:pt-10">
        <h1 className="text-3xl font-semibold text-healHavenGray900 md:text-4xl md:-tracking-[0.72px]">
          Your Therapist Recommendations
        </h1>
        <p>Could not find a match</p>
      </div>
    );
  }

  return (
    <section
      className={cn({
        'opacity-50': navigation.state === 'loading',
      })}
    >
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
          {therapists.slice(0, 3).map((therapist) => {
            return (
              <TherapistCard
                key={therapist._id}
                fullName={therapist.fullName}
                experiences={therapist.experiences}
                title={therapist.title}
                quote={therapist.quote}
                _id={therapist._id}
                gender={therapist.gender}
                languages={therapist.languages}
                religion={therapist.religion}
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
