'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/todoListController');

//todoList Routes
  app.route('/tasks')
    .get(todoList.listTasks)
    .post(todoList.createTask);

  app.route('/tasks/:taskId')
    .get(todoList.readTask)
    .put(todoList.updateTask)
    .delete(todoList.deleteTask);
};
