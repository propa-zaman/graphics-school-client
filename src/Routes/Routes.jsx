import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
  
  
  
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
            path: 'login',
            element: <Login></Login>
          },
          {
            path: 'signup',
            element: <SignUp></SignUp>
          },
      ]
    },
    // {
    //   path: 'dashboard',
    // //   TODO: make dashboard private route
    //   element: <Dashboard></Dashboard>,
    //   children: [
    //     // {
    //     //   path: 'uHome',
    //     //   element: <UHome></UHome>
    //     // },
        
    //   ]
    // },
    // {
    //     path: "error",
    //     element: <Error></Error>
    // }
  ]);

  export default router;