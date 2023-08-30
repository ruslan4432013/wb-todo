import {
  TaskDtoType,
  TaskType,
} from '@/pages/task-list/_redux/task-list-module';
import { formatTask } from './format-task';

type TaskDtoResponseDataType = { tasks: Array<TaskDtoType> };

type TaskResponseDataType = { tasks: Array<TaskType> };

export const responseTaskListFormatter = ({
  tasks,
}: TaskDtoResponseDataType): TaskResponseDataType => {
  return { tasks: tasks.map(formatTask) };
};
