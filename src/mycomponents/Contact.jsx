import React, { useState } from 'react';
import Axios from 'axios';

export default function Contact() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const feedback = async (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      alert("Please Ensure that every Field is filled none of em is Empty");
    } else {
      await Axios.post("http://localhost:3001/feedback", {
        name: name,
        email: email,
        message: message
      }).then(
        setName(""),
        setEmail(""),
        setMessage(""),
        alert("Thanku for U'r Msg We will contact U through U'r Email Soon..!")
      )
    }
  }

  return (
    <>
    <div className="signup">
    <div className="signupimg"></div>
    <div className="mar"></div>
        <div className="big-text contact">
          <tt>Contact Us</tt>
        </div>
        <div className="mar"></div>
        <div className="mar2"></div>
        <div className="form container">
          <form onSubmit={feedback}>
            <div className="form-group">
              <label for="exampleInputname">
                <h4>Name</h4>
              </label>
              <input type="name" value={name} onChange={(e) => { setName(e.target.value) }} className="form-control" id="exampleInputname" aria-describedby="emailHelp"
                placeholder="Enter Name" />
            </div>
            <div className="form-group">
              <label for="exampleInputemail">
                <h4>Email address</h4>
              </label>
              <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} className="form-control" id="exampleInputemail" placeholder="Enter Email" />
            </div>
            <div className="form-group">
              <label for="message">
                <h4>Message</h4>
              </label>
              <br />
              <textarea id="message" name="message" class="textarea form-control" placeholder="Enter Your Message Here...!" value={message} onChange={(e) => { setMessage(e.target.value) }} />
            </div>
            <button type="submit" className="btn btn-primary btn-lg" >Submit</button>
          </form>
        </div>
        <div className="mar3"></div>
    </div>
    </>
  )
}
