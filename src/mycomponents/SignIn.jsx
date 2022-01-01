import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Axios from "axios";
import bg from '../img/bgimage.jpg'
import {serverurl as url1} from '../url';

export default function SignIn(props) {

  let navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  React.useEffect(() => {

    if (localStorage.getItem("userOfTodo") === null) {
    } else {
      let user = JSON.parse(localStorage.getItem("userOfTodo") || "[]");
      props.setLoggedIn(true);
      props.setUserInfo(user);
      navigate(`/Home/${user.email}`)
    }
  }, [navigate])

  const logIn = async () => {

    await Axios.get(`${url1}/fetchaccount/${username}`)
      .then(async (response) => {
        try {
          const tempemail = response.data[0];
          console.log("dt" + tempemail);
          if (tempemail.email === username) {
            if (tempemail.password === password) {
              localStorage.setItem("userOfTodo", JSON.stringify(tempemail));
              props.setLoggedIn(true);
              props.setUserInfo(tempemail);
              console.log(props.userInfo);
              setUsername("");
              setPassword("");
              navigate(`/Home/${tempemail.email}`)
            } else {
              alert("the password you entered is wrong plzzz enter correct password..!");
            }
          }
        } catch (err) {
          alert("your account does not Exists plzz check email or else Sign-Up")
        }
      })
  }

  return (
    <>
      <div className="signup">
        <img src={bg} alt="background" className="signupimg" />
        <div className="mar"></div>
        <div className="mar"></div>
        <div className="big-text">
          <tt>Sign-In</tt>
        </div>
        <div className="mar"></div>
        <div className="mar"></div>
        <div className="mar2"></div>
        <div className="form container">
          <form onSubmit={logIn}>
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
            <button type="submit" className="btn btn-primary btn-lg" >Submit</button>
          </form>
        </div>
        <div className="mar3"></div>
      </div>
    </>
  )
}
