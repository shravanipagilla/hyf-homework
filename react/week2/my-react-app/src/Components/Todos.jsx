import React from "react";
import {TodoItem} from "./TodoItems";

const Todos = ({ todoArray, onDelete }) => {
    return (
        <ul>
            {todoArray.map((todo) => {
                return <li key={todo.id}>
                    <TodoItem id={todo.id} description={todo.description} onDelete={onDelete} />
                </li>
            })}
        </ul>
    )
}

export default Todos