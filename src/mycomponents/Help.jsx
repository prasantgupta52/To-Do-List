import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../Styles/About.css'

export default function Help(props) {

  let navigate = useNavigate();

  React.useEffect(() => {
    if (localStorage.getItem("userOfTodo") === null) {
    } else {
      let user = JSON.parse(localStorage.getItem("userOfTodo") || "[]");
      props.setLoggedIn(true);
      props.setUserInfo(user);
    }
  }, [navigate])

  return (
    <>
      <div className="signup">
        <div className="signupimg"></div>
        <div className="mar"></div>
        <div className="big-text contact">
          <tt>Help</tt>
        </div>
        <div className="mar"></div>
        <div className="mar2"></div>
        <div className="form container">
          <div className='text-center'>
            <h5>
              Sorry for the In-convinience caused but some of our feature's does not work with the current version of the website we are working on it and it will be available as soon as possible
              <br /><br />Feature's that does not work <br />1. Search Button <br />2. Setting Up Alarm/Reminder For Todo<br />3. Application not totally compatible with Mobile Devices
              <br /><br />
              If sometime todo's does not get automatically updated <br />try clicking the refresh button beside Todo's List
            </h5>
            <br />
            <h4>
              If You Like My Application Plz consider giving a Star to My Repository <a href="">Here</a> :-)
              And Follow Me
              <br />
              <br />
              This Application is made by PRASANT GUPTA with &#10084;   </h4>
          </div>
        </div>
        <div className="mar3"></div>
      </div>
    </>
  )
}
