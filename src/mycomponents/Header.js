import React from 'react'
import propTypes from 'prop-types'
import { Link, useNavigate } from "react-router-dom";

export default function Header(props) {
  let navigate = useNavigate();

  const logOut = () => {
    if(window.confirm("are u sure u want to log out of your account")){
      props.setLoggedIn(false);
      props.setUserInfo({});
      localStorage.removeItem("userOfTodo");
      setTimeout(() => {
        navigate('/SignIn');
      },1000)
    }
  }

  return (
    <>
      <div className={props.loggedIn?"headerlogged":"header"}>
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
                          <li><Link className="dropdown-item" to="#" onClick={() => {logOut()}}>Log-Out</Link></li>
                          <li><Link className="dropdown-item" to="#">Help</Link></li>
                          <li><hr className="dropdown-divider" /></li>
                          <li><Link className="dropdown-item" to="#">Delete my Account</Link></li>
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