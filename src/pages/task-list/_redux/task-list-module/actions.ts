import { IReduxAction, IReduxBaseAction } from '@mihanizm56/redux-core-modules';
import { TaskType } from './_types';

export const START_TASKS_LOADING = 'START_TASKS_LOADING';
export const startTasksLoadingAction: IReduxBaseAction<
  typeof START_TASKS_LOADING
> = () => ({
  type: START_TASKS_LOADING,
});

startTasksLoadingAction.type = START_TASKS_LOADING;

const ERROR_TASKS_LOADING = 'ERROR_TASKS_LOADING';
export const errorTasksLoadingAction: IReduxBaseAction<
  typeof ERROR_TASKS_LOADING
> = () => ({
  type: ERROR_TASKS_LOADING,
});

errorTasksLoadingAction.type = ERROR_TASKS_LOADING;

const STOP_TASKS_LOADING = 'CLEAR_TASKS_LOADING';
export const stopTasksLoadingAction: IReduxBaseAction<
  typeof STOP_TASKS_LOADING
> = () => ({
  type: STOP_TASKS_LOADING,
});

stopTasksLoadingAction.type = STOP_TASKS_LOADING;

const SET_TASK_LIST = 'SET_TASKS_LIST';
export const setTaskListAction: IReduxAction<
  Array<TaskType>,
  typeof SET_TASK_LIST
> = (payload) => ({
  type: SET_TASK_LIST,
  payload,
});
setTaskListAction.type = SET_TASK_LIST;

const DELETE_TASK = 'DELETE_TASK';
export const deleteTaskAction: IReduxAction<TaskType, typeof DELETE_TASK> = (
  payload,
) => ({
  type: DELETE_TASK,
  payload,
});
deleteTaskAction.type = DELETE_TASK;
