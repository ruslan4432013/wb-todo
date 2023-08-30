import {
  FormManagerType,
  initLoadManagerActionSaga,
} from '@mihanizm56/redux-core-modules';
import i18next from 'i18next';
import { createTaskRequest } from '@/api/requests/task-list/create-task';
import { responseTaskFormatter } from '@/pages/task-list/_utils/formatters/response-task-formatter';
import { TASK_LIST_PAGE_TRANSLATES } from '@/pages/task-list/page/_constants/translations';
import {
  startTasksLoadingAction,
  stopTasksLoadingAction,
} from '../_redux/task-list-module';
import { SubmitTaskType } from '../_redux/task-list-module/_types';
import { getTasksConfig } from './get-tasks-config';

export const getCreateConfig = ({
  values,
  form,
}: SubmitTaskType): FormManagerType => ({
  formValues: values,
  loadingStartAction: startTasksLoadingAction,
  loadingStopAction: stopTasksLoadingAction,
  showNotification: true,
  formRequest: ({ body }) => createTaskRequest(body),
  textMessageSuccess: i18next.t(TASK_LIST_PAGE_TRANSLATES.taskCreatedSuccess),
  titleMessageError: i18next.t(TASK_LIST_PAGE_TRANSLATES.taskCreatedError),
  responseDataFormatter: responseTaskFormatter,
  formSuccessAction: () =>
    initLoadManagerActionSaga({
      requestConfigList: [getTasksConfig],
    }),
  callBackOnSuccess: () => form.reset(),
});
