import { IResponse, RestRequest } from '@mihanizm56/fetch-api';
import { CreateTaskParamsType } from './_types';
import { makeRequestConfig } from './make-request-config';

export const createTaskRequest = (
  body: CreateTaskParamsType,
): Promise<IResponse> => new RestRequest().postRequest(makeRequestConfig(body));
