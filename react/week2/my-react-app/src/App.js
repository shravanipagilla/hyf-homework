import React, {useState } from "react";
import Timer from "./Components/Timer";
import { arrayOfTodos } from "./Components/todoArray";
import Todos from "./Components/Todos";
import './App.css'
import { AddTodo } from "./Components/TodoItems";

function App() {
  const [todos, setTodos] = useState(arrayOfTodos);
 //adding todo
  const onAdd = (description) => {
    if (description) {
      const id = Math.floor(Math.random() * (100 - 4 + 1)) + 4;
      setTodos(todos.concat({
        id: id,
        description: description
      }
      ))
    }
  }
  //deleting todo
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }
 return (
    <div className="todo-app">
      <h1>Todo List </h1>
      <Timer maxRange={10}/>
      { todos.length > 0 ?
        <Todos todoArray={todos} onDelete={deleteTodo} /> : "No items"
        }
        <AddTodo onAdd={onAdd}/>
    </div>
  );
}

export default App;