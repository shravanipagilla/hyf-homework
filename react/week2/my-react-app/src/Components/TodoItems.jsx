import React from "react";
import {useState} from 'react'

export const TodoItem = ({ id, description, onDelete }) => {
    const [status, setStatus] = useState(false);
    return (

        <div className="todo">
            <input type="checkbox" className="checkbox" value={id} onChange={(e => setStatus(e.target.checked))}></input>
            <span className={`texts ${status ? "checkedTodo" : ""}`}>{description}</span>
            <button onClick={() => onDelete(id)}>Delete Todo</button>
        </div>
    )
}

export const AddTodo = ({ onAdd }) => {
    const [value, setValue] = useState("");
    const [visible, setVisible] = useState(false);

    const onClick = () => {
        setVisible(true);
        if (value !== "") {
            setVisible(false);
            onAdd(value);
        }

        setValue("")
    }
    return (
        <div>
            {visible && <input type="text" className="input-text" placeholder="Enter description" onChange={(e => setValue(e.target.value))} ></input>}
            <button onClick={onClick}>{visible ? "Submit" : "Add new Todo"}</button>
        </div>
    )
}
