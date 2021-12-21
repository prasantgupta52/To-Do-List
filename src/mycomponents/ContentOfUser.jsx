import React from 'react'
import { useNavigate } from 'react-router-dom'
// import { AddTodo } from './mycomponents/AddTodo';
// import Todos from "./mycomponents/Todos";

export default function ContentOfUser(props) {
  let navigate = useNavigate();
  React.useEffect(() => {
    if(localStorage.getItem("userOfTodo") === null) {
    } else {
      let user = JSON.parse(localStorage.getItem("userOfTodo") || "[]");
      props.setLoggedIn(true);
      props.setUserInfo(user);
      navigate(`/Home/${user.email}`)
    }
  },[navigate])

  return (
    <div>
      <p>hi</p>
      {/* <AddTodo /> */}
      {/* <Todos /> */}
    </div>
  )
}
