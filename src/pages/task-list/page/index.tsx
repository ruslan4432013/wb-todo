import { memo } from 'react';
import classnames from 'classnames/bind';
import { TaskList } from './_components/task-list';
import { Header } from './_components/header';
import { CreateTask } from './_components/create-task';
import styles from './index.module.scss';

const cn = classnames.bind(styles);

const BLOCK_NAME = 'TaskPage';

export const TaskPage = memo(() => (
  <div className={cn(BLOCK_NAME)} data-page="task-list">
    <Header />
    <div className={cn(`${BLOCK_NAME}__tasks-section`)}>
      <CreateTask />
      <TaskList />
    </div>
  </div>
));
