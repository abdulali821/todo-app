import React from 'react'

function TodoList(props) {
  return (
    <div className="todo-item">
        {props.text}
    </div>
  )
}

export default TodoList