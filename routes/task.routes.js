const express = require("express");
const router = express.Router();
const taskController = require("../controllers/task.controller");

router.get("/", taskController.getAllTasks);

router.get("/:userId", taskController.getAllTasksByUser);

router.post("/", taskController.createTask);

module.exports = router;