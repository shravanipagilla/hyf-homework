import React, {useState} from "react";

export function Todo({ description, deadline, onDelete, onUpdate, id }) {
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