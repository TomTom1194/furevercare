import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import PetOwner from "./Pages/PetOwner/PetOwner";
import Shelter from "./Pages/Shelter/Shelter";
import Veterinarian from "./Pages/Veterinarian/Veterinarian";

import VetProfile from "./Pages/Veterinarian/VetProfile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pet-owner" element={<PetOwner />} />
        <Route path="/shelter" element={<Shelter />} />
        <Route path="/veterinarian" element={<Veterinarian />} />
        <Route path="/veterinarian/:id" element={<VetProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
