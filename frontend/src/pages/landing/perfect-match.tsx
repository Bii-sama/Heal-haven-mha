import woman from '@/assets/landing-2.png';
import { Link } from 'react-router-dom';

function PerfectMatch() {
  return (
    <section className="bg-healHavenGray50">
      <div className="healHavenContainer flex flex-col items-center gap-6 py-16 text-center lg:gap-8 lg:py-24">
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
          <h2 className="text-xl font-medium text-healHavenGray900">
            Ready to find your perfect match?
          </h2>
          <p className="text-lg">
            Connect with therapists who truly understand your cultural
            background and unique journey.
          </p>
        </div>
        <Link
          to="find-therapist"
          className="flex  w-full max-w-sm items-center justify-center rounded-lg bg-healHavenBrand600 px-5 py-3 font-semibold text-white hover:bg-healHavenBrand900 lg:max-w-[190px]"
        >
          Find a therapist
        </Link>
      </div>
    </section>
  );
}

export default PerfectMatch;
