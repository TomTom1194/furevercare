import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import user from "../../Data/user.json";
import "./Home.css";

const Home = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    if (!name) {
      alert("Please enter your name before proceeding!");
      return;
    }

    // Tìm user trong JSON
    const existingUser = user.find((u) => u.email === email);

    if (!existingUser) {
      alert("Email does not exist in our system!");
      return;
    }

    localStorage.setItem("currentUser", JSON.stringify(existingUser));

    if (selectedRole === "petowner") {
      navigate("/petowner/home", { state: { email: email } });
    } else if (selectedRole === "animalshelter") {
      navigate("/animalshelter/animal", { state: { email: email } });
    } else if (selectedRole === "veterinarian") {
      navigate("/veterinarian", { state: { email: email } });
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light p-3">
      <div
        className="card shadow-lg p-4 w-100"
        style={{ maxWidth: "400px", borderRadius: "15px" }}
      >
        {/* Logo */}
        <div className="text-center ">
          <img
            src="/images/logo.png"
            alt="FureverCare Logo"
            className="img-fluid "
            style={{ maxWidth: "300px", height: "200px" }}
          />
        </div>

        {/* Input */}
        <div className="mb-3">
          <label className="form-label fw-semibold">Enter your name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Nguyen Van A"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Choices */}
        <div className="mb-3">
          <label className="form-label fw-semibold">You wanna visit</label>
          <div className="d-grid gap-2">
            <button
              className="btn btn-light custom-hover"
              onClick={() => handleNavigate("/petowner/homepetowner")}
            >
              Pet Owner
            </button>

            <button
              className="btn btn-light custom-hover"
              onClick={() => handleNavigate("/animalshelter/animal")}
            >
              Animal Shelter
            </button>

            <button
              className="btn btn-light custom-hover"
              onClick={() => handleNavigate("/veterinarian")}
            >
              Veterinarian
            </button>
          </div>
        </div>
        {/* Submit */}
        <div className="d-grid">
          <button
            className="btn fw-semibold"
            style={{ backgroundColor: "#7f5539", color: "#fff" }}
          >
            Submit
          </button>
        </div>
        <small className="text-center my-3">Don't have account? <Link to="signup" className="text-brown">Sign Up</Link></small>
      </div>
    </div>
  );
};

export default Home;
