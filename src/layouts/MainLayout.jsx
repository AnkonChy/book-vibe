import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainLayout = () => {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Navbar  */}
      <Navbar></Navbar>
      {/* Dynamic compo  */}
      <div className="min-h-[calc(100vh-136px)]">
        <Outlet></Outlet>
      </div>
      {/* Footer  */}
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
};

export default MainLayout;
