import { LoadingMeta } from '@/_constants/loading-meta';
import { TaskStoreType } from './_types';
import {
  deleteTaskAction,
  errorTasksLoadingAction,
  setTaskListAction,
  startTasksLoadingAction,
  stopTasksLoadingAction,
} from './actions';

export const initialTasksState: TaskStoreType = {
  tasksLoadingState: LoadingMeta.Initial,
  tasks: [],
};

type ActionsType =
  | ReturnType<typeof stopTasksLoadingAction>
  | ReturnType<typeof errorTasksLoadingAction>
  | ReturnType<typeof deleteTaskAction>
  | ReturnType<typeof setTaskListAction>
  | ReturnType<typeof startTasksLoadingAction>;

const taskReducer = (
  state: TaskStoreType = initialTasksState,
  action: ActionsType,
): TaskStoreType => {
  switch (action.type) {
    case startTasksLoadingAction.type: {
      return { ...state, tasksLoadingState: LoadingMeta.Loading };
    }
    case errorTasksLoadingAction.type: {
      return { ...state, tasksLoadingState: LoadingMeta.Error };
    }
    case stopTasksLoadingAction.type: {
      return { ...state, tasksLoadingState: LoadingMeta.Initial };
    }
    case setTaskListAction.type:
      return { ...state, tasks: action.payload };
    case deleteTaskAction.type:
      const tasks = state.tasks.filter(
        (task) => task.uuid !== action.payload.uuid,
      );

      return { ...state, tasks };
    default:
      return state;
  }
};

export default taskReducer;
