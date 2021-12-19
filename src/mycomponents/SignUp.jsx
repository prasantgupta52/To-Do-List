import { use } from 'express/lib/router';
import React, { useState, useEffect } from 'react';
import Axios from "axios";

export default function SignUp(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  // useEffect(() => {
  //   Axios.get("http://localhost:3001/fetch").then((response) => {
  //     console.log(response);
  //   })
  // }, [])

  const update = (id, newpassword) => {
    Axios.get("http://localhost:3001/update", {
      id: id,
      newpassword: newpassword
    });
  }

  // onclick = {() => update(collection._id)}

  const create = async (e) => {
    e.preventDefault();
    if (!username || !password || !cpassword) {
      alert("Please Ensure that every Field is filled none of em is Empty");
    } else {
      let databasename = { username };
      if (password === cpassword) {
        if (localStorage.getItem(databasename.username) === null) {
          const userprofile = {
            username: username,
            password: password,
            cpassword: cpassword,
          }
          localStorage.setItem(databasename.username, JSON.stringify(userprofile))
          await Axios.post("http://localhost:3001/insert", {
            email: username,
            password: password,
            cpassword: cpassword
          })
          .then(Axios.get(`http://localhost:3001/fetch/${username}`)
          .then((response) => {
            let userdetail = response.data[0];
            console.log(userdetail);
          }));
          setUsername("");
          setPassword("");
          setCpassword("");
        } else {
          alert("your account already Exists try Signing in to your Account")
        }
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
