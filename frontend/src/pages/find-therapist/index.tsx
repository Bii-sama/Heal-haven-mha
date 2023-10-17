import woman from '@/assets/landing-2.png';
import { Link } from 'react-router-dom';

function FindTherapist() {
  return (
    <section className="">
      <div className="absolute -top-40 left-[-257px] -z-[1]  h-0 w-0 -rotate-45 rounded-b-[340px] rounded-t-none   border-b-[340px] border-l-[340px] border-r-[340px] border-solid border-b-healHavenBrand200 border-l-transparent border-r-transparent md:-top-[584px]  md:left-[-714px] md:rounded-b-[880px] md:border-b-[880px] md:border-l-[880px] md:border-r-[880px] lg:-left-[848px]  lg:-top-[1084px] lg:rounded-b-[1280px] lg:border-b-[1280px] lg:border-l-[1280px] lg:border-r-[1280px] " />
      <div className="absolute -top-40 left-[-257px] -z-[2]  h-0 w-0 -rotate-45 rounded-b-[350px] rounded-t-none   border-b-[350px] border-l-[350px] border-r-[350px] border-solid border-b-healHavenBrand300 border-l-transparent border-r-transparent md:-top-[584px]  md:left-[-714px] md:rounded-b-[890px] md:border-b-[890px] md:border-l-[890px] md:border-r-[890px] lg:-left-[848px]  lg:-top-[1084px] lg:rounded-b-[1290px] lg:border-b-[1290px] lg:border-l-[1290px] lg:border-r-[1290px] " />
      <div className="absolute -top-40 left-[-257px] -z-[3]  h-0 w-0 -rotate-45 rounded-b-[360px] rounded-t-none   border-b-[360px] border-l-[360px] border-r-[360px] border-solid border-b-healHavenBrand400 border-l-transparent border-r-transparent md:-top-[584px]  md:left-[-714px] md:rounded-b-[900px] md:border-b-[900px] md:border-l-[900px] md:border-r-[900px] lg:-left-[848px]  lg:-top-[1084px] lg:rounded-b-[1300px] lg:border-b-[1300px] lg:border-l-[1300px] lg:border-r-[1300px] " />
      <div className="healHavenContainer relative z-[5] flex flex-col items-center gap-6 pt-[5.75rem] md:pt-32">
        <div className="flex  items-center">
          <img
            src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFuJTIwaW4lMjBnbGFzc2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            alt=""
            className="-mr-4 aspect-square w-[4.5rem] rounded-full border-[2px] border-solid border-white object-cover"
          />
          <img
            src={woman}
            alt=""
            className="relative aspect-square w-24 rounded-full border-[2px] border-solid border-white object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1535295972055-1c762f4483e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29tYW4lMjBsYXVnaGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
            className="-ml-4 aspect-square w-[4.5rem] rounded-full border-[2px] border-solid border-white object-cover"
          />
        </div>
        <div>
          <h1 className="text-center text-xl text-healHavenBrand700">
            Your Perfect Match Awaits
          </h1>
          <p className="max-w-xl text-center text-lg">
            Your unique experiences deserve understanding. Help us connect you
            with a therapist who truly resonates with your cultural journey.
          </p>
        </div>
        <div className="flex w-full max-w-sm flex-col gap-5 lg:max-w-[190px]">
          <Link
            to="/match/gender"
            className="flex w-full 
            items-center justify-center rounded-lg bg-healHavenBrand600 px-5 py-3
        text-white hover:bg-healHavenBrand800"
          >
            Let&apos;s begin
          </Link>
          <Link
            to="/"
            className="flex w-full 
            items-center justify-center rounded-lg border border-solid border-healHavenGray700
        bg-white px-5 py-3 text-healHavenGray500 hover:bg-healHavenGray100"
          >
            Never Mind
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FindTherapist;
