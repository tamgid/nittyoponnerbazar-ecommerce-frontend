import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Error from "../Error";
import Home from "../pages/Home";
import UserProfile from "../pages/UserProfile/UserProfile";
// import PrivateRoute from "./PrivateRoute";
import UpdateProfile from "../pages/UserProfile/UpdateProfile";
import Dashboard from "../pages/Dashboard/Dashboard";
import AddProduct from "../pages/Admin/AddProducts/AddProduct";
import AllProducts from "../pages/Admin/AllProducts/AllProducts";
import UpdateProduct from "../pages/Admin/UpdateProduct/UpdateProduct";
import ViewAProduct from "../pages/Admin/ViewAProduct/ViewAProduct";

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
      // {
      //     path:"/login",
      //     element:<LogIn></LogIn>
      // },
      // {
      //     path:"/register",
      //     element:<SignUp></SignUp>
      // },
      {
        path: "dashboard",
        //   element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        element: <Dashboard></Dashboard>,
        children: [
          // registered user,admin and staff common private routes
          {
            path: "my-profile",
            element: <UserProfile></UserProfile>,
          },
          {
            path: "update-profile",
            element: <UpdateProfile />,
          },
          //  admin routes
          {
            path: "add-product",
            element: <AddProduct></AddProduct>,
          },
          {
            path: "see-all-products",
            element: <AllProducts></AllProducts>,
          },
          {
            path: "update-product",
            element: <UpdateProduct></UpdateProduct>,
          },
          {
            path: "view-product",
            element: <ViewAProduct></ViewAProduct>,
          }
        ],
      },
    ],
  },
]);

export default router;
