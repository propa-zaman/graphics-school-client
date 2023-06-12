import {
    createBrowserRouter
  } from "react-router-dom";
  
  
  
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
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