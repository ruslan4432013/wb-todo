import { Label, Text, ButtonLink } from '@wildberries/ui-kit';
import classnames from 'classnames/bind';
import i18next from 'i18next';
import { memo, useCallback } from 'react';
import { TaskType } from '@/pages/task-list/_redux/task-list-module';
import { TASK_LIST_PAGE_TRANSLATES } from '@/pages/task-list/page/_constants/translations';
import styles from './index.module.scss';

type PropsType = {
  task: TaskType;
  onDelete: () => void;
  setIsEditing: (value: boolean) => void;
};

const cn = classnames.bind(styles);

const BLOCK_NAME = 'ReadCard';

export const ReadCard = memo(
  ({
    task: { name, description, createdAt },
    onDelete,
    setIsEditing,
  }: PropsType) => {
    const handleEditClick = useCallback(() => {
      setIsEditing(true);
    }, [setIsEditing]);

    return (
      <div className={cn(BLOCK_NAME)}>
        <div className={cn(`${BLOCK_NAME}__meta`)}>
          <div>
            <Label htmlFor="task-title">
              {i18next.t(TASK_LIST_PAGE_TRANSLATES.taskTitle)}
            </Label>
            <p id="task-title">
              <Text text={name} />
            </p>
          </div>
          <div>
            <Label htmlFor="task-description">
              {i18next.t(TASK_LIST_PAGE_TRANSLATES.taskDescription)}
            </Label>
            <p id="task-description">
              <Text text={description} />
            </p>
          </div>
          <div>
            <Label htmlFor="creation-date">
              {i18next.t(TASK_LIST_PAGE_TRANSLATES.createdAt)}
            </Label>
            <p id="creation-date">
              <Text text={createdAt.toLocaleString()} />
            </p>
          </div>
        </div>

        <div className={cn(`${BLOCK_NAME}__buttons-wrapper`)}>
          <ButtonLink
            isTextCenter
            onClick={handleEditClick}
            text={i18next.t(TASK_LIST_PAGE_TRANSLATES.edit)}
            type="button"
            variant="accent"
          />
          <ButtonLink
            isTextCenter
            onClick={onDelete}
            text={i18next.t(TASK_LIST_PAGE_TRANSLATES.delete)}
            type="button"
            variant="accent"
          />
        </div>
      </div>
    );
  },
);
