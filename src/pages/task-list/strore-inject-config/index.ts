import { StoreInjectConfig } from '@mihanizm56/redux-core-modules/dist/containers/redux-store-loader/types';
import reducerUI, {
  MODULE_REDUCER_NAME as reducerUIName,
} from '@/_redux/ui-module';

export const storeInjectConfig = {
  reducersToInject: [
    {
      name: reducerUIName,
      reducer: reducerUI,
    },
  ],
  // При strict: true, типизация storeInjectConfig: StoreInjectConfig выдает ошибку
  // (некорректно обрабатываются Actions c Payload)
} as StoreInjectConfig;
