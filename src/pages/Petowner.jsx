import React from "react";
import Nav from "../Component/Petowner/nav";

export default function PetOwner() {
  return (
    <div>
      <Nav />
      <div className="container mt-4">
        <h1>🐾 Welcome, Pet Owner!</h1>
        <p>Select a section from the navigation bar.</p>
      </div>
    </div>
  );
}
