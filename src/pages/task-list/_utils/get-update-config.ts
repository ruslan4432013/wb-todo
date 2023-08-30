import {
  FormManagerType,
  initLoadManagerActionSaga,
} from '@mihanizm56/redux-core-modules';
import i18next from 'i18next';
import { responseTaskFormatter } from '@/pages/task-list/_utils/formatters/response-task-formatter';
import { updateTaskRequest } from '@/api/requests/task-list/update-task';
import { TASK_LIST_PAGE_TRANSLATES } from '@/pages/task-list/page/_constants/translations';
import {
  startTasksLoadingAction,
  stopTasksLoadingAction,
  UpdateTaskType,
} from '../_redux/task-list-module';
import { getTasksConfig } from './get-tasks-config';

export const getUpdateConfig = ({
  values,
  uuid,
  onSuccess,
}: UpdateTaskType): FormManagerType => ({
  formValues: values,
  loadingStartAction: startTasksLoadingAction,
  loadingStopAction: stopTasksLoadingAction,
  showNotification: true,
  formRequest: ({ body }) =>
    updateTaskRequest({ name: body.name, uuid, description: body.description }),
  textMessageSuccess: i18next.t(TASK_LIST_PAGE_TRANSLATES.taskUpdatedSuccess),
  titleMessageError: i18next.t(TASK_LIST_PAGE_TRANSLATES.taskUpdatedError),
  responseDataFormatter: responseTaskFormatter,
  formSuccessAction: () =>
    initLoadManagerActionSaga({
      requestConfigList: [getTasksConfig],
    }),
  callBackOnSuccess: onSuccess,
});
