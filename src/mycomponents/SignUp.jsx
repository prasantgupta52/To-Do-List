import { use } from 'express/lib/router';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import Axios from "axios";

export default function SignUp(props) {
  let navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  
  React.useEffect(() => {
    if(localStorage.getItem("userOfTodo") === null) {
    } else {
      let user = JSON.parse(localStorage.getItem("userOfTodo") || "[]");
      props.setLoggedIn(true);
      props.setUserInfo(user);
      navigate(`/Home/${user.email}`)
    }
  },[navigate])
  // useEffect(() => {
  //   Axios.get("http://localhost:3001/fetch").then((response) => {
  //     console.log(response);
  //   })
  // }, [])

  // const update = (id, newpassword) => {
  //   Axios.get("http://localhost:3001/update", {
  //     id: id,
  //     newpassword: newpassword
  //   });
  // }
  const createaccount = async () => {
    await Axios.post("http://localhost:3001/insert", {
      email: username,
      password: password,
      cpassword: cpassword
    })
      .then(await Axios.get(`http://localhost:3001/fetchaccount/${username}`)
        .then(async (response) => {
          let userdetail = response.data[0];
          await Axios.post(`http://localhost:3001/usertodo/${userdetail._id}`)
          console.log(userdetail);
          localStorage.setItem('userOfTodo',JSON.stringify(userdetail));
          navigate(`/Home/${userdetail.email}`)
        }));
    setUsername("");
    setPassword("");
    setCpassword("");
  }



  const create = async (e) => {
    e.preventDefault();
    if (!username || !password || !cpassword) {
      alert("Please Ensure that every Field is filled none of em is Empty");
    } else {
      if (password === cpassword) {
        await Axios.get(`http://localhost:3001/fetchaccount/${username}`)
        .then(async (response) => {
          try {
            const tempemail = response.data[0];
            if (tempemail.email === username) {
              alert("your account already Exists try Signing in to your Account")
              setUsername("");
              setPassword("");
              setCpassword("");
              navigate('/SignIn');
            }
          } catch (err) {
            await createaccount();
            }
          })
      } else {
        alert("password and confirm password does not matches please enter password carefully")
      }
    }
  }

  return (
    <>
      <div className="signup">
        <div className="signupimg"></div>
        <div className="mar"></div>
        <div className="mar"></div>
        <div className="big-text">
          <tt>Sign-Up</tt>
        </div>
        <div className="mar"></div>
        <div className="mar"></div>
        <div className="mar2"></div>
        <div className="form container">
          <form onSubmit={create}>
            <div className="form-group">
              <label for="exampleInputEmail1">
                <h4>Email address</h4>
              </label>
              <input type="email" value={username} onChange={(e) => { setUsername(e.target.value) }} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                placeholder="Enter email" />
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">
                <h4>Password</h4>
              </label>
              <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} className="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>
            <div className="form-group">
              <label for="exampleInputPassword2">
                <h4>Confirm Password</h4>
              </label>
              <input type="password" value={cpassword} onChange={(e) => { setCpassword(e.target.value) }} className="form-control" id="exampleInputPassword2" placeholder="Re-Enter Password" />
            </div>
            <button type="submit" className="btn btn-primary btn-lg" >Submit</button>
          </form>
        </div>
        <div className="mar3"></div>
      </div>
    </>
  )
}
