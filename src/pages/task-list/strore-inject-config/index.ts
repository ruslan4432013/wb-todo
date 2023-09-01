import { StoreInjectConfig } from '@mihanizm56/redux-core-modules/dist/containers/redux-store-loader/types';
import reducerUI, {
  MODULE_REDUCER_NAME as reducerUIName,
} from '@/_redux/ui-module';
import taskReducer, {
  TASKS_REDUCER_NAME as tasksReducerName,
} from '../_redux/task-list-module';

export const storeInjectConfig = {
  reducersToInject: [
    {
      name: reducerUIName,
      reducer: reducerUI,
    },
    {
      name: tasksReducerName,
      reducer: taskReducer,
    },
  ],
  // При strict: true, типизация storeInjectConfig: StoreInjectConfig выдает ошибку
  // (некорректно обрабатываются Actions c Payload)
} as StoreInjectConfig;
