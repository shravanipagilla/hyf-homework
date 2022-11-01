
import './App.css';
import React from 'react';
import TodoList from './components/TodoList';
import Timer from './components/Timer';

function App() {
  
  return (
    <div className="App">
      <h1>Todolist</h1>
      <Timer maxRange={10}/>
      <TodoList/>
     </div>
  );
}

export default App;
