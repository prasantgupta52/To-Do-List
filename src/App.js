import './App.css';
import React, { useState , useEffect } from 'react';
import Header from "./mycomponents/Header";
import Footer from "./mycomponents/Footer";
import Todos from "./mycomponents/Todos";
import { AddTodo } from './mycomponents/AddTodo';
import SigninSignup from './mycomponents/SignipSignup';
import {
  BrowserRouter as Router,
  Switch, 
  Route,
} from "react-router-dom";
/*this ois my first*/
function App() {
  // let todoopen = [];
  let initialtodo = [];
  if (localStorage.getItem("todos")===null) {
    localStorage.setItem("todos",JSON.stringify(initialtodo));
  } else {
    initialtodo = JSON.parse(localStorage.getItem("todos")||"[]");
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
  
  // const [todos, settodos] = useState([
  //   {
  //     sno: 1,
  //     title: "goto market",
  //     desc: "goto the market and get your job done"
  //   },
  //   {
  //     sno: 2,
  //     title: "goto marketpalace",
  //     desc: "goto the market and get your job done suneo"
  //   },
  //   {
  //     sno: 3,
  //     title: "goto marketghat",
  //     desc: "goto the market and get your job done dunika"
  //   },
  //   {
  //     sno: 4,
  //     title: "goto marketgb",
  //     desc: "goto the market and get your hurika job done"
  //   }
  // ]);
  
  
  useEffect(() => {
    let c=0;
    todos.map((todo) => {
      todo.sno = c+1;
      c = c+1;
      // return (<TodoItem todo={todo} copyTodo={props.copyTodo} onDelete={props.onDelete} />)
    })
    localStorage.setItem("todos",JSON.stringify(todos));
  }, [todos])

  return (
    <>
      <Router>
        <Header title="justone" />
        <Switch>
          <Route exact path="/">
            <SigninSignup/>
          </Route>
          <Route exact path="/Home" render={() => {
            return (
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} copyTodo={copyTodo} onDelete={onDelete} />
              </>
            )
          }}>
          </Route>
          <Route exact path="/about">
            {/* <Users /> */}
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
