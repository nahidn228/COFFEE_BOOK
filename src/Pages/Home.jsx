import React from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import CategoryTab from "../Components/CategoryTab";
import Heading from "../Components/Heading";

const Home = () => {
  const categories = useLoaderData();
  //console.log(categories);
  return (
    <div>
      {/* Banner */}
      <Banner></Banner>
      {/* Heading */}
      <Heading
        title={"Browse Coffees by Category"}
        subtitle={
          "Choose your desired coffee category to browse through specific coffees that fit in your taste...."
        }
      ></Heading>
      {/* Category Tab */}
      <CategoryTab categories={categories}></CategoryTab>
      {/* Dynamic Nested Component */}
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
