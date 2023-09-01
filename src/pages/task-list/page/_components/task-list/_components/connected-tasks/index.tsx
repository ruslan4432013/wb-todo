import { connect } from 'react-redux';
import { useCallback, useEffect } from 'react';
import {
  fetchFormManagerSagaAction,
  initLoadManagerActionSaga,
} from '@mihanizm56/redux-core-modules';
import classnames from 'classnames/bind';
import { Text } from '@wildberries/ui-kit';
import i18next from 'i18next';
import { tasksSelector } from '@/pages/task-list/_redux/task-list-module';
import { getTasksConfig } from '@/pages/task-list/_utils/get-tasks-config';
import { TaskCard } from '@/pages/task-list/page/_components/task-list/_components/connected-tasks/_components/task-card';
import { getDeleteTaskConfig } from '@/pages/task-list/_utils/get-delete-config';
import { TASK_LIST_PAGE_TRANSLATES } from '@/pages/task-list/page/_constants/translations';
import { getUpdateConfig } from '@/pages/task-list/_utils/get-update-config';
import { HandleUpdateParamsType } from './_components/task-card/_components/update-card/_types';
import styles from './index.module.scss';

type MapStateToPropsType = {
  tasks: ReturnType<typeof tasksSelector>;
};

type MapDispatchToPropsType = {
  initLoadManager: typeof initLoadManagerActionSaga;
  fetchFormManager: typeof fetchFormManagerSagaAction;
};

type PropsType = MapStateToPropsType & MapDispatchToPropsType;

const cn = classnames.bind(styles);

const BLOCK_NAME = 'Tasks';

const Tasks = ({ tasks, initLoadManager, fetchFormManager }: PropsType) => {
  useEffect(() => {
    initLoadManager({
      requestConfigList: [getTasksConfig],
    });
  }, [initLoadManager]);

  const handleDelete = useCallback(
    (uuid: string) => {
      initLoadManager({
        requestConfigList: [getDeleteTaskConfig(uuid)],
      });
    },
    [initLoadManager],
  );

  const handleUpdate = useCallback(
    ({ uuid, onSuccess, name, description }: HandleUpdateParamsType) => {
      fetchFormManager(
        getUpdateConfig({
          values: {
            name,
            description,
          },
          uuid,
          onSuccess,
        }),
      );
    },
    [fetchFormManager],
  );
  // Здесь useMemo не нужен - возвращаемое значение - примитив,
  // и пересчитывать при ререндере tasks.length !== 0 гораздо легче, чем выполнять логику useMemo
  const hasTasks = tasks.length !== 0;

  return (
    <div className={cn(BLOCK_NAME)}>
      {hasTasks ? (
        tasks.map((task) => (
          <TaskCard
            key={task.uuid}
            handleUpdate={handleUpdate}
            onDelete={handleDelete}
            task={task}
          />
        ))
      ) : (
        <Text text={i18next.t(TASK_LIST_PAGE_TRANSLATES.noTasks)} />
      )}
    </div>
  );
};

const mapStateToProps = (state: RootState): MapStateToPropsType => ({
  tasks: tasksSelector(state),
});

const mapDispatchToProps: MapDispatchToPropsType = {
  initLoadManager: initLoadManagerActionSaga,
  fetchFormManager: fetchFormManagerSagaAction,
};

export const ConnectedTasks = connect<
  MapStateToPropsType,
  MapDispatchToPropsType
>(
  mapStateToProps,
  mapDispatchToProps,
)(Tasks);
