const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const bcrypt = require("bcrypt");
const saltRounds = 10;

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true, //allowing cookie to be enabled
  })
);
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    //initialize session
    key: "userId", //name of the cookie you are gonna create
    secret: "subscribe",
    resave: false,
    saveUninitialized: false,
    cookie: {
      //create session which has cookie will be expired 24hrs after created
      expire: 60 * 60 * 24,
    },
  })
);

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "LoginExercise",
});

app.post("/register", (req, res) => {
  const userId = req.body.userId;
  const password = req.body.password;

  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      console.log(err);
    }

    db.query(
      "INSERT INTO users (id, password) VALUES (?,?)",
      [userId, hash],
      (error, result) => {
        console.log(error);
      }
    );
  });
});

app.get("/login", (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
});

app.post("/login", (req, res) => {
  const userId = req.body.userId;
  const password = req.body.password;

  db.query("SELECT * FROM users where id = ?;", userId, (error, result) => {
    if (error) {
      res.send({ error: error });
    }
    if (result.length > 0) {
      bcrypt.compare(password, result[0].password, (error, response) => {
        if (response) {
          req.session.user = result; //create session
          console.log(req.session.user);
          res.send(result);
        } else {
          res.send({ message: "Wrong username/password combination" });
        }
      });
    } else {
      res.send({ message: "User does not exist" });
    }
  });
});

app.listen(3001, () => {
  console.log("running server");
});
