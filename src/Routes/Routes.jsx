import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Error from "../pages/Error/Error";
import Dashboard from "../Layout/Dashboard";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import Instructors from "../pages/Instructors/Instructors";
import Classes from "../pages/Classes/Classes";
import SelectedClass from "../pages/Dashboard/SelectedClass/SelectedClass";
import AddClass from "../pages/Dashboard/AddClass/AddClass";

  
  
  
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: 'classes',
          element: <Classes></Classes>
        },
        {
          path: 'instructors',
          element: <Instructors></Instructors>
        },
        {
            path: 'login',
            element: <Login></Login>
          },
          {
            path: 'signup',
            element: <SignUp></SignUp>
          },
      ]
    },
    {
      path: 'dashboard',
    //   TODO: make dashboard private route
      element: <Dashboard></Dashboard>,
      children: [
        {
          path: 'allusers', 
          element: <AllUsers></AllUsers>
        },
        {
          path: 'selectedclasses',
          element: <SelectedClass></SelectedClass>
        },
        {
          path: 'addclass',
          element: <AddClass></AddClass>
        },
        
      ]
    },
    {
        path: "*",
        element: <Error></Error>
    }
  ]);

  export default router;