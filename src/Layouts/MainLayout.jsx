import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const MainLayout = () => {
  return (
    <div className="max-w-screen-xl  mx-auto">
      {/* Nav Bar */}
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-288px)] py-12">
        {/* Dynamic Section */}
        <Outlet></Outlet>
      </div>

      {/* Footer */}
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
