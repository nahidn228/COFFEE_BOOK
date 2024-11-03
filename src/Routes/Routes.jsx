import { createBrowserRouter } from "react-router-dom";
import CoffeeCards from "../Components/CoffeeCards";
import MainLayout from "../Layouts/MainLayout";
import CoffeeDetails from "../Pages/CoffeeDetails";
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
            path: "/",
            element: <CoffeeCards></CoffeeCards>,
            loader: () => fetch("../coffees.json"),
          },
          {
            path: "/coffees/:category",
            element: <CoffeeCards></CoffeeCards>,
            loader: () => fetch("../coffees.json"),
          },
        ],
      },
      {
        path: "/coffees",
        element: <Coffees></Coffees>,
        loader: () => fetch("../coffees.json"),
      },
      {
        path: "/dashboard",
        element: <DashBoard></DashBoard>,
      },
      {
        path: "/coffee/:id",
        element: <CoffeeDetails></CoffeeDetails>,
        loader: () => fetch("../coffees.json"),
      },
    ],
  },
]);
export default router;
