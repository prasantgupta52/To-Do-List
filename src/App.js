import './App.css';
import './Styles/Main.css';
import React, { useState, useEffect } from 'react';
import Header from "./mycomponents/Header";
import SignUp from './mycomponents/SignUp';
import SignIn from './mycomponents/SignIn';
import Content from './mycomponents/Content';
import ContentOfUser from './mycomponents/ContentOfUser';
import About from './mycomponents/About';
import Contact from './mycomponents/Contact';
import Footer from "./mycomponents/Footer";
import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";




function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [userInfo, setUserInfo] = useState({});

  
  return (
    <>
      <Router>
        <div className={loggedIn ? "myloggedincontainer":"mycontainer"}> 
          <Header title="justone" loggedIn={loggedIn} setLoggedIn={setLoggedIn} userInfo={userInfo} setUserInfo={setUserInfo} />
          <Routes>
            <Route exact path="/" element={<SignUp loggedIn={ loggedIn} setLoggedIn={setLoggedIn} userInfo={userInfo} setUserInfo={setUserInfo} />} />
            <Route exact path="/SignIn" element={<SignIn loggedIn={ loggedIn} setLoggedIn={setLoggedIn} userInfo={userInfo} setUserInfo={setUserInfo} />} />
            <Route exact path="/Home/:email" element={<ContentOfUser loggedIn={ loggedIn} setLoggedIn={setLoggedIn} userInfo={userInfo} setUserInfo={setUserInfo} />} />
            <Route exact path="/About" element={<About loggedIn={ loggedIn} setLoggedIn={setLoggedIn} userInfo={userInfo} setUserInfo={setUserInfo} />} />
            <Route exact path="/Contact" element={<Contact loggedIn={ loggedIn} setLoggedIn={setLoggedIn} userInfo={userInfo} setUserInfo={setUserInfo} />} />
          </Routes>
          {loggedIn ? "" : <Content />}
          <Footer loggedIn={loggedIn} setLoggedIn={setLoggedIn} userInfo={userInfo} setUserInfo={setUserInfo} />
        </div>
      </Router>
    </>
  );
}

export default App;
