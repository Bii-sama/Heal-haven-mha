import { Check, Dribbble, Linkedin, Twitter } from 'react-feather';
import { Link } from 'react-router-dom';

type TherapistCardProps = {
  imgUrl: string;
  name: string;
  title: string;
  quote: string;
  expertises: string[];
  id: string;
};

function TherapistCard({
  imgUrl,
  name,
  title,
  quote,
  expertises,
  id,
}: TherapistCardProps) {
  return (
    <li className="flex flex-col gap-5 rounded-xl p-6 shadow-lg transition-transform duration-300 hover:scale-105 md:flex-1">
      <div className="flex flex-col items-center gap-5 bg-healHavenBrand50 py-3">
        <img
          src={imgUrl}
          alt={name}
          className="h-40 w-40 rounded-full object-cover"
        />
        <div className="text-center">
          <p className="text-lg text-healHavenGray700">{name}</p>
          <p className="text-base text-healHavenGray700">{title}</p>
        </div>
      </div>
      <div className="flex flex-col  gap-4">
        <blockquote className="text-center">{quote}</blockquote>
        <ul className="flex flex-col gap-4">
          {expertises.map((expertise) => (
            <li className="flex gap-3" key={expertise}>
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-healHavenSuccess100 p-1">
                <Check className="stroke-healHavenSuccess500" />
              </span>
              <span>{expertise}</span>
            </li>
          ))}
          <li className="flex justify-center gap-2">
            <Twitter className="aspect-square w-5 fill-healHavenGray500 stroke-transparent" />
            <Linkedin className="aspect-square w-5 fill-healHavenGray500 stroke-transparent" />
            <Dribbble className="aspect-square w-5 " />
          </li>
        </ul>
      </div>
      <Link
        to={`/therapist/${id}`}
        className="mt-8 flex w-full items-center justify-center rounded-lg bg-healHavenBrand600 px-[1.15rem] py-[0.625rem] text-white hover:bg-healHavenBrand800"
      >
        View Profile
      </Link>
    </li>
  );
}

export default TherapistCard;
