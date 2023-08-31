import React from 'react';
import { IAction, RouteNode } from '@wildberries/service-router';
import { ReduxStoreLoader } from '@mihanizm56/redux-core-modules';
import { AppLayout } from '@/_layouts/app-layout';
import { storeInjectConfig } from './strore-inject-config';
import { TaskPage } from './page';

const pageNode = 'task-list';

const action: IAction = async ({ fromState, toState }) => {
  return {
    title: 'Tasks',
    content: (
      <AppLayout>
        <ReduxStoreLoader
          fromState={fromState}
          storeInjectConfig={storeInjectConfig}
          toState={toState}
        >
          <RouteNode nodeName={pageNode}>
            {({ route, content }) => {
              if (route.name === pageNode) {
                return <TaskPage />;
              }

              return content;
            }}
          </RouteNode>
        </ReduxStoreLoader>
      </AppLayout>
    ),
  };
};

export default action;
