
import { Route, Routes } from "react-router-dom";
import AppPetOwner from "../src/Pages/PetOwner/AppPetOwner";
import Calendar from "./Pages/calendar";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PetOwnerLayout from "./layouts/PetOwnerLayout";
import AnimalShelterLayout from "./layouts/AnimalShelterLayout";
import VetLayout from "./layouts/VetLayout";

//Start
import Home from "./components/Home/Home";


//Petowner
import About from "./Pages/PetOwner/About";
import Contact from "./Pages/PetOwner/Contact";
import Emergency from "./Pages/PetOwner/Emergency";
import Feedback from "./Pages/PetOwner/Feedback";
import PetCare from "./Pages/PetOwner/Petcare";
import Petproduct from "./Pages/PetOwner/Petproduct";
import HomePetowner from "./Pages/PetOwner/HomePetowner";

//Shelter
import Events from "./Pages/Shelter/Events";
import Gallery from "./Pages/Shelter/Gallery";
import HomeShelter from "./Pages/Shelter/HomeShelter";
import ShelterContact from "./Pages/Shelter/ShelterContact";
import Success from "./Pages/Shelter/Success";

//Vet
import HomeVet from "./Pages/Veterinarian/HomeVet";
import VetProfile from "./Pages/Veterinarian/VetProfile";

export default function App() {
  return (
    <Router>
      <Routes>
        {/*Start*/}
        <Route path="/" element={<Home />} />

        {/* PetOwner routes */}
        <Route path="/petowner" element={<PetOwnerLayout />}>
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="emergency" element={<Emergency />} />
          <Route path="feedback" element={<Feedback />} />
          <Route path="petcare" element={<PetCare />} />
          <Route path="petproduct" element={<Petproduct />} />
          <Route path="homepetowner" element={<HomePetowner />} />
        </Route>

        {/* Veterinarian routes */}
        <Route path="/veterinarian" element={<VetLayout />}>
          <Route index element={<HomeVet />} /> 
          <Route path=":id" element={<VetProfile />} />
        </Route>

        {/* Animal Shelter routes */}
        <Route path="/animalshelter" element={<AnimalShelterLayout />}>
          <Route path="events" element={<Events />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="homeshelter" element={<HomeShelter />} />
          <Route path="sheltercontact" element={<ShelterContact />} />
          <Route path="success" element={<Success />} />
        </Route>

        {/* 404 */}
        <Route path="*" element={<div className="container mt-4"><h1>404 - Page Not Found</h1></div>} />
      </Routes>
    </Router>
  );
}