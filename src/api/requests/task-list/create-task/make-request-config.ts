import { IRequestParams } from '@mihanizm56/fetch-api';
import { tasksEndpoint } from '@/api/endpoints/tasks';
import { CreateTaskParamsType } from './_types';
import { responseSchema } from './response-schema';

export const makeRequestConfig = (
  params: CreateTaskParamsType,
): IRequestParams => ({
  endpoint: tasksEndpoint,
  responseSchema,
  body: params,
});
