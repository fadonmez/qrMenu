import Navbar from "../components/Navbar";
import React from "react";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div>
      <Navbar mode="admin" />
      <Outlet />
    </div>
  );
}
