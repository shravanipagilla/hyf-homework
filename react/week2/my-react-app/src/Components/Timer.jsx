import React ,{useState,useEffect} from 'react';

 const Timer = ({maxRange})=>{
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

  export default Timer;
  