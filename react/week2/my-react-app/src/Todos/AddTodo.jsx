import React, { useState } from "react";
// @ts-ignore

const AddTodo = ({ onAdd }) => {
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
export default AddTodo;