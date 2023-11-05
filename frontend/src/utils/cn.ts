import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// eslint-disable-next-line import/prefer-default-export
export const cn = (...args: ClassValue[]) => {
  return twMerge(clsx(args));
};
