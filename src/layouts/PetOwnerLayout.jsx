import React from "react";
import { Outlet } from "react-router-dom";
import NavPetOwner from "../components/NavPetOwner";
import Footer from "../components/Footer";

export default function PetOwnerLayout() {
  return (
    <div>
      <NavPetOwner />
      <div className="container mt-4">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
