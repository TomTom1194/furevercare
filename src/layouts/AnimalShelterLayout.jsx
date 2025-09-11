import React from "react";
import { Outlet } from "react-router-dom";
import NavAnimalShelter from "../components/NavAnimalShelter";
import Footer from "../components/Footer";

export default function AnimalShelterLayout() {
  return (
    <div>
      <NavAnimalShelter />
      <div className="container mt-4">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
