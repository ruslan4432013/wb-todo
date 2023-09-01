// Что приходит с сервера
import { FormApi } from 'final-form';
import { LoadingMeta } from '@/_constants/loading-meta';

export type TaskDtoType = {
  uuid: string;
  createdAt: string;
  description: string;
  name: string;
};

// Модель на фронте
export type TaskType = {
  uuid: string;
  createdAt: Date;
  description: string;
  name: string;
};

export type TaskStoreType = {
  tasksLoadingState: LoadingMeta;
  tasks: Array<TaskType>;
};

export type CreateTaskType = Pick<TaskType, 'name' | 'description'>;

export type SubmitTaskType = {
  values: CreateTaskType;
  form: FormApi<CreateTaskType>;
};

export type UpdateTaskType = {
  values: CreateTaskType;
  uuid: string;
  onSuccess: () => void;
};
