import React from 'react'

const TodoList = ({todos, deleteTodo}) => {
  return (
    <div className="collection">
     { todos.map(todo => 
        <p key={todo.id} onClick={(e)=>deleteTodo(todo.id)} className="collection-item">{todo.content}</p>)}
    </div>
  )
}

export default TodoList
