import React from "react";
import { Outlet } from "react-router-dom";
import NavVeterinarian from "../components/NavVeterinarian";
import Footer from "../components/Footer";

export default function VetLayout() {
  return (
    <div>
      {/* <NavVeterinarian /> */}
      <div className="container mt-4">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
