import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Error from "../Error";
import Home from "../pages/Home/Home";
import UserProfile from "../pages/UserProfile/UserProfile";
// import PrivateRoute from "./PrivateRoute";
import UpdateProfile from "../pages/UserProfile/UpdateProfile";
import Dashboard from "../pages/Dashboard/Dashboard";
import AddProduct from "../pages/Admin/AddProducts/AddProduct";

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
      {
        path:"dashboard",
      //   element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        element:<Dashboard></Dashboard>,
        children:[
          // registered user,admin and staff common private routes
            {
              path:"add-product",
              element:<AddProduct></AddProduct>
           },
          //  admin routes
  
          ]
        }
    ],
  },
    
]);

export default router;
