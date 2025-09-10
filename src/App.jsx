import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import PetOwner from "./Pages/Petowner";

function Veterinarian() {
  return <div className="container mt-4"><h1>🩺 Veterinarian Page</h1></div>;
}

function AnimalShelter() {
  return <div className="container mt-4"><h1>🐶🐱 Animal Shelter Page</h1></div>;
}

function Home() {
  const navigate = useNavigate();

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light">
      <h1 className="mb-5">Welcome to PetCare System 🐾</h1>
      <div className="d-grid gap-3 col-6 col-md-4">
        <button className="btn btn-primary btn-lg" onClick={() => navigate("/petowner")}>
          Pet Owner
        </button>
        <button className="btn btn-success btn-lg" onClick={() => navigate("/veterinarian")}>
          Veterinarian
        </button>
        <button className="btn btn-warning btn-lg" onClick={() => navigate("/animalshelter")}>
          Animal Shelter
        </button>
      </div>
    </div>
  );
}




export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Pet Owner và các route con */}
        <Route path="/petowner" element={<PetOwner />}>
          {/* <Route path="about" element={<About />} />
          <Route path="petcare" element={<PetCare />} />
          <Route path="feedback" element={<Feedback />} />
          <Route path="contact" element={<Contact />} />
          <Route path="emergency" element={<Emergency />} />
          <Route path="products" element={<Products />} /> */}
        </Route>

        {/* Các role khác */}
        <Route path="/veterinarian" element={<Veterinarian />} />
        <Route path="/animalshelter" element={<AnimalShelter />} />

        {/* 404 */}
        <Route path="*" element={<div className="container mt-4"><h1 className="text-danger">404 - Page Not Found</h1></div>} />      </Routes>
    </Router>
  );
}
