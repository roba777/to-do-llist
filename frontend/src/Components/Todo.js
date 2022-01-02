import React from "react";

export default function Todo(props){
    const {_id,
    title, isCompleted}= props.task
    return (
        <div className="Todo">
          <input  type="checkbox" defautchecked={isCompleted} />
          <span style={{ textDecoration: isCompleted ? "line-through" : "none" }}>
            {title}
          </span>
          <button onClick={() => {
            props.deleteTodo(_id)
          }} className="btn btn " >
            <i class="bi bi-trash"></i>
          </button>
        </div>
      );
    }