import { Field, Form } from 'react-final-form';
import { ButtonLink, FormSimpleInput } from '@wildberries/ui-kit';
import classnames from 'classnames/bind';
import { connect } from 'react-redux';
import { fetchFormManagerSagaAction } from '@mihanizm56/redux-core-modules';
import { FormApi } from 'final-form';
import i18next from 'i18next';
import { useCallback } from 'react';
import { TASK_LIST_PAGE_TRANSLATES } from '@/pages/task-list/page/_constants/translations';
import { TASK_FORM_VALIDATIONS } from '@/pages/task-list/page/_constants/validators';
import {
  CreateTaskType,
  tasksLoadingStateSelector,
} from '@/pages/task-list/_redux/task-list-module';
import { LoadingMeta } from '@/_constants/loading-meta';
import { getCreateConfig } from '@/pages/task-list/_utils/get-create-config';
import styles from './index.module.scss';

type MapStateToPropsType = {
  tasksLoadingState: ReturnType<typeof tasksLoadingStateSelector>;
};

type MapDispatchToPropsType = {
  fetchFormManager: typeof fetchFormManagerSagaAction;
};

type PropsType = MapStateToPropsType & MapDispatchToPropsType;

const cn = classnames.bind(styles);

const BLOCK_NAME = 'CreateTaskForm';

const WrappedComponent = ({
  tasksLoadingState,
  fetchFormManager,
}: PropsType) => {
  const handleFormSubmit = useCallback(
    (values: CreateTaskType, form: FormApi<CreateTaskType>) => {
      fetchFormManager(getCreateConfig({ values, form }));
    },
    [fetchFormManager],
  );
  const buttonText =
    tasksLoadingState === LoadingMeta.Loading
      ? i18next.t(TASK_LIST_PAGE_TRANSLATES.loading)
      : i18next.t(TASK_LIST_PAGE_TRANSLATES.createTask);

  return (
    <Form
      onSubmit={handleFormSubmit}
      render={({ handleSubmit }) => (
        <form className={cn(BLOCK_NAME)} onSubmit={handleSubmit}>
          <Field
            component={FormSimpleInput}
            id="name"
            label={i18next.t(TASK_LIST_PAGE_TRANSLATES.taskTitle)}
            name="name"
            required
            validate={TASK_FORM_VALIDATIONS.name}
          />
          <Field
            component={FormSimpleInput}
            id="description"
            label={i18next.t(TASK_LIST_PAGE_TRANSLATES.taskDescription)}
            name="description"
            required
            validate={TASK_FORM_VALIDATIONS.description}
          />
          <div className={cn(`${BLOCK_NAME}__create-button`)}>
            <ButtonLink text={buttonText} type="submit" variant="accent" />
          </div>
        </form>
      )}
    />
  );
};

const mapStateToProps = (state: RootState): MapStateToPropsType => ({
  tasksLoadingState: tasksLoadingStateSelector(state),
});

const mapDispatchToProps: MapDispatchToPropsType = {
  fetchFormManager: fetchFormManagerSagaAction,
};

export const ConnectedCreateTaskForm = connect<
  MapStateToPropsType,
  MapDispatchToPropsType
>(
  mapStateToProps,
  mapDispatchToProps,
)(WrappedComponent);
