import { Field, Form } from 'react-final-form';
import {
  ButtonLink,
  FormSimpleInput,
  FormTextAreaInput,
  Text,
} from '@wildberries/ui-kit';
import i18next from 'i18next';
import classnames from 'classnames/bind';
import { memo, useCallback } from 'react';
import { TASK_LIST_PAGE_TRANSLATES } from '@/pages/task-list/page/_constants/translations';
import { TaskType } from '@/pages/task-list/_redux/task-list-module';
import { HandleUpdateParamsType, UpdateFormValues } from './_types';
import styles from './index.module.scss';

type PropsType = {
  task: TaskType;
  handleUpdate: (values: HandleUpdateParamsType) => void;
  setIsEditing: (value: boolean) => void;
};

const cn = classnames.bind(styles);

const BLOCK_NAME = 'UpdateCard';

export const UpdateCard = memo(
  ({ task, handleUpdate, setIsEditing }: PropsType) => {
    const handleSuccessUpdated = useCallback(() => {
      setIsEditing(false);
    }, [setIsEditing]);

    const handleFormUpdate = useCallback(
      ({ name, description }: UpdateFormValues) => {
        handleUpdate({
          onSuccess: handleSuccessUpdated,
          name,
          description,
          uuid: task.uuid,
        });
      },
      [handleSuccessUpdated, handleUpdate, task.uuid],
    );

    return (
      <Form
        onSubmit={handleFormUpdate}
        render={({ handleSubmit }) => (
          <form className={cn(BLOCK_NAME)} onSubmit={handleSubmit}>
            <div className={cn(`${BLOCK_NAME}__meta`)}>
              <div>
                <Field
                  component={FormSimpleInput}
                  defaultValue={task.name}
                  id="change-name"
                  label={i18next.t(TASK_LIST_PAGE_TRANSLATES.taskTitle)}
                  name="name"
                />
              </div>
              <div>
                <Field
                  component={FormTextAreaInput}
                  defaultValue={task.description}
                  id="change-description"
                  label={i18next.t(TASK_LIST_PAGE_TRANSLATES.taskDescription)}
                  name="description"
                  nonResizable
                />
              </div>
              <div>
                <p>{i18next.t<string>(TASK_LIST_PAGE_TRANSLATES.createdAt)}</p>
                <p>
                  <Text text={task.createdAt.toLocaleString()} />
                </p>
              </div>
            </div>
            <div className={cn(`${BLOCK_NAME}__buttons-wrapper`)}>
              <ButtonLink
                isTextCenter
                text={i18next.t(TASK_LIST_PAGE_TRANSLATES.save)}
                type="submit"
                variant="accent"
              />
            </div>
          </form>
        )}
      />
    );
  },
);
