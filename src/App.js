import './App.css';
import './app2.css';
import React, { useState, useEffect } from 'react';
import Header from "./mycomponents/Header";
import SignUp from './mycomponents/SignUp';
import SignIn from './mycomponents/SignIn';
import Content from './mycomponents/Content';
import ContentOfUser from './mycomponents/ContentOfUser';
import About from './mycomponents/About';
import Contact from './mycomponents/Contact';
import Footer from "./mycomponents/Footer";
import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { use } from 'express/lib/router';




function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [userInfo, setUserInfo] = useState({});

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

  // setLoggedIn(true);
  // const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      <Router>
        <div className={loggedIn ? "myloggedincontainer":"mycontainer"}> 
          <Header title="justone" loggedIn={loggedIn} setLoggedIn={setLoggedIn} userInfo={userInfo} setUserInfo={setUserInfo} />
          <Routes>
            <Route exact path="/" element={<SignUp loggedIn={ loggedIn} setLoggedIn={setLoggedIn} userInfo={userInfo} setUserInfo={setUserInfo} />} />
            <Route exact path="/SignIn" element={<SignIn loggedIn={ loggedIn} setLoggedIn={setLoggedIn}/>} />
            <Route exact path="/Home/:email" element={<ContentOfUser loggedIn={ loggedIn} setLoggedIn={setLoggedIn} userInfo={userInfo} setUserInfo={setUserInfo} />} />
            <Route exact path="/about" element={<About loggedIn={ loggedIn} setLoggedIn={setLoggedIn} userInfo={userInfo} setUserInfo={setUserInfo} />} />
            <Route exact path="/Contact" element={<Contact loggedIn={ loggedIn} setLoggedIn={setLoggedIn} userInfo={userInfo} setUserInfo={setUserInfo} />} />
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
