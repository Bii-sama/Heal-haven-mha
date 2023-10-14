import InfoMain from './info-main';
import InfoSide from './info-side';

// grid grid-cols-1 gap-6 py-6 lg:grid-cols-[minmax(150px,280px)_2fr]

function Info() {
  return (
    <section>
      <div className="healHavenContainer flex flex-col gap-6 lg:flex-row  lg:py-10">
        <div className="hidden lg:block lg:flex-1">
          <InfoSide />
        </div>
        <div className="flex flex-col gap-6 lg:flex-[3.5] lg:gap-8">
          <div className="bg-healHavenBrand100 flex h-fit flex-col items-center p-6 ">
            <blockquote className="text-healHavenBrand500 max-w-[46.5rem] text-center italic">
              “Every individual is a tapestry of their experiences, traditions,
              and cultures. I&apos;m committed to continuous learning, always
              seeking to understand the unique cultural threads that make you,
              YOU.”
            </blockquote>
          </div>
          <div className="lg:hidden">
            <InfoSide />
          </div>
          <InfoMain />
        </div>
      </div>
    </section>
  );
}

export default Info;
