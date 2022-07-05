import React from 'react'
import TodoList from './TodoList';
import { useState } from 'react'
import CreateTodo from './CreateTodo';
import { FiSun } from "react-icons/fi";

function TodoContainer() {
  return (
    <>
      <div className='todo-head'>
        <h1>T O D O</h1>
        <FiSun/>
      </div>
      <CreateTodo />
    </>
  )
}

export default TodoContainer