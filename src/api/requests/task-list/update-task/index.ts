import { IResponse, RestRequest } from '@mihanizm56/fetch-api';
import { UpdateTaskParamsType } from './_types';
import { makeRequestConfig } from './make-request-config';

export const updateTaskRequest = (
  params: UpdateTaskParamsType,
): Promise<IResponse> =>
  new RestRequest().putRequest(makeRequestConfig(params));
