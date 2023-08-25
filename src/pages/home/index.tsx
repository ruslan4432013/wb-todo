import React from 'react';
import { RouteNode } from '@wildberries/service-router';
import { injectAsyncReducer } from '@mihanizm56/redux-core-modules';
import { IAdvancedStore } from '@mihanizm56/redux-core-modules/dist/types';
import { AppLayout } from '@/_layouts/app-layout';
import reducerUI, {
  MODULE_REDUCER_NAME as reducerUIName,
} from '@/_redux/ui-module';
import { Page } from './page';

const pageNode = 'home';

type ActionParamsType = {
  store: IAdvancedStore;
};

const action = async ({ store }: ActionParamsType) => {
  injectAsyncReducer({
    store,
    name: reducerUIName,
    reducer: reducerUI,
  });

  return {
    title: 'Home',
    content: (
      <AppLayout>
        <RouteNode nodeName={pageNode}>
          {({ route, content }) => {
            if (route.name === pageNode) {
              return <Page />;
            }

            return content;
          }}
        </RouteNode>
      </AppLayout>
    ),
  };
};

export default action;
