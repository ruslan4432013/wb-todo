const express = require('express');
const {
  createTaskController,
  deleteTaskController,
  getTaskController,
  getTasksController,
  updateTaskController,
} = require('../../controllers/tasks');

const tasksRouter = express.Router();

tasksRouter.get('/', getTasksController);
tasksRouter.post('/', createTaskController);
tasksRouter.get('/:uuid', getTaskController);
tasksRouter.delete('/:uuid', deleteTaskController);
tasksRouter.put('/:uuid', updateTaskController);

module.exports.tasksRouter = tasksRouter;
