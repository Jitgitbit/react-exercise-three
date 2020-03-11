import React from 'react'

export default function Todos({todos, deleteTodo}) {
  const todoList = todos.length ? (
    todos.map(todo => {
      return(
        <div className='collection-item' key={todo.id}>
          <span onClick={() => {deleteTodo(todo.id)}}>{todo.content}</span>
        </div>
      )
    })
  ) : (
    <h1 className='center green-text'>You have no todo's left, Yay !</h1>
  )
  return (
    <div className='todos collection'>
      {todoList}
    </div>
  )
}
