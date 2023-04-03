import './App.css';
import React, { useState } from 'react';
import Showtodos from './components/Showtodos';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [input,setInput]=useState('');
  const [todos,setTodos]=useState([]);
  const handleSubmit=(e)=>{
    e.preventDefault();
    const id=uuidv4();
    setTodos([...todos,{
      'name':input,
      'id':id
    }])
    setInput('');
  }
  const deleteTodo=(id)=>{
    let newtodos=todos.filter((todo)=>{
      return todo.id !==id;
    })
    setTodos(newtodos);
  }
  return (
    <div className="App">
      <form className='create-todo' onSubmit={handleSubmit}>
        <input type='text' onChange={(e)=>setInput(e.target.value)} value={input}/>
        <button type='submit'>Add todo</button>
      </form>
      <Showtodos todos={todos} deleteTodo={deleteTodo}/>
    </div>
  );
}

export default App;

