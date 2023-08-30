import classnames from 'classnames/bind';
import { Text } from '@wildberries/ui-kit';
import i18next from 'i18next';
import { TASK_LIST_PAGE_TRANSLATES } from '@/pages/task-list/page/_constants/translations';
import { ConnectedTasks } from './_components/connected-tasks';
import styles from './index.module.scss';

const cn = classnames.bind(styles);

const BLOCK_NAME = 'TaskList';
export const TaskList = () => {
  return (
    <div className={cn(BLOCK_NAME)}>
      <div className={cn(`${BLOCK_NAME}__title`)}>
        <Text size="h2" text={i18next.t(TASK_LIST_PAGE_TRANSLATES.taskList)} />
        <ConnectedTasks />
      </div>
    </div>
  );
};
