import React from "react";
import TodoRender from "./TodoRender";
const todoArray =[
    {
        id : 1,
        description : 'Get out of bed',
        deadlineDate : ' Wed Sep 13 2017',
    },
    {
        id : 2,
        description :'brush teeth',
        deadlineDate :'Thu Sep 14 2017'

    },

    {
        id : 3,
        description :'Eat breakfast',
        deadlineDate : 'Fri sep 15 2017'
    }
]

export default function TodoItems(){
    return  <TodoRender todoArray={todoArray}/>;
    }