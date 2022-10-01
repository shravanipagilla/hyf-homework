import React from "react";

const TodoRender = ({ todoArray }) => {
  return (
    <div>
      <h1 className="todoheader">Todo List</h1>
      {todoArray.map((todoItem) => (
        <div className="todoitem" key={todoItem.id}>
          <h2 className="id">{todoItem.id}</h2>
          <h2 className="title">{todoItem.description}</h2>
          <h2 className="time">{todoItem.deadlineDate}</h2>
        </div>
      ))}
    </div>
  );
};
export default TodoRender;
