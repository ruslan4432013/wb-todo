const { taskModel } = require('../../models/tasks');
const { uuid4 } = require('../../_utils/make-uuid');

// Создание новой задачи
const createTask = (task) => {
  const newTask = {
    uuid: uuid4(),
    name: task.name,
    description: task.description,
    createdAt: new Date().toISOString(),
  };

  taskModel.push(newTask).write();

  return newTask;
};

// Получение списка задач
const getAllTasks = () => {
  return taskModel.value();
};

// Получение задачи по UUID
const getTaskById = (uuid) => {
  return taskModel.find({ uuid }).value();
};

// Обновление задачи по UUID
const updateTask = (uuid, updatedTask) => {
  taskModel.find({ uuid }).assign(updatedTask).write();

  return getTaskById(uuid);
};

// Удаление задачи по UUID
const deleteTask = (uuid) => {
  const taskToDelete = getTaskById(uuid);
  if (taskToDelete) {
    taskModel.remove({ uuid }).write();
  }

  return taskToDelete;
};

module.exports = {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask,
};
