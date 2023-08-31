import { APP_NAMESPACE } from '@/_constants/i18next/app-namespace';
import { PAGE_SUB_NAMESPACE } from '@/pages/task-list/page/_constants';

export const getTranslationKey = (value: string) => {
  return `${APP_NAMESPACE}:${PAGE_SUB_NAMESPACE}.${value}`;
};
