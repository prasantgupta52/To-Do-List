import './App.css';
import './app2.css';
import React, { useState, useEffect } from 'react';
import Header from "./mycomponents/Header";
import Footer from "./mycomponents/Footer";
import Todos from "./mycomponents/Todos";
import { AddTodo } from './mycomponents/AddTodo';
import SignInSignUp from './mycomponents/SignInSignUp';
import SignUp from './mycomponents/SignUp';
import SignIn from './mycomponents/SignIn';
import Content from './mycomponents/Content';
import HeaderSigned from './mycomponents/HeaderSigned';
import FooterSigned from './mycomponents/FooterSigned';
import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";




function App() {
  
  const createAccount = (username, password, cpassword) => {
    console.log("heythere");
    let initialtodo = [];
    let databasename = { username };
    if (password === cpassword) {
      if (localStorage.getItem(databasename.username) === null) {
        const userprofile = {
          username: username,
          password: password,
          cpassword: cpassword,
        }
        localStorage.setItem(databasename.username, JSON.stringify(userprofile))
      } else {
        alert("your account already Exists try Signing in to your Account")
      }
    } else {
      alert("password and confirm password does not matches please enter password carefully")
    }
  }



  let initialtodo = [];
  if (localStorage.getItem("todos") === null) {
    localStorage.setItem("todos", JSON.stringify(initialtodo));
  } else {
    initialtodo = JSON.parse(localStorage.getItem("todos") || "[]");
  }
  const [todos, setTodos] = useState(initialtodo);




  const onDelete = (todo) => {
    console.log("am ondelete of ", { todo });
    //deleteing like this does not work in react
    // let index = todos.indexOf(todo);
    // todos.splice(index,1);
    setTodos(todos.filter((ele) => {
      return ele !== todo;
    }))
    // todos.length===0?localStorage.removeItem("todos"):console.log("there are more todo");
  }




  const addTodo = (Title, Desc) => {
    let Sno = todos.length + 1;
    // console.log(Sno);
    const mytodo = {
      sno: Sno,
      title: Title,
      desc: Desc
    }
    setTodos([...todos, mytodo])
  }




  const copyTodo = (Title, Desc) => {
    let Sno = todos.length + 1;
    // console.log(Sno);
    const mytodo = {
      sno: Sno,
      title: Title,
      desc: Desc
    }
    setTodos([...todos, mytodo])
  }




  useEffect(() => {
    let c = 0;
    todos.map((todo) => {
      todo.sno = c + 1;
      c = c + 1;
      // return (<TodoItem todo={todo} copyTodo={props.copyTodo} onDelete={props.onDelete} />)
    })
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  var loggedIn = false;
  // const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      <Router>
        <div className="mycontainer"> 
        
          {loggedIn===true ? "<HeaderSigned />":<Header title="justone" />}

          <Routes>
            <Route exact path="/SignIn" element={<SignIn />} />
            <Route exact path="/" element={<SignUp createAccount={createAccount} />} />
            {/* <Route exact path="/Home" render={() => {
              return (
                <>
                <div className="homepage">
                <HeaderSigned title="justone" />
                <AddTodo addTodo={addTodo} />
                  <Todos todos={todos} copyTodo={copyTodo} onDelete={onDelete} />
                  <FooterSigned />
                  </div>
                  </>
                  )
                }}>
                </Route>
                <Route exact path="/about">
                <Users />
              </Route> */}
          </Routes>
          {loggedIn ? "" : <Content />}
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
