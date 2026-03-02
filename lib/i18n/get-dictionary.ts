import type { Locale } from './config';
import en from './dictionaries/en';
import ms from './dictionaries/ms';

const dictionaries = {
  en,
  ms,
};

export const getDictionary = (locale: Locale) => dictionaries[locale];

