const express = require("express"); // call express from library
const app = express(); // var app is instance of express

app.use(express.json());

const db = require("./models");

const postRouter = require("./routes/Posts");
app.use("/posts", postRouter);

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Server running on port 3001 yeahhhhhhhhhs");
  });
});
