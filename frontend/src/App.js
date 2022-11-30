import LoginForm from "./Components/LoginForm";
import Course from "./Components/Course";
import React, {useState, useEffect} from "react";
import loginService from './services/login';
import "./App.css"
import courseEntryService from './services/course';

function App() {

  const [ user, setUser ] = useState(null)
  const [ notification, setNotification ] = useState(null)
  const [ notificationType, setNotificationType ] = useState(null)

  const notificationHandler = (message, type) => {
    setNotification(message)
    setNotificationType(type)

    setTimeout(() => {
      setNotificationType(null)
      setNotification(null)
    }, 3000)
  }

  const handleLogin = async (credentials) => {
    try {
      console.log("loggedin");
      console.log(credentials);
      setUser("no")
      // const userObject = await loginService.login(credentials)
      // // userObject={"ok", "123"}
      // setUser(userObject)
      // window.localStorage.setItem('loggedInUser', JSON.stringify(userObject))
      
      // notificationHandler(`Logged in successfully as ${userObject.firstName}`, 'success')
    }
    catch (exception) {
      console.log("not loggedin");
      // notificationHandler(`Log in failed, check username and password entered`, 'error')
    }
  }

  const submitCourse = async (credentials) => {
    console.log("in submit course above")
    console.log(credentials);
    console.log("sending to backend");
    const courseObject = await courseEntryService.courseEntry(credentials)
    console.log("back from backend");
    console.log("in submit course below")
  }

  return (
    <div>
    {/* get from temp login */}
    {
      // user===null &&
      // <LoginForm startLogin={handleLogin}></LoginForm>
    }

      { user===null &&
        <Course submitCourseEntry={submitCourse}></Course>
      }

    </div>

  );
}

export default App;
