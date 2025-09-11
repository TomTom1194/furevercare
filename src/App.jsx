
import { Route, Routes } from "react-router-dom";
import AppPetOwner from "../src/Pages/PetOwner/AppPetOwner";
import Calendar from "./Pages/calendar";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import PetOwnerLayout from "./layouts/PetOwnerLayout";
import AnimalShelterLayout from "./layouts/AnimalShelterLayout";
import VetLayout from "./layouts/VetLayout";

//Start
import Home from "./components/Home/Home";


//Petowner
import HomePetowner from './Pages/PetOwner/home';
import PetCare from './Pages/PetOwner/petcare';
import PetProduct from './Pages/PetOwner/petproduct';
import FeedBack from './Pages/PetOwner/feedback';
import AboutUs from './Pages/PetOwner/aboutus';
import ContactUs from './Pages/PetOwner/contactus';
import EmerPage from './Pages/PetOwner/emerpage';
import PetDetail from './Pages/PetOwner/petdetail';
import ProductDetail from './Pages/PetOwner/productdetail';
import petcare from "../src/Data/Petowner/petcare.json";
import petproduct from "../src/Data/Petowner/petproduct.json";

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
                <Route path="homepetowner" element={<HomePetowner pet={petcare} product={petproduct} />} />
                <Route path="petcare" element={<PetCare db={petcare} />} />
                <Route path="petproduct" element={<PetProduct db={petproduct} />} />
                <Route path="feedback" element={<FeedBack />} />
                <Route path="aboutus" element={<AboutUs />} />
                <Route path="contactus" element={<ContactUs />} />
                <Route path="emergency" element={<EmerPage />} />
                <Route path="petcare/:breed" element={<PetDetail db={petcare} />} />
                <Route path="petproduct/:id" element={<ProductDetail db={petproduct} />} />
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