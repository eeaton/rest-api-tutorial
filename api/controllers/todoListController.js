'use strict';


const mongoose = require('mongoose'),
  Task = mongoose.model('Tasks');

const cb = function(err,task){
  if(err){
    res.send(err);
  } else {
    res.json(task);
  }
}

exports.listTasks = function(req, res) {
  Task.find({}, (err,task)=> {
    if (err){
      res.send(err);
    } else{
      res.json(task);
    }
  })
};

exports.createTask = function(req, res) {
  var newTask = new Task(req.body);
  newTask.save(function(err, task) {
    if (err) {
      res.send(err);
    } else {
      res.json(task);
    }
  });
}

exports.readTask = function(req,res) {
  Task.findById(req.params.taskId, function(err, task){
    console.log(err)
    console.log(res)
    if (err) {
      res.send(err);
    } else{
      res.json(task);
    }
  });
};

exports.updateTask = function(req, res) {
  Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task) {
    if (err){
      res.send(err);
    } else{
      res.json(task);
    }
  });
};

exports.deleteTask = function(req, res) {
  Task.remove({
    _id: req.params.taskId
  }, function(err, task) {
    if(err){
      res.send(err);
    }else {
      res.json({message: 'Task successfully bahleted'});
    }
  });
};
