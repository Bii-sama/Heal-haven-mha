import { zodResolver } from '@hookform/resolvers/zod';
import { Check } from 'react-feather';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';

const beliefSchema = z.object({
  belief: z.enum(['yes', 'somewhat', 'no']),
});

type FormData = z.infer<typeof beliefSchema>;
const options = [
  {
    belief: 'yes',
    text: "Yes,it's important to me",
  },
  {
    belief: 'somewhat',
    text: "it's somewhat important to me",
  },
  {
    belief: 'no',
    text: "No,it's not a priority for me",
  },
];

function BeliefsFormComponent() {
  const { handleSubmit, register, watch } = useForm<FormData>({
    resolver: zodResolver(beliefSchema),
    defaultValues: {
      belief: undefined,
    },
  });

  const navigate = useNavigate();

  const selectedBelief = watch('belief');

  const onSubmit: SubmitHandler<FormData> = (data) => {
    if (!data.belief) return;
    console.log(data);
    navigate('/match/religion');
  };

  return (
    <>
      <h2 className="font-semibold text-healHavenBrand700">
        Religious & Spiritual beliefs
      </h2>
      <h3 className="text-2xl font-medium text-black">
        Do you want a therapist who understands or shares your religious or
        spiritual beliefs?
      </h3>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-10 flex flex-col gap-10 "
      >
        {/* <label className="text-textHealHavenGray700 pr-4">belief</label> */}
        <div className="flex flex-col items-start gap-4">
          {options.map((option) => (
            <div
              key={option.text}
              className="relative flex w-full items-center justify-between rounded-md border border-solid border-healHavenGray300 p-4"
            >
              <label
                htmlFor={option.belief}
                className={`${
                  selectedBelief === option.belief
                    ? 'text-healHavenBrand800'
                    : 'text-textHealHavenGray700'
                } text-sm font-medium`}
              >
                {option.text.charAt(0).toUpperCase() + option.text.slice(1)}
              </label>
              <input
                type="radio"
                className="peer opacity-0"
                value={option.belief}
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...register('belief')}
              />
              <div className="pointer-events-none absolute right-[13px] flex h-5 w-5 items-center justify-center rounded-full border border-solid border-healHavenBrand700 peer-checked:bg-healHavenBrand800 ">
                <Check stroke="#fff" className="h-[0.875rem] w-[0.875rem]" />
              </div>
            </div>
          ))}
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
            className={`${
              selectedBelief === undefined || selectedBelief === null
                ? 'bg-healHavenBrand200 hover:bg-healHavenBrand300'
                : 'bg-healHavenBrand600 hover:bg-healHavenBrand900'
            }  rounded  px-4 py-2 text-white `}
          >
            Next
          </button>
        </div>
      </form>
    </>
  );
}

export default BeliefsFormComponent;
