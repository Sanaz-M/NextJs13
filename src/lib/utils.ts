import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { GetServerSideProps } from 'next';
import { getServerSession } from 'next-auth';


//cn is a simple JavaScript utility for conditionally joining classNames together.
//The clsx function serves as a faster & smaller drop-in replacement for the classnames module, and can take any number of arguments, each of which can be an Object, Array, Boolean, or String.

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
};
