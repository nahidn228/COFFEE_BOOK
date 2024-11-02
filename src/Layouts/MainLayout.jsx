import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const MainLayout = () => {
  return (
    <div className="max-w-screen-2xl  mx-auto">
      {/* Nav Bar */}
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-288px)]"></div>
      {/*  */}
      <Outlet></Outlet>

      {/* Footer */}
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
