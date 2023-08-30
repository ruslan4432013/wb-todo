import i18next from 'i18next';
import { getTranslationKey } from './_utils/get-translation-key';

type CustomOptionTypeProps = {
  title: string;
};

export const CustomOption = ({ title }: CustomOptionTypeProps) => {
  const translatedTitle = i18next.t(getTranslationKey(title));

  return <div>{translatedTitle}</div>;
};
