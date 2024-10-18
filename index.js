const express = require("express");
const mongoose = require("mongoose");
const userModel = require("./models/user.model")
const taskModel = require("./models/task.model");
const userRoute = require("./routes/user.routes");
const taskRoute = require("./routes/task.routes");
const app = express();

app.use(express.json());

app.use("/api/users", userRoute);

app.use("/api/tasks", taskRoute);

mongoose
  .connect("mongodb://localhost:27017/task_manager")
  .then(() => {
    console.log("Connected to database");
    app.listen(3000, () => {
      console.log("Server started at 3000");
    });
  })
  .catch(() => {
    console.log("Connection to database failed");
  });
