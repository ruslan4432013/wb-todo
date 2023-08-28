const {
  createTask,
  deleteTask,
  getAllTasks,
  updateTask,
  getTaskById,
} = require('./_lib');

const getTasksController = async (req, res) => {
  const tasks = await getAllTasks();
  res.status(200).json({
    result: {
      tasks,
    },
  });
};

// Создание новой задачи
const createTaskController = async (req, res) => {
  const task = req.body; // Предполагается, что данные задачи передаются в теле запроса
  const newTask = createTask(task);
  res.status(201).json({
    result: {
      task: newTask,
    },
  });
};

// Получение задачи по UUID
const getTaskController = async (req, res) => {
  const uuid = req.params.uuid; // Предполагается, что UUID задачи передается в URL
  const task = getTaskById(uuid);
  if (task) {
    res.status(200).json({
      result: {
        task,
      },
    });
  } else {
    res.status(404).json({
      error: 'Задача не найдена',
    });
  }
};

// Обновление задачи по UUID
const updateTaskController = async (req, res) => {
  const uuid = req.params.uuid;
  const updatedTask = req.body; // Предполагается, что данные для обновления задачи передаются в теле запроса
  const task = updateTask(uuid, updatedTask);
  if (task) {
    res.status(200).json({
      result: {
        task,
      },
    });
  } else {
    res.status(404).json({
      error: 'Задача не найдена',
    });
  }
};

// Удаление задачи по UUID
const deleteTaskController = async (req, res) => {
  const uuid = req.params.uuid;
  const deletedTask = deleteTask(uuid);
  if (deletedTask) {
    res.status(200).json({
      result: {
        task: deletedTask,
      },
    });
  } else {
    res.status(404).json({
      error: 'Задача не найдена',
    });
  }
};

module.exports = {
  getTasksController,
  createTaskController,
  getTaskController,
  updateTaskController,
  deleteTaskController,
};
