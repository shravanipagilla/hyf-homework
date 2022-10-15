import React, {useState} from "react";

export const InputData = ({ addTodo }) => {
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
      let month = newDate.getMonth() + 1;
      let currentDate = newDate.getFullYear() + "-" + month + "-" + date;
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