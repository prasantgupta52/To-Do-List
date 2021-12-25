import Axios from 'axios';
import React , { useState } from 'react'
import TodoItem from './TodoItem'

export default function Todos(props) {
  
  const userdetail = JSON.parse(localStorage.getItem("userOfTodo"));
  let sno = 1;
  
  const deletetodo = async (todo,sno) => {
    if(window.confirm(`This todo will be deleted \r\n\r\nSerial No.${sno}\r\nTitle: ${todo.Title}\r\nDescription: ${todo.Description}`)) {
      await Axios.delete(`http://localhost:3001/deletetodo/${userdetail._id}/${todo._id}`);
      props.refresh();
    }
  }

  const edittodo = async (todo) => {
    let Title = prompt("enter new title");
    let Desc = prompt("enter new description");
    await Axios.put(`http://localhost:3001/updatetodo/${userdetail._id}/${todo._id}`,{
      _id: todo.id,
      Title: Title,
      Description: Desc 
    })
  }

  return (
    <>
      <div className="container">
        <h3 className="my-3 text-center">Todos List <a className="btn btn-outline-success refreshbtn" onClick={props.refresh} > Refresh </a></h3>
        {/* <a className="btn btn-outline-primary flo" onClick={props.refresh} >Refresh Todos</a> */}
        {props.todos.length===0? "No todos to display" :
          props.todos.map((todo) => {
            let first;
            if(sno%3===1){
              first=true;
            } else {
              first=false;
            }
            sno++;
            return (<TodoItem todo={todo} first={first} sno={sno-1} deletetodo={deletetodo} edittodo={edittodo}/>)
          })
        }
      </div>
    </>
  )
}
  