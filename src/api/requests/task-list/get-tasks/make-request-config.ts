import { IRequestParams } from '@mihanizm56/fetch-api';
import { requestTranslateFunction } from '@/_constants/i18next/i18next-constants';
import { tasksEndpoint } from '@/api/endpoints/tasks';
import { responseSchema } from './response-schema';

export const makeRequestConfig = (): IRequestParams => ({
  endpoint: tasksEndpoint,
  translateFunction: requestTranslateFunction,
  responseSchema,
});
