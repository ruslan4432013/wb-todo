import { createSelector } from 'reselect';
import { TASKS_REDUCER_NAME } from './constants';
import { TaskStoreType } from './_types';
import { initialTasksState } from './task-reducer';

export const tasksStoreSelector = (store: RootState) =>
  store[TASKS_REDUCER_NAME] || initialTasksState;

export const tasksSelector = createSelector(
  tasksStoreSelector,
  ({ tasks }: TaskStoreType) => tasks,
);

export const tasksLoadingStateSelector = createSelector(
  tasksStoreSelector,
  ({ tasksLoadingState }: TaskStoreType) => tasksLoadingState,
);
