import LoginForm from "./Components/LoginForm";
import Course from "./Components/Course";
import React, {useState, useEffect} from "react";
import loginService from './services/login';
import "./App.css"
import { ToastContainer, toast } from "react-toastify";
import courseEntryService from './services/course';

function App() {

  const [ user, setUser ] = useState(null)

  const handleLogin = async (credentials) => {
    try {
      console.log("loggedin");
      console.log(credentials);
      const userObject = await loginService.login(credentials)
      setUser(userObject)
      window.localStorage.setItem('loggedInUser', JSON.stringify(userObject))
      toast(`Login Success as ${credentials.email}`)
    }
    catch (exception) {
      console.log("not loggedin");
      toast("Unable to login. Check email/password")
    }
  }

  const submitCourse = async (credentials) => {
    try{
      console.log("in submit course above")
      console.log(credentials);
      console.log("sending to backend");
      const courseObject = await courseEntryService.courseEntry(credentials);
      toast("Course added successfully")
      console.log("back from backend");
      console.log("in submit course below")
    }
    catch {
      console.log("Unable to add course");
      toast("Cannot add course");
    }
  }

  return (
    <div>
    {/* get from temp login */}
    <ToastContainer />
    {/* <Notification notification={notification} type={notificationType} /> */}

    {
      user===null &&
      <LoginForm startLogin={handleLogin}></LoginForm>
    }

      { user!==null &&
        <Course submitCourseEntry={submitCourse}></Course>
      }
      {/* { user===null &&
        <AddCourse></AddCourse>
      } */}

    </div>

  );
}

export default App;
