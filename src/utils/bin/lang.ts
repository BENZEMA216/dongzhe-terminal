let currentLang: 'en' | 'zh' = 'en';

export const getLang = () => currentLang;

export const setLang = (l: 'en' | 'zh') => {
  currentLang = l;
};

export const t = (en: string, zh: string): string => {
  return currentLang === 'en' ? en : zh;
};
