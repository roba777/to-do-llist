import React, {useState, useEffect} from 'react';
import "./App.css";

import axios from 'axios'
import Todo from "./Components/Todo";
import Add  from "./Components/Add";
import Register from './Components/Register';
import Login from './Components/Login';
import { Route, Routes , Link } from 'react-router-dom';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    // should bring data using axios
    // from backend (GET /tasks)
    axios
      .get(`http://localhost:5000/tasks`)
      .then((response) => {
        // console.log('RESPONSE: ', response);
        console.log("DATA: ", response.data);
        setTasks(response.data);
      })
      .catch((err) => {
        console.log("ERR: ", err);
      });
  };

  const postNewTodo = (body) => {
    // console.log("func postNewTodo from APP");
    // {"title":"task 5","isCompleted": false}
    axios
      .post(`http://localhost:5000/tasks`, body)
      .then((response) => {
        // console.log('RESPONSE: ', response);
        console.log("DATA: ", response.data);
        // setTasks(response.data);
        getData();
        // change react hooks state using spread operator
      })
      .catch((err) => {
        console.log("ERR: ", err);
      });
  };

  const deleteTodo = (id) => {
    axios
      .delete(`http://localhost:5000/tasks/${id}`)
      //     (`http://localhost:5000/tasks/${id}`)
      .then((response) => {
        // console.log('RESPONSE: ', response);
        console.log("DATA: ", response.data);
        getData();
        // change react hooks state using spread operator
      })
      .catch((err) => {
        console.log("ERR: ", err);
      });
  };

  const toggleTodo = (id, newStatus) => {
    axios
      .put(`http://localhost:5000/tasks/${id}/${newStatus}`)
      .then((response) => {
        // console.log('RESPONSE: ', response);
        console.log("DATA: ", response.data);
        getData();
        // change react hooks state using spread operator
      })
      .catch((err) => {
        console.log("ERR: ", err);
      });
  };

  const deleteTasks = () => {
    axios
      .delete(`http://localhost:5000/tasks`)
      //     (`http://localhost:5000/tasks/${id}`)
      .then((response) => {
        // console.log('RESPONSE: ', response);
        console.log("DATA: ", response.data);
        getData();
        // change react hooks state using spread operator
      })
      .catch((err) => {
        console.log("ERR: ", err);
      });
  };

  const filterData = (status) => {
    // should bring data using axios
    // from backend (GET /tasks)
    axios
      .get(`http://localhost:5000/filter?isCompleted=${status}`)
      .then((response) => {
        // console.log('RESPONSE: ', response);
        console.log("DATA: ", response.data);
        setTasks(response.data);
      })
      .catch((err) => {
        console.log("ERR: ", err);
      });
  };
  const mapOverTasks = tasks.map((taskObj, i) => (
    <Todo
      key={taskObj._id}
      task={taskObj}
      deleteTodo={deleteTodo}
      toggleTodo={toggleTodo}
    />
  ));
const logoutFunc= () =>{
  setIsLoggedIn(false);
  setUsername("");
}
  return (
    <div className="App">
      
      <p>{username}</p>
      {/*
      <nav>
        <Link to="/home">Home</Link> {" | "}
        <Link to="/login">Login</Link> {" | "}
        <Link to="/register">Register</Link>
      </nav>
      */}

      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            TO DO LIST
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link to="/home" className="nav-link">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/register" className="nav-link">
                  Register
                </Link>
              </li>
              <button onClick={logoutFunc} className="btn btn-outline-secondary">Logout </button>
            </ul>
          </div>
        </div>
      </nav>


      
      <br />
      <br/>

      <Routes>
        <Route
          path="/home"
          element={
            <div className="Home">
              <div>
              {/* click on button should bring all Data */}
              <button onClick={getData} className="btn btn-outline-secondary">GET TASKS</button> {" | "}
              <button onClick={deleteTasks}  className="btn btn-outline-secondary">DELETE Completed tasks </button> {" | "}
              <button
                onClick={() => {
                  filterData(true);
                }}
                className="btn btn-outline-secondary">
                GET DONE 
              </button> {" | "}
              <button
                onClick={() => {
                  filterData(false);
                }}
                className="btn btn-outline-secondary">
                GET PENDING
              </button>
              <Add createFunc={postNewTodo} />
              {mapOverTasks}
              </div>
            </div>
            
          }
        />
         <Route
          path="/login"
          element={
            <Login setIsLoggedIn={setIsLoggedIn} setUsername={setUsername} />
          }
        />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}
