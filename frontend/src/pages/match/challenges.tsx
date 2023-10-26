import { zodResolver } from '@hookform/resolvers/zod';
import { Check } from 'react-feather';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';

const challengesSchema = z.object({
  challenges: z
    .enum([
      'relationship',
      'grief and loss',
      'career',
      'family dynamics',
      'cultural challenges',
      'personal growth',
      'self-esteem and personal worth',
      'navigating life as an immigrant',
      'sexuality and gender identity',
      'ageing and related challenges',
      'substance use and moderation',
      'divorce or separation',
    ])
    .array()
    .nonempty('Please select at least one field')
    .max(3, "You can't select more than 3 fields"),
});

type FormData = z.infer<typeof challengesSchema>;
// type FormData = {
//   challenges: string[];
// };
const options = [
  'relationship',
  'grief and loss',
  'career',
  'family dynamics',
  'cultural challenges',
  'personal growth',
  'self-esteem and personal worth',
  'navigating life as an immigrant',
  'sexuality and gender identity',
  'ageing and related challenges',
  'substance use and moderation',
  'divorce or separation',
];

function ChallengesFormComponent() {
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(challengesSchema),
    defaultValues: {
      challenges: [],
    },
  });

  const navigate = useNavigate();

  // const selectedChallenge = watch('challenges');

  const onSubmit: SubmitHandler<FormData> = (data) => {
    if (data.challenges.length === 0) return;

    navigate('/recommended');
  };

  return (
    <>
      <h2 className="font-semibold text-healHavenBrand700">
        Life Experiences & Challenges
      </h2>
      <h3 className="text-2xl font-medium text-black">
        Are there specific life experiences or challenges you&apos;d like your
        therapist to have expertise in?
      </h3>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-10 flex flex-col gap-10 "
      >
        {/* <label className="text-textHealHavenGray700 pr-4">Gender</label> */}
        <div className="max-h-[424px] overflow-y-auto pr-2 lg:pr-4">
          <div className="grid grid-cols-1 gap-4 ">
            {options.map((option) => (
              <div
                key={option}
                className="relative flex w-full items-center justify-between rounded-md border border-solid border-healHavenGray300 p-4"
              >
                <label
                  htmlFor={option}
                  // className={`${
                  //   selectedChallenge === option
                  //     ? 'text-healHavenBrand800'
                  //     : 'text-textHealHavenGray700'
                  // } text-sm font-medium`}
                >
                  {option.charAt(0).toUpperCase() + option.slice(1)}
                </label>
                <input
                  type="checkbox"
                  className="peer opacity-0"
                  value={option}
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  {...register('challenges')}
                />
                <div className="pointer-events-none absolute right-[13px] flex h-5 w-5 items-center justify-center rounded-full border border-solid border-healHavenBrand700 peer-checked:bg-healHavenBrand800 ">
                  <Check stroke="#fff" className="h-[0.875rem] w-[0.875rem]" />
                </div>
              </div>
            ))}
          </div>
        </div>
        {errors.challenges ? (
          <small className="mt-3 text-center text-red-500">
            {errors.challenges.message}
          </small>
        ) : null}
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
            // className={`${
            //   !isValid
            //     ? 'bg-healHavenBrand200 hover:bg-healHavenBrand300'
            //     : 'bg-healHavenBrand600 hover:bg-healHavenBrand900'
            // }  rounded  px-4 py-2 text-white `}
            className="rounded  bg-healHavenBrand600 px-4 py-2 text-white hover:bg-healHavenBrand900 disabled:cursor-not-allowed disabled:bg-healHavenBrand200 disabled:hover:bg-healHavenBrand300"
            disabled={!isValid}
          >
            Next
          </button>
        </div>
      </form>
    </>
  );
}

export default ChallengesFormComponent;
