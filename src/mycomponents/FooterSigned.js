import React from 'react'

export default function Footer() {
  let footerstyle = {
    position: "relative",
    // top: "10vh",
    width: "100%",
    /* margin-top: 36% ; */
    clear: "left",
    display: "block",
  }
  return (
    <footer className="bg-dark text-light py-3" style={footerstyle}>
      <p className="text-center">
        CopyRight &copy; MyTodo's.com
      </p>
    </footer>
  )
} 
