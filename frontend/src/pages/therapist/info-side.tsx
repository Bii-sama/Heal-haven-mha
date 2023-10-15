import { Dribbble, Linkedin, Twitter } from 'react-feather';

function InfoSide() {
  return (
    <ul className="flex flex-col  gap-4 bg-healHavenGray50 p-6 text-healHavenGray400 md:flex-row md:justify-between  lg:col-start-1 lg:row-start-1 lg:row-end-3 lg:flex-col lg:justify-start">
      <li className="flex flex-col gap-[2px] text-healHavenGray500">
        <h2 className="font-semibold ">Gender</h2>
        <p className="">Female</p>
      </li>
      <li className="flex flex-col gap-[2px] text-healHavenGray500">
        <h2 className="font-semibold ">Religion</h2>
        <p className="">Muslim</p>
      </li>
      <li className="flex flex-col gap-[2px] text-healHavenGray500">
        <h2 className="font-semibold ">Languages</h2>
        <p className="">Arabic</p>
        <p className="">English</p>
      </li>
      <li className="flex flex-col gap-[2px] text-healHavenGray500">
        <h2 className="font-semibold ">Years of experience</h2>
        <p className="">Less than 3 years</p>
      </li>
      <li className="flex flex-col gap-[2px] text-healHavenGray500">
        <h2 className="font-semibold ">Specialties</h2>
        <p className="">Addiction</p>
        <p className="">Trauma and PTSD</p>
        <p className="">Mood Disorders</p>
        <p>Anxiety Disorders</p>
      </li>

      <li className="flex gap-2">
        <Twitter className="aspect-square w-5 fill-healHavenGray500 stroke-transparent" />
        <Linkedin className="aspect-square w-5 fill-healHavenGray500 stroke-transparent" />
        <Dribbble className="aspect-square w-5 " />
      </li>
    </ul>
  );
}

export default InfoSide;
