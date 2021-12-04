import React from 'react'
import TodoItem from './TodoItem'

export default function Todos(props) {
  return (
    <>
      <div className="container">
        <h3 className="my-3 text-center">Todos List</h3>
        {props.todos.length===0? "No todos to display" :
          props.todos.map((todo) => {
            let first;
            if(todo.sno%3===1){
              first=true;
            } else {
              first=false;
            }
            return (<TodoItem todo={todo} copyTodo={props.copyTodo} first={first} onDelete={props.onDelete} />)
          })
        }
      </div>
    </>
  )
}
  