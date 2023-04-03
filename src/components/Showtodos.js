import React from 'react';
import {AiFillEdit} from "react-icons/ai"
import {AiFillDelete} from "react-icons/ai"

export default function showTodos(props) {
  return (
    <ul>
      {
        props.todos.map((todo)=>{
          return(
            <li key={todo.id}>{todo.name} <AiFillEdit/> <AiFillDelete onClick={()=>props.deleteTodo(todo.id)}/></li>
          )
        })
      }
    </ul>
  )
}
