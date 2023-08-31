import 'fast-text-encoding/text';
/*
    if you need some polyfills and you are not in "rus" or "euro" version
    please insert below (package is included)
    import 'react-app-polyfill/stable';
*/
import 'reset-css';
import React from 'react';
import {
  geti18Next,
  getLocale,
  getI18nextRequestEndpoint,
} from '@wildberries/i18next-utils';
import i18next from 'i18next';
import { createRoot } from 'react-dom/client';
import { createAppStore } from '@mihanizm56/redux-core-modules';
import { configureRouter } from '@wildberries/service-router';
import { ABORT_REQUEST_EVENT_NAME } from '@mihanizm56/fetch-api';
import { Provider } from 'react-redux';
import {
  notificationsState,
  NOTIFICATIONS_REDUCER_NAME,
  setModalAction,
} from '@wildberries/notifications';
import {
  confirmModalModuleReducer,
  confirmModalWatcherSaga,
  CONFIRM_MODALS_REDUCER_NAME,
  CONFIRM_MODAL_SAGA_NAME,
} from '@wildberries/confirm-modal-portal';
import { App } from '@/_components/app';
import { routes } from '@/pages/routes';
import { APP_NAMESPACE } from './_constants/i18next/app-namespace';
import {
  starti18nextLoadingAction,
  stopi18nextLoadingAction,
} from './_redux/ui-module';
import { i18nextRequest } from './api/requests/i18next';
import 'normalize.css';
import '@/styles/global.css';
import '@/styles/variables.module.scss';

const ROOT_ELEMENT = document.getElementById('root');

if (!ROOT_ELEMENT) {
  throw new Error('No root');
}

const router = configureRouter({
  defaultRoute: 'task-list',
  eventNameToCancelRequests: ABORT_REQUEST_EVENT_NAME,
  // uncomment if you need envs from window (for example for request endpoints)
  // enableWindowEnvsMiddleware: true,
  enablei18nMiddleware: true,
});

const store = createAppStore({
  router,
  eventNameToCancelRequests: ABORT_REQUEST_EVENT_NAME,
  rootReducers: {
    [NOTIFICATIONS_REDUCER_NAME]: notificationsState,
    [CONFIRM_MODALS_REDUCER_NAME]: confirmModalModuleReducer,
  },
  rootSagas: {
    [CONFIRM_MODAL_SAGA_NAME]: confirmModalWatcherSaga,
  },
  dependencies: { setModalAction },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const i18nextConfig = {
  getLocale: () => getLocale({ isFromCookie: true }),
  i18next,
  i18nextRequest,
  actionToStartLoading: starti18nextLoadingAction,
  actionToStopLoading: stopi18nextLoadingAction,
  createEndpoint: getI18nextRequestEndpoint,
  formatterResponseData: (data: Record<string, any>) => data.translate,
};

router.setDependencies({
  store,
  routes,
  i18nextConfig,
});

router.add(routes);

geti18Next({
  appNamespace: APP_NAMESPACE,
  locale: getLocale({ isFromCookie: true }),
}).then(() =>
  router.start(() => {
    const root = createRoot(ROOT_ELEMENT);
    root.render(
      <Provider store={store}>
        <App router={router} />
      </Provider>,
    );
  }),
);
