import { IRequestParams } from '@mihanizm56/fetch-api';
import { getTaskEndpoint } from '@/api/endpoints/tasks';
import { UpdateTaskParamsType } from './_types';
import { responseSchema } from './response-schema';

export const makeRequestConfig = ({
  name,
  uuid,
  description,
}: UpdateTaskParamsType): IRequestParams => ({
  endpoint: getTaskEndpoint(uuid),
  responseSchema,
  body: { name, description },
});
