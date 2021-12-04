// import React from 'react'
import React, { useState } from 'react';


export const AddTodo = (props) => {
  const [Title, setTitle] = useState("");
  const [Desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if(!Title||!Desc){
      alert("Title or Description cannot be empty");
    } else {
      props.addTodo(Title,Desc);
      setTitle("");
      setDesc("");
      // Title="";
      // Desc="";
    }
  }
 
  return (
    <div className="container my-3">
      <h3 className="text-center">Add A Todo</h3>
      <div className="addtodobox">
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label" >Title</label>
          <input type="text" value={Title} onChange={(e) => {setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">Description</label>
          <input type="text" value={Desc} onChange={(e) => {setDesc(e.target.value)}} className="form-control" id="desc"/>
        </div> 
        <button type="submit" className="btn btn-success">Submit</button>
      </form>
      </div>
    </div>
  )
}
