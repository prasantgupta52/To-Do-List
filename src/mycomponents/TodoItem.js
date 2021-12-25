import React from 'react'

export default function TodoItem(props) {
  return (
    <div className={props.first===true?"firsttodoofrow card":"card"} styles="width: 18rem;">
      {/* <img src="..." className="card-img-top" alt="..."/> */}
      <div className="card-body">
        <h5 className="card-title">{props.sno}. {props.todo.Title}</h5>
        <p className="card-text" >{props.todo.Description}</p>
        <button className="btn btn-outline-danger" onClick={() => {props.deletetodo(props.todo,props.sno)}}>Delete This Todo</button>
        <button className="btn btn-outline-primary flo" onClick={async () => {props.edittodo(props.todo)}}>Edit This Todo</button>
      </div>
    </div>
  )
}
 