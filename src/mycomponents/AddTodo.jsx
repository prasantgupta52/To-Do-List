import React, { useState } from 'react';
import Axios from 'axios'
import {serverurl as url1} from '../url';


export const AddTodo = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const addtodos = async (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title or Description cannot be empty");
    } else {
      const userdetail = JSON.parse(localStorage.getItem("userOfTodo"));
      await Axios.post(`${url1}/addtodo/${userdetail._id}`, {
        Title: title,
        Description: desc
      }).then(props.refresh)
      setTitle("");
      setDesc("");
    }
  }

  return (
    <div className="container my-3">
      <h3 className="text-center">Add A Todo</h3>
      <div className="add addtodobox">
        <form onSubmit={addtodos}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label" >Title</label>
            <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} className="form-control" id="title" aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <label htmlFor="desc" className="form-label">Description</label>
            <input type="text" value={desc} onChange={(e) => { setDesc(e.target.value) }} className="form-control" id="desc" />
          </div>
          <button type="submit" className="btn btn-success">Submit</button>
        </form>
      </div>
    </div>
  )
}
