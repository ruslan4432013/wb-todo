import { endpoint } from '@/api/endpoints/shared-urls';

export const getTaskEndpoint = (uuid: string) => `${endpoint}/tasks/${uuid}`;

export const tasksEndpoint = `${endpoint}/tasks/`;
