import { use } from 'express/lib/router';
import React , {useState} from 'react'

export default function SignIn(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  const create = (e) => {
    e.preventDefault();
    if(!username||!password||!cpassword){
      alert("Please Ensure that every Field is filled none of em is Empty");
    } else {
      props.createAccount(username,password,cpassword);
      setUsername("");
      setPassword("");
      setCpassword("");
    }
  }

  return (
    <>
      <div className="signup">
        <div className="signupimg"></div>
        <div className="mar"></div>
        <div className="mar"></div>
        <div className="big-text">
          <tt>Sign-In</tt>
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
              <input type="email" value={username} onChange={(e) => {setUsername(e.target.value)}} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                placeholder="Enter email" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">
                <h4>Password</h4>
              </label>
              <input type="password" value={password} onChange={(e) => {setPassword(e.target.value)}} className="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>
            <button type="submit" className="btn btn-primary btn-lg" >Submit</button>
          </form>
        </div>
        <div className="mar3"></div>
      </div>
    </>
  )
}
