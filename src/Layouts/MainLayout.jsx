import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const MainLayout = () => {
  return (
    <div className="w-11/12 md:w-full mx-auto">
      {/* Nav Bar */}
      <div className="h-12">
        <Navbar></Navbar>
      </div>
      <div className="min-h-[calc(100vh-288px)] py-12 max-w-screen-xl  mx-auto">
        {/* Dynamic Section */}
        <Outlet></Outlet>
      </div>

      {/* Footer */}
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
