import { InitLoadManagerRequestOptionsType } from '@mihanizm56/redux-core-modules';
import i18next from 'i18next';
import {
  deleteTaskAction,
  startTasksLoadingAction,
  stopTasksLoadingAction,
} from '@/pages/task-list/_redux/task-list-module';
import { deleteTaskRequest } from '@/api/requests/task-list/delete-task';
import { TASK_LIST_PAGE_TRANSLATES } from '@/pages/task-list/page/_constants/translations';
import { responseTaskFormatter } from './formatters/response-task-formatter';

export const getDeleteTaskConfig = (
  uuid: string,
): InitLoadManagerRequestOptionsType => ({
  request: () => deleteTaskRequest(uuid),
  loadingStartAction: startTasksLoadingAction,
  loadingStopAction: stopTasksLoadingAction,
  showErrorNotification: true,
  actionSuccess: (data) => deleteTaskAction(data.task),
  responseDataFormatter: responseTaskFormatter,
  titleMessageError: i18next.t(TASK_LIST_PAGE_TRANSLATES.taskGettingError),
  titleMessageSuccess: i18next.t(TASK_LIST_PAGE_TRANSLATES.taskDeletedSuccess),
  showSuccessNotification: true,
});
