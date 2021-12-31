import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AddTodo } from './AddTodo';
import Todos from "./Todos";
import { useEffect, useState } from 'react';
import Axios from 'axios'

export default function ContentOfUser(props) {

  let navigate = useNavigate();

  const [todos ,setTodos] = useState([])
  const [refreshy, setRefreshy] = useState(false);
  let userdetail = JSON.parse(localStorage.getItem("userOfTodo") || "[]");

  useEffect(() => {
    if (localStorage.getItem("userOfTodo") === null) {
    } else {
      let user = JSON.parse(localStorage.getItem("userOfTodo") || "[]");
      props.setLoggedIn(true);
      props.setUserInfo(user);
      navigate(`/Home/${user.email}`)
    }
  }, [navigate])

  React.useEffect(async () => {
    await Axios.get(`http://localhost:3001/fetchtodos/${userdetail._id}`)
    .then((response) => {
      const data = response.data;
      setTodos(data);
    })
  },[refreshy])

  const refresh = () => {
    if(refreshy===true){
      setRefreshy(false);
    } else {
      setRefreshy(true);
    }
  }

  return (
    <div className="contentOfUser bggrey">
      <AddTodo refresh={refresh} />
      <Todos todos={todos} refresh={refresh} />
    </div>
  )
}
