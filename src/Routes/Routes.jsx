import { createBrowserRouter } from "react-router-dom";
import CoffeeCards from "../Components/CoffeeCards";
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
        loader: () => fetch("../categories.json"),
        children: [
          {
            path: "/category/:categoryId",
            element: <CoffeeCards></CoffeeCards>,
          },
        ],
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
