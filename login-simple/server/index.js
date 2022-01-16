const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "LoginExercise",
});

app.post("/register", (req, res) => {
  const userId = req.body.userId;
  const password = req.body.password;
  console.log(userId);
  console.log(password);

  db.query(
    "INSERT INTO users (id, password) VALUES (?,?)",
    [userId, password],
    (error, result) => {
      console.log(error);
    }
  );
});

app.post("/login", (req, res) => {
  const userId = req.body.userId;
  const password = req.body.password;

  db.query(
    "SELECT * FROM users where id = ? AND password = ?",
    [userId, password],
    (error, result) => {
      if (error) {
        res.send({ error: error });
      }
      if (result.length > 0) {
        res.send(result);
      } else {
        res.send({ message: "Wrong username/password combination" });
      }
    }
  );
});

app.listen(3001, () => {
  console.log("running server");
});
