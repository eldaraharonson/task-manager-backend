const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Helllofdsfdoooo");
});

mongoose
  .connect("mongodb://localhost:27017")
  .then(() => {
    console.log("Connected to database");
    app.listen(3000, () => {
      console.log("Server started at 3000");
    });
  })
  .catch(() => {
    console.log("Connection to database failed");
  });
