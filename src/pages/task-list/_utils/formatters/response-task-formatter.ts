import {
  TaskDtoType,
  TaskType,
} from '@/pages/task-list/_redux/task-list-module';
import { formatTask } from './format-task';

type TaskDtoResponseDataType = { task: TaskDtoType };

type TaskResponseDataType = { task: TaskType };
export const responseTaskFormatter = ({
  task,
}: TaskDtoResponseDataType): TaskResponseDataType => {
  return { task: formatTask(task) };
};
