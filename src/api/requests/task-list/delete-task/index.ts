import { IResponse, RestRequest } from '@mihanizm56/fetch-api';
import { makeRequestConfig } from './make-request-config';

export const deleteTaskRequest = (uuid: string): Promise<IResponse> =>
  new RestRequest().deleteRequest(makeRequestConfig(uuid));
