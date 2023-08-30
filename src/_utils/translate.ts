import Cookies from 'js-cookie';
import i18next from 'i18next';
import { LangType } from '@/_types/lang';

const LOCALE_KEY = 'locale';

const isLangType = (val: string): val is LangType => ['ru', 'en'].includes(val);

export const changeLang = (lang: string) => {
  if (!isLangType(lang)) {
    throw new Error(`Unknown language: ${lang}`);
  }
  if (i18next.language === lang) {
    return;
  }
  Cookies.set(LOCALE_KEY, lang);
  // eslint-disable-next-line no-restricted-globals
  location.reload();
};
