const express = require("express");
const router = express.Router();
const { Posts } = require("../models"); //grap the model we created models/Posts.js

router.get("/", (req, res) => {
  res.json("Hello World");
});

router.post("/", async (req, res) => {
  const post = req.body;
  await Posts.create(post);
  res.json(post);
});

module.exports = router;
