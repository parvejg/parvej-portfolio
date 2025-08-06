// src/components/Layout.jsx
import React from "react";
import Navbar from "./Navbar"; // Navbar component ko import karo
import { Outlet } from "react-router-dom";
import "./Layout.css";
const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet /> {/* Ye jagah hai jahan har page ka content dikhega */}
    </>
  );
};

export default Layout;
