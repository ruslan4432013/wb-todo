const path = require('path');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const dataJSONFilePath = path.resolve('server', 'models', 'tasks', 'data.json');
const adapter = new FileSync(dataJSONFilePath);
const database = low(adapter);

module.exports.taskModel = database.get('tasks');
