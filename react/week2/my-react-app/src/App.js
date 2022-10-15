import React, { useEffect, useState } from "react";
import Todos from './Todos/Todos';
import AddTodo from './Todos/AddTodo';
import './App.css';

const arrayOfTodos = [
  {
    id: 1,
    description: "Get out of bed",
  },
  {
    id: 2,
    description: "Brush teeth",
  },
  {
    id: 3,
    description: "Eat breakfast",
  },
];

export const Timer = ({maxRange})=>{
  const [counter,setCounter]= useState(maxRange)
  useEffect(()=>{
      if(counter){
         setTimeout(() =>setCounter(counter + 1),1000)
      }
  })
  return (
      <div>You are using this webpage from {counter} seconds</div>
  )
}

function App() {
  const [todos, setTodos] = useState(arrayOfTodos);
 
  //adding todo
  const addTodo = (description) => {
    if (description) {
      const id = Math.floor(Math.random() * (100 - 4 + 1)) + 4;
      console.log(id)
      setTodos(...todos, {
        id: id,
        description: description
      }
      ))
    }
  }
  //deleting todo
  const deleteTodo = (id) => {
    console.log("delete", id)
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div className="todo-app">
      <h1>Todo List </h1>
      <Timer maxRange={10}/>
      { todos.length > 0 ?
        <Todos todoArray={todos} onDelete={deleteTodo} /> : "No items"
        }
      <AddTodo onAdd={addTodo} />
    </div>
  );
}

export default App;