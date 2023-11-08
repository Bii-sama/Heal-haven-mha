import { Therapist } from '../recommended';
import InfoMain from './info-main';
import InfoSide from './info-side';

// grid grid-cols-1 gap-6 py-6 lg:grid-cols-[minmax(150px,280px)_2fr]

type InfoProps = {
  therapist: Therapist;
};

function Info({ therapist }: InfoProps) {
  return (
    <section>
      <div className="healHavenContainer flex flex-col gap-6 lg:flex-row  lg:py-10">
        <div className="hidden lg:block lg:flex-1">
          <InfoSide therapist={therapist} />
        </div>
        <div className="flex flex-col gap-6 lg:flex-[3.5] lg:gap-8">
          <div className="flex h-fit flex-col items-center bg-healHavenBrand100 p-6 ">
            <blockquote className="max-w-[46.5rem] text-center italic text-healHavenBrand500">
              “{therapist.quote}”
            </blockquote>
          </div>
          <div className="lg:hidden">
            <InfoSide therapist={therapist} />
          </div>
          <InfoMain therapist={therapist} />
        </div>
      </div>
    </section>
  );
}

export default Info;
