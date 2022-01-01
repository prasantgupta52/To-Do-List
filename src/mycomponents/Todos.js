import Axios from 'axios';
import React from 'react'
import TodoItem from './TodoItem'
import {serverurl as url1} from '../url';

export default function Todos(props) {

  const userdetail = JSON.parse(localStorage.getItem("userOfTodo"));
  let sno = 1;

  const deletetodo = async (todo, sno) => {
    if (window.confirm(`This todo will be deleted \r\n\r\nSerial No.${sno}\r\nTitle: ${todo.Title}\r\nDescription: ${todo.Description}`)) {
      await Axios.delete(`${url1}/deletetodo/${userdetail._id}/${todo._id}`);
      props.refresh();
    }
  }

  const edittodo = async (todo) => {
    let Title = prompt("enter new title");
    let Desc = prompt("enter new description");
    await Axios.put(`${url1}/updatetodo/${userdetail._id}/${todo._id}`, {
      _id: todo.id,
      Title: Title,
      Description: Desc
    })
  }

  return (
    <>
      <div className="container">
        <h3 className="my-3 text-center">
          Todos List
          <button className="btn btn-success refreshbtn" onClick={props.refresh} >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-repeat" viewBox="0 0 16 16">
              <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" />
              <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z" />
            </svg>
            &nbsp;&nbsp;Refresh
          </button>
        </h3>
        {/* <a className="btn btn-outline-primary flo" onClick={props.refresh} >Refresh Todos</a> */}
        {props.todos.length === 0 ? (
          <div className="card-body card2 card">

            <h5 className="card-title">No Todo's To Display Now Please Add Todo's To Your List</h5>
          </div>
        ) :
          props.todos.map((todo) => {
            let first;
            if (sno % 3 === 1) {
              first = true;
            } else {
              first = false;
            }
            sno++;
            return (<TodoItem todo={todo} first={first} sno={sno - 1} deletetodo={deletetodo} edittodo={edittodo} />)
          })
        }
      </div>
    </>
  )
}
