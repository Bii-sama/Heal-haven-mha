import Logo from '@/assets/logo-header.svg';
import { Mail } from 'react-feather';
import { Link, useLocation } from 'react-router-dom';

import genderImg from '@/assets/gender.png';
import languageImg from '@/assets/language.png';
import challengeImg from '@/assets/challenges.png';
import beliefImg from '@/assets/beliefs.png';
import religionImg from '@/assets/religion.png';

import BeliefsFormComponent from './beliefs';
import GenderFormComponent from './gender';
import ReligionFormComponent from './religion';
import LanguageFormComponent from './language';
import ChallengesFormComponent from './challenges';

const steps = ['gender', 'language', 'beliefs', 'religion', 'challenges'];

function MatchLayout() {
  const { pathname } = useLocation();

  let renderImg: string = genderImg;

  const renderFormContent = (step: string) => {
    switch (step) {
      case 'gender':
        renderImg = genderImg;
        return <GenderFormComponent />;
      case 'beliefs':
        renderImg = beliefImg;
        return <BeliefsFormComponent />;
      case 'religion':
        renderImg = religionImg;
        return <ReligionFormComponent />;
      case 'language':
        renderImg = languageImg;
        return <LanguageFormComponent />;
      case 'challenges':
        renderImg = challengeImg;
        return <ChallengesFormComponent />;
      default:
        renderImg = genderImg;
        return <GenderFormComponent />;
    }
  };

  const getPath = pathname.split('/')[2];
  let stepUrlValue: number;

  if (getPath === 'gender') {
    stepUrlValue = 1;
  } else if (getPath === 'language') {
    stepUrlValue = 2;
  } else if (getPath === 'beliefs') {
    stepUrlValue = 3;
  } else if (getPath === 'religion') {
    stepUrlValue = 4;
  } else {
    stepUrlValue = 5;
  }

  return (
    <section className="md:flex">
      <div className="grid grid-rows-[auto_1fr_auto]   md:flex-1">
        <header>
          <nav className="relative z-10 flex items-center justify-between px-4 py-5 md:py-6 md:pl-28  md:pr-8">
            <Link to="/" className="flex items-center gap-[0.375rem]">
              <img src={Logo} alt="logo" />
              <span className="text-2xl font-bold text-healHavenGray800">
                Heal Haven
              </span>
            </Link>
          </nav>
        </header>
        <div className="flex flex-col gap-6 px-4 pt-6 md:gap-[3.75rem] md:pl-28 md:pr-8 md:pt-[3.75rem] ">
          <div className="inline-flex gap-4">
            {steps.map((step, i) => {
              const stepValue = i + 1;
              return (
                <div
                  key={`${step}-step`}
                  className={`${
                    stepValue <= stepUrlValue
                      ? 'bg-healHavenBrand700'
                      : 'bg-healHavenGray300'
                  } h-2 w-10 rounded `}
                  // type="button"
                >
                  {/* <span>{step}</span> */}
                </div>
              );
            })}
          </div>
          <div>
            <div>{renderFormContent(getPath)}</div>
          </div>
        </div>
        <footer>
          <div className="flex items-center  justify-between px-4  py-12 pb-7 md:pl-28 md:pr-8 lg:pb-12">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Heal Haven.
            </p>
            <a href="mailto:help@healhaven.com " className="flex gap-[2px]">
              <Mail />
              <span className="text-sm">help@healhaven.com</span>
            </a>
          </div>
        </footer>
      </div>
      <div className="hidden md:block md:flex-1">
        <img
          src={renderImg}
          alt="Woman in front of a tree"
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  );
}

export default MatchLayout;
