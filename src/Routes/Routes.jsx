import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Coffees from "../Pages/Coffees";
import DashBoard from "../Pages/DashBoard";
import Home from "./../Pages/Home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/coffees",
        element: <Coffees></Coffees>,
      },
      {
        path: "/dashboard",
        element: <DashBoard></DashBoard>,
      },
    ],
  },
]);
export default router;
