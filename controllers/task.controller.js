const taskModel = require("../models/task.model");

const getAllTasks = async (req, res) => {
    try {
        const tasks = await taskModel.find({});
        res.status(200).json(tasks);
      }
      catch (error) {
        res.status(500).json({message: error.message});
      }
}

const getAllTasksByUser = async (req, res) => {
    try {
        const tasks = await taskModel.find({userId: req.params.userId});
        res.status(200).json(tasks);
    }
    catch (error) {
        res.status(500).json({message: error.message});
    }
}

const createTask = async (req, res) => {
    try {
      const task = await taskModel.create(req.body);
      res.status(200).json(task);
    }
    catch (error) {
      res.status(500).json({message: error.message});
    }
  }

  module.exports = {getAllTasks, getAllTasksByUser, createTask};