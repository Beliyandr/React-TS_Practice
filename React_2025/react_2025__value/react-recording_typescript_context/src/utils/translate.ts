import { Lang } from '../types/Lang';

type Dictionary = {
  [key: string]: string;
};

const en: Dictionary = {
  'homePage.title': 'Home Page',
  'homePage.content': 'Some page content',
  'footer.greeting': 'Welcome to Mate academy',
};

const ua: Dictionary = {
  'homePage.title': 'Домашня сторінка',
  'homePage.content': 'Тут буде якийсь вміст',
  'footer.greeting': 'Вітаємо в Mate academy',
};

const dictionaries = { en, ua };

export function translate(key: string, lang = Lang.EN) {
  const dictionary = dictionaries[lang] || en;

  return dictionary[key] || key;
}
