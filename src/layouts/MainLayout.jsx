import React from "react";
import { Outlet } from "react-router-dom";

// COMPONTENTS
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
