import React, { useState } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginFunc = (e) => {
    e.preventDefault()
    const userInfo = {
      // "email":email
      email,
      password,
    };
    axios
      .post(`http://localhost:5000/users/login`, userInfo)
      .then((response) => {
        console.log("DATA: ", response.data);
        props.setIsLoggedIn(true);
        props.setUsername(response.data.username);
      })
      .catch((err) => {
        console.log("ERR: ", err);
      });
  };

  return (
    <div className="Login">
      <form action="">
        <label htmlFor="" className="form-control" className="btn btn ">Email : </label>
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
          type="text"
          placeholder="Write email here ..."
        className="form-control" />
        <br />
        <br/>
        <label htmlFor="" className="form-control" className="btn btn ">Password:</label>
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
          type="password"
          placeholder="Write password here ..."
        className="form-control"/>
        <br />
        <br/>
        <input type="submit" value="Login" onClick={loginFunc} className="btn btn-outline-secondary" />
      </form>
      <Link to='/Register'>Do not Have An Accont?</Link>
    </div>
  );
}