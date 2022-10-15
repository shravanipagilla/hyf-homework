import React from "react"
import { useEffect,useState } from "react";

 const Timer = ({maxRange})=>{
    const [counter,setCounter]= useState(maxRange)
    useEffect(()=>{
        if(counter){
           setTimeout(() =>setCounter(counter + 1),1000)
        }
    })
    return (
        <div>You have used {counter} seconds</div>
    )
  }
  export default Timer;