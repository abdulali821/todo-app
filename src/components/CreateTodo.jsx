import React from 'react'
import { useState } from 'react'
import TodoList from './TodoList';

function CreateTodo() {
    const [Input, setInput] = useState("");
  return (
    <>
    <div className="create-todo">
        <input maxLength={50} onChange={(e)=>{setInput(e.target.value)}} type="text" placeholder='Create a new todo...'/>
        <button type="button">Add</button>
    </div>
    <TodoList text={Input}/>
    </>
  )
}

export default CreateTodo