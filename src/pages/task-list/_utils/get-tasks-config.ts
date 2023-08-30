import { InitLoadManagerRequestOptionsType } from '@mihanizm56/redux-core-modules';
import i18next from 'i18next';
import { getTasksRequest } from '@/api/requests/task-list/get-tasks';
import {
  setTaskListAction,
  startTasksLoadingAction,
  stopTasksLoadingAction,
} from '@/pages/task-list/_redux/task-list-module';
import { TASK_LIST_PAGE_TRANSLATES } from '@/pages/task-list/page/_constants/translations';
import { responseTaskListFormatter } from './formatters/response-task-list-formatter';

export const getTasksConfig: InitLoadManagerRequestOptionsType = {
  request: getTasksRequest,
  loadingStartAction: startTasksLoadingAction,
  loadingStopAction: stopTasksLoadingAction,
  actionSuccess: (data) => setTaskListAction(data.tasks),
  showErrorNotification: true,
  responseDataFormatter: responseTaskListFormatter,
  titleMessageError: i18next.t(TASK_LIST_PAGE_TRANSLATES.taskGettingError),
};
