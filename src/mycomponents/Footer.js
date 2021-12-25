import React from 'react'

export default function Footer(props) {
  let footerstyle = {
    position: "relative",
    // top: "10vh",
    width: "100%",
    /* margin-top: 36% ; */
    clear: "left",
    display: "block",
  }
  return (
    <div class={props.loggedIn?"footerlogged":"footer"}>hiiiiiiiiiii....!</div>
  )
} 
