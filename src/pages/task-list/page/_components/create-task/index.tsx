import { Text } from '@wildberries/ui-kit';
import classnames from 'classnames/bind';
import i18next from 'i18next';
import { TASK_LIST_PAGE_TRANSLATES } from '@/pages/task-list/page/_constants/translations';
import { ConnectedCreateTaskForm } from './_components/connected-create-task-form';
import styles from './index.module.scss';

const cn = classnames.bind(styles);

const BLOCK_NAME = 'CreateTask';

export const CreateTask = () => {
  return (
    <div className={cn(BLOCK_NAME)}>
      <Text size="h2" text={i18next.t(TASK_LIST_PAGE_TRANSLATES.createTask)} />
      <ConnectedCreateTaskForm />
    </div>
  );
};
