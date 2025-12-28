import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { TechDetails } from './types';

export const mergeClasses = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const copyTextToClipboard = async (text: string) => {
  if ('clipboard' in navigator) {
    return await navigator.clipboard.writeText(text);
  } else {
    return document.execCommand('copy', true, text);
  }
};

export const isTech = (tech: TechDetails | undefined): tech is TechDetails =>
  tech !== undefined;

