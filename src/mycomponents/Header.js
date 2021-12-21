import React from 'react'
import propTypes from 'prop-types'
import { Link } from "react-router-dom";

export default function Header(props) {

  // if(localStorage.getItem("userOfTodo") === null) {
  // } else {
  //   props.setLoggedIn(true);
  // }
  // let loggedIn = false;
  return (
    <>
      <div className="header">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to={props.loggedIn?`/Home/${props.userInfo.email}}`:"/"}>To-Do-List</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {props.loggedIn ?
                  (
                    <>
                      <li className="nav-item">
                        <Link className="nav-link" to={`/Home/${props.userInfo.email}}`}>Home</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/About">About</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/Contact">Contact</Link>
                      </li>
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Dropdown
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                          <li><Link className="dropdown-item" to="#">Action</Link></li>
                          <li><Link className="dropdown-item" to="#">Another action</Link></li>
                          <li><hr className="dropdown-divider" /></li>
                          <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                        </ul>
                      </li>
                    </>
                  ) : (
                    <>
                      <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Sign-Up</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/SignIn">Sign-In</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/About">About</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/Contact">Contact</Link>
                      </li>
                    </>
                  )}
              </ul>
              <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

Header.defaultProps = {
  title: "this is title"
}

Header.propTypes = {
  title: propTypes.string,
  // search: propTypes.bool.isRequired
}