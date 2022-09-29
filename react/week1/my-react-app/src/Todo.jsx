import React from "react";
import "./todo.css";

const Todo = ({id,description,deadlineDate}) =>{
    return (
    <div className="todoitem">
        <h2 className="id">{id}</h2>
        <h2 className="title">{description}</h2>
        <h2 className="time">{deadlineDate}</h2>
     </div>

    )
}

export default Todo;