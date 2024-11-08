import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Error from "../Error";
import Home from "../pages/Home/Home";
import UserProfile from "../pages/UserProfile/UserProfile";
// import PrivateRoute from "./PrivateRoute";
import UpdateProfile from "../pages/UserProfile/UpdateProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      // for test
      {
        path: "my-profile",
        element: <UserProfile></UserProfile>,
      },
      {
        path: "/update-profile",
        element: <UpdateProfile />,
      },
      // {
      //     path:"/login",
      //     element:<LogIn></LogIn>
      // },
      // {
      //     path:"/register",
      //     element:<SignUp></SignUp>
      // },
    ],
  },
  //   {
  //     path:"dashboard",
  //     element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
  //     errorElement:<Error></Error>,
  //     children:[
  //       // registered user,admin and staff common private routes
  //         {
  //           path:"my-profile",
  //           element:<UserProfile></UserProfile>
  //        },
  //       //  admin routes

  //       ]
  //     }
]);

export default router;
