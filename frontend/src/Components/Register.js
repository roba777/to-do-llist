import React, { useState } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const registerFunc = (e) => {
    e.preventDefault();
    console.log("reg");
    const newUser = {
      // ES6
      email,
      // "email": "email value in the state"
      password,
      username,
    };
    axios
      .post(`http://localhost:5000/users/register`, newUser)
      .then((response) => {
        console.log("DATA: ", response.data);
      })
      .catch((err) => {
        console.log("ERR: ", err);
      });
  };

  return (
    <div className="Register">
      <form action="">
        <label htmlFor="email" className="form-control" className="btn btn ">Email:</label>
        <input
          type="email"
          placeholder="Write email here ..."
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
          className="form-control" />
        <br />
        <label htmlFor="password" className="form-control"className="btn btn ">Password:</label>
        <input
          type="password"
          placeholder="Write password here ..."
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
          className="form-control"/>
        <br />
        <label htmlFor="username" className="form-control" className="btn btn ">Username:</label>
        <input
          type="text"
          placeholder="Write username here ..."
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          value={username}
          className="form-control"/>
        <br />
        <br/>
        <input type="submit" value="Register" onClick={registerFunc}  className="btn btn-outline-secondary"/>
      </form>

      <Link to='/Login'>Have An Accont?</Link>
    </div>
  );
}