import { APP_NAMESPACE } from '@/_constants/i18next/app-namespace';
import { I18N_DICTIONARY } from '@/_assets/i18next/dictionary';

export default {
  name: 'task-list',
  path: '/task-list',
  loadAction: () => import('./index'),
  params: {
    endpointsConfig: {
      fromWindow: true,
      staticPath: 'publicPathForReplace',
    },
  },
  i18n: {
    namespaces: [APP_NAMESPACE],
    version: 'appVersion',
    localDictionaryFiles: I18N_DICTIONARY,
  },
};
