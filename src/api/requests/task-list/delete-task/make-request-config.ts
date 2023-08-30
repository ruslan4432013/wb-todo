import { IRequestParams } from '@mihanizm56/fetch-api';
import { requestTranslateFunction } from '@/_constants/i18next/i18next-constants';
import { getTaskEndpoint } from '@/api/endpoints';
import { responseSchema } from './response-schema';

export const makeRequestConfig = (uuid: string): IRequestParams => ({
  endpoint: getTaskEndpoint(uuid),
  translateFunction: requestTranslateFunction,
  responseSchema,
});
