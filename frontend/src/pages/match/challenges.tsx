/* eslint-disable no-underscore-dangle */
import Spinner from '@/components/spinner';
import { useAuth } from '@/hooks/useAuth';
import { useMatches } from '@/hooks/useMatch';
import { cn } from '@/utils/cn';
import { axiosInstance } from '@/utils/urls';
import { zodResolver } from '@hookform/resolvers/zod';
import { AxiosError } from 'axios';
import { useState } from 'react';
import { Check } from 'react-feather';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { z } from 'zod';

const experiencesSchema = z.object({
  experiences: z
    .enum([
      'Relationship',
      'Grief and loss',
      'Career',
      'Family dynamics',
      'Cultural challenges',
      'Personal growth',
      'Self-esteem and personal worth',
      'Navigating life as an immigrant',
      'Sexuality and gender identity',
      'Ageing and related challenges',
      'Substance use and moderation',
      'Divorce or separation',
    ])
    .array()
    .nonempty('Please select at least one field')
    .max(3, "You can't select more than 3 fields"),
});

export type Experiences = z.infer<typeof experiencesSchema>;
// type Challenges = {
//   challenges: string[];
// };

const options: Experiences = {
  experiences: [
    'Relationship',
    'Grief and loss',
    'Career',
    'Family dynamics',
    'Cultural challenges',
    'Personal growth',
    'Self-esteem and personal worth',
    'Navigating life as an immigrant',
    'Sexuality and gender identity',
    'Ageing and related challenges',
    'Substance use and moderation',
    'Divorce or separation',
  ],
};

function ChallengesFormComponent() {
  const { match, dispatch } = useMatches();
  const { token } = useAuth();
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors, isValid },
  } = useForm<Experiences>({
    resolver: zodResolver(experiencesSchema),
    defaultValues: {
      experiences: match.experiences ?? [],
    },
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // const selectedChallenge = watch('challenges');

  const onSubmit: SubmitHandler<Experiences> = async (data) => {
    if (data.experiences.length === 0) return;
    dispatch({
      type: 'update-experiences',
      payload: {
        experiences: data.experiences,
      },
    });
    const serverMatch = {
      ...match,
      languages: [match.language],
      experiences: data.experiences,
    };
    // console.log(serverMatch);
    try {
      setLoading(true);
      const res = await axiosInstance.post(
        '/api/patients/create',
        serverMatch,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log('==>', res.data);
      setLoading(false);
      if (res.data._id) {
        navigate(`/recommended/${res.data._id}`);
      }
      // navigate('/recommended');
    } catch (err) {
      if (err instanceof AxiosError) {
        toast.error(err?.response?.data.error ?? 'Something went wrong');
      }

      setLoading(false);
    }
  };

  const selectedChallenges = watch('experiences');

  return (
    <>
      <h2 className="font-semibold text-healHavenBrand700">
        Life Experiences & Challenges
      </h2>
      <h3 className="text-2xl font-medium text-black">
        Are there specific life experiences or challenges you&apos;d like your
        therapist to have expertise in?
      </h3>
      <p className="mt-2 text-sm text-healHavenGray800">
        Please select 1-3 options
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-10 flex flex-col gap-10 "
      >
        {/* <label className="text-textHealHavenGray700 pr-4">Gender</label> */}
        {errors.experiences ? (
          <small className="mt-3 text-center text-red-500">
            {errors.experiences.message}
          </small>
        ) : null}

        <div className="max-h-[424px] overflow-y-auto pr-2 lg:pr-4">
          <div className="grid grid-cols-1 gap-4 ">
            {options.experiences.map((option) => (
              <label
                key={option}
                htmlFor={option}
                className={cn(
                  'relative flex w-full items-center justify-between rounded-md border border-solid border-healHavenGray300 p-4 text-healHavenGray700 hover:border-healHavenBrand300 hover:text-healHavenBrand800',
                  {
                    'bg-healHavenBrand50 text-healHavenBrand800':
                      selectedChallenges.includes(option),
                  }
                )}
              >
                {option.charAt(0).toUpperCase() + option.slice(1)}
                <input
                  type="checkbox"
                  className="peer opacity-0"
                  value={option}
                  id={option}
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  {...register('experiences')}
                />
                <div className="pointer-events-none absolute right-[13px] flex h-5 w-5 items-center justify-center rounded-full border border-solid border-healHavenBrand700 peer-checked:bg-healHavenBrand800 ">
                  <Check stroke="#fff" className="h-[0.875rem] w-[0.875rem]" />
                </div>
              </label>
            ))}
          </div>
        </div>

        <div className="flex justify-between ">
          <button
            type="button"
            className=" rounded  border border-solid border-healHavenGray300 px-4 py-2 text-healHavenGray700"
            onClick={() => navigate(-1)}
          >
            Back
          </button>
          <button
            type="submit"
            className="rounded  bg-healHavenBrand600 px-4 py-2 text-white hover:bg-healHavenBrand900 disabled:cursor-not-allowed disabled:bg-healHavenBrand200 disabled:hover:bg-healHavenBrand300"
            disabled={!isValid}
          >
            {loading ? <Spinner /> : 'Submit'}
          </button>
        </div>
      </form>
    </>
  );
}

export default ChallengesFormComponent;
