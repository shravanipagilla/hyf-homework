// @ts-nocheck
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {InputData} from "./InputData"
import {Todo} from './Todo'

const TODO_URL =
  "https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw";

const Border = ({ children }) => {
  return <div className="styles">{children}</div>;
};

function TodoList() {
  const [todo, setTodo] = useState([]);
  const fetchingData = () => {
    fetch(TODO_URL)
      .then((response) => response.json())
      .then((result) => setTodo(result))
      .catch((error) => {
        console.error('Error:', error);
      });
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
       <InputData addTodo={addTodo} />
      <ul>
      {todo.length > 0
        ? todo.map((todoItem) => (
            <Border key={todoItem.id}> <li> 
              <Todo
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