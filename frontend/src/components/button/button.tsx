import { ReactNode } from 'react';

type ButtonProps = {
  text?: string;
  icon?: ReactNode;
  bgColor: 'brand' | 'white';
  type: 'submit' | 'button' | 'reset' | undefined;
};

function Button({ text, icon = null, bgColor, type }: ButtonProps) {
  return (
    <button
      type={type}
      className={`${
        bgColor === 'brand'
          ? 'bg-healHavenBrand600 text-white hover:bg-healHavenBrand900'
          : 'border border-solid border-healHavenGray300 bg-white text-healHavenGray700 hover:bg-healHavenBrand100'
      } flex w-full items-center justify-center gap-2 rounded-lg px-[1.125rem] py-[0.625rem] text-center transition-colors duration-300`}
    >
      {icon} {text}
    </button>
  );
}

export default Button;
