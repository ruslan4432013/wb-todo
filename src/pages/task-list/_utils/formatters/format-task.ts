import {
  TaskDtoType,
  TaskType,
} from '@/pages/task-list/_redux/task-list-module';

export const formatTask = ({
  name,
  description,
  uuid,
  createdAt,
}: TaskDtoType): TaskType => ({
  name,
  description,
  uuid,
  createdAt: new Date(createdAt),
});
