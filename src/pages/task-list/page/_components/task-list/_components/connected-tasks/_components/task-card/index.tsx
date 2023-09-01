import { memo, useCallback, useState } from 'react';
import { TaskType } from '@/pages/task-list/_redux/task-list-module';
import { HandleUpdateParamsType } from './_components/update-card/_types';
import { UpdateCard } from './_components/update-card';
import { ReadCard } from './_components/read-card';

type PropsType = {
  task: TaskType;
  onDelete: (uuid: string) => void;
  handleUpdate: (params: HandleUpdateParamsType) => void;
};

export const TaskCard = memo(({ task, onDelete, handleUpdate }: PropsType) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleDeleteClick = useCallback(() => {
    onDelete(task.uuid);
  }, [onDelete, task.uuid]);

  return isEditing ? (
    <UpdateCard
      handleUpdate={handleUpdate}
      setIsEditing={setIsEditing}
      task={task}
    />
  ) : (
    <ReadCard
      onDelete={handleDeleteClick}
      setIsEditing={setIsEditing}
      task={task}
    />
  );
});
