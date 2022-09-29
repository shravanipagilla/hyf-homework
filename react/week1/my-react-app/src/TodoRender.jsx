
import React from "react";
 
import Todo from "./Todo";

const TodoRender =  ({todoArray}) =>{
    return (
        <div> 
         <h1 className="todoheader">Todo List</h1>  {todoArray.map((todoItem)=>
            <Todo key ={todoItem.id}
            id = {todoItem.id}
            description={todoItem.description}
            deadlineDate={todoItem.deadlineDate}/>)}
            
        </div>
    )
}
export default TodoRender;