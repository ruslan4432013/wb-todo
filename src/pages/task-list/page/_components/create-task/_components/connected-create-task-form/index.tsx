import { Field, Form } from 'react-final-form';
import { ButtonLink, FormSimpleInput } from '@wildberries/ui-kit';
import classnames from 'classnames/bind';
import i18next from 'i18next';
import { TASK_LIST_PAGE_TRANSLATES } from '@/pages/task-list/page/_constants/translations';
import { TASK_FORM_VALIDATIONS } from '@/pages/task-list/page/_constants/validators';
import { noop } from '@/_utils/noop';
import styles from './index.module.scss';

const cn = classnames.bind(styles);

const BLOCK_NAME = 'CreateTaskForm';

export const CreateTaskForm = () => {
  return (
    <Form
      onSubmit={noop}
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
            <ButtonLink
              text={i18next.t(TASK_LIST_PAGE_TRANSLATES.createTask)}
              type="submit"
              variant="accent"
            />
          </div>
        </form>
      )}
    />
  );
};
