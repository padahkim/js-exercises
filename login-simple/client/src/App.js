import "./App.css";
import { useState, useEffect } from "react";
import Axios from "axios";

function App() {
  const [idReg, setIdReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  const [idLogin, setIdLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");

  const [loginStatus, setLoginStatus] = useState("");

  Axios.defaults.withCredentials = true; //this one necessary

  const register = () => {
    Axios.post("http://localhost:3001/register", {
      userId: idReg,
      password: passwordReg,
    }).then((response) => {
      console.log(response);
    });
  };

  const login = () => {
    //insert data and try to login
    Axios.post("http://localhost:3001/login", {
      userId: idLogin,
      password: passwordLogin,
    }).then((response) => {
      console.log(response);
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        setLoginStatus(response.data[0].id);
      }
    });
  };

  useEffect(() => {
    //whenever refresh page get information from this
    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn === true) {
        setLoginStatus(response.data.user[0].id);
      }
    });
  }, []);

  return (
    <div className="App">
      <div className="registration">
        <h1>Registration</h1>
        <label>ID</label>
        <input
          type="text"
          onChange={(e) => {
            setIdReg(e.target.value);
          }}
        />
        <label>Password</label>
        <input
          type="text"
          onChange={(e) => {
            setPasswordReg(e.target.value);
          }}
        />
        <button onClick={register}>Register</button>
      </div>
      <div className="login">
        <h1>Login</h1>
        <input
          type="text"
          placeholder="id"
          onChange={(e) => {
            setIdLogin(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => {
            setPasswordLogin(e.target.value);
          }}
        />
        <button onClick={login}>Log in</button>
      </div>

      <h1>{loginStatus}</h1>
    </div>
  );
}

export default App;
