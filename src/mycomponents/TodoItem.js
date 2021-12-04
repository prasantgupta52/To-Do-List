import React from 'react'

export default function TodoItem(props) {
  return (
    <div className={props.first===true?"firsttodoofrow card":"card"} styles="width: 18rem;">
      {/* <img src="..." className="card-img-top" alt="..."/> */}
      <div className="card-body">
        <h5 className="card-title">{props.todo.sno}. {props.todo.title}</h5>
        <p className="card-text" >{props.todo.desc}</p>
        <a href="#" className="btn btn-outline-danger" onClick={() => {props.onDelete(props.todo)}}>Delete This Todo</a>
        <a href="#" className="btn btn-outline-primary flo" onClick={() => {props.copyTodo(props.todo.title,props.todo.desc)}} >Copy This Todo</a>
      </div>
    </div>
  )
}
 