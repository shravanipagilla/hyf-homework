// @ts-nocheck
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Timer from "./Timer.jsx";

const TODO_URL =
  "https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw";

const InputData = ({ addTodo }) => {
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");


  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(description, deadline);
    setDescription("");
    setDeadline("");
  };

  const minDate = () => {
    let newDate = new Date();
    let date = newDate.getDate();
    //let date=("0" + newDate.getDate()).slice(-2);
    let month = newDate.getMonth() + 1;
    //let month = ("0" + (newDate.getMonth() + 1)).slice(-2);
    //let year = newDate.getFullYear();
     let currentDate = newDate.getFullYear() + "-" + month + "-" + date;
  //let currentDate= date+ "-" + month + "-" + newDate.getFullYear();
    return currentDate;
  };



  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="description">Todo Description:</label>
          <input
            type="text"
            required
            id="description"
            value={description}
            placeholder="Description"
            onChange={(e) => {
              const value = e.target.value;
              console.log(value);
              setDescription(value);
            }}
          />
        </div>
        <div>
          <label htmlFor="deadline">Deadline:</label>
          <input
            type="date"
            required 
            id="deadline"
            min={minDate()}
            value={deadline}
            placeholder="Deadline"
            onChange={(e) => {
              const value = e.target.value;
              setDeadline(value);
            }}
          />
        </div>
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

function Todo({ description, deadline, onDelete, onUpdate, id }) {
  const [check, setCheck] = useState(false);
  const [edit, setEdit] = useState(false);
  const [newDescription, setNewDescription] = useState(description);
  const onCheck = () => {
    return setCheck(!check);
  };

  const onEdit = () => {
    setEdit(!edit);
    onUpdate(id, newDescription);
  };
  return (
    <div className="todo">
      <div className="items">
        {edit ? (
          <input
            type="text"
            required
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
        ) : (
          <h3 style={{ textDecoration: check ? "line-through" : "none" }}>
            {id} {description} {deadline}:
          </h3>
        )}
        <input type="checkbox" checked={check} onChange={onCheck} />
      </div>
      <button onClick={onDelete}>Delete</button>
      <button onClick={onEdit}>{edit ? "Update" : "Edit"}</button>
    </div>
  );
}
const Border = ({ children }) => {
  return <div className="styles">{children}</div>;
};

function TodoList() {
  const [todo, setTodo] = useState([]);
  const fetchingData = () => {
    fetch(TODO_URL)
      .then((response) => response.json())
      .then((result) => setTodo(result));
  };

  useEffect(() => {
    fetchingData();
  }, []);

  const addTodo = (description, deadline) => {
    const id = todo.length + 1;
    if (description && deadline) {
      const newTodo = { id, description, deadline };
      return setTodo([...todo, newTodo]);
    }
  };

  const deleteTodo = (id) => {
    const deletedTodo = todo.filter((todoItem) => todoItem.id !== id);
    setTodo(deletedTodo);
  };

  const updateTodo = (id, description) => {
    if (description) {
      const modifyTodos = todo.map((todoItem) => {
        if (todoItem.id === id) {
          todoItem.description = description;
        }
        return todoItem;
      });
      setTodo(modifyTodos);
    }
  };

  return (
   
    <div>
      <h1>Todolist</h1>
      <Timer maxRange={10}/>
       <InputData addTodo={addTodo} />
      {}
      <ul>
      {todo.length > 0
        ? todo.map((todoItem) => (
            <Border key={todoItem.id}> <li> 
              <Todo
              //id={todoItem.id}
               description={todoItem.description}
                deadline={todoItem.deadline}
                onDelete={() => deleteTodo(todoItem.id)}
                onUpdate={updateTodo}
              /></li>
            </Border>
          ))
        : "No Items "}
        </ul>
    </div>
  );
}

Todo.propTypes = {
  id: PropTypes.number,
  description: PropTypes.string,
  deadline: PropTypes.string,
  onDelete: PropTypes.func,
  onUpdate: PropTypes.func,
};

export default TodoList;