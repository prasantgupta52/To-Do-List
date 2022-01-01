import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../Styles/About.css'
import bg from '../img/bgimage.jpg'

export default function About(props) {

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
        <img src={bg} alt="background" className="signupimg" />
        <div className="mar"></div>
        <div className="big-text contact">
          <tt>About</tt>
        </div>
        <div className="mar"></div>
        <div className="mar2"></div>
        <div className="form container">
          <div className='text-center'>
            <h5>
              This is A simple To-Do-List Application in wich you can add your todos on the go ..!
              <br />
              This app is made using the <a href="https://wikitia.com/index.php?title=MERN_(solution_stack)&mobileaction=toggle_view_desktop">MERN</a> stack technology<br />
              It uses <a href="https://reactjs.org/">React.js</a> as the Frontend <br />And <a href="https://expressjs.com/">Express.js</a> and <a href="https://nodejs.org/en/">Node.js</a> as beckend
              <br />Uses <a href="https://www.mongodb.com/">MongoDB</a> for data management
              <br />
              It also Uses <a href="https://getbootstrap.com/">Bootstrap</a> for Design all the Icons Used are Taken From <a href="https://icons.getbootstrap.com/">BootStrap Icons</a>
              <br />
              And Many more modules to know more check my Repository
              <br />
              <br />
            </h5>
            <h4>
              If You Like My Application Plz consider giving a Star to My Repository <a href="https://github.com/prasantgupta52/To-Do-List">Here</a> :-)
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
