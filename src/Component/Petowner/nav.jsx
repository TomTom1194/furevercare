import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/petowner">Pet Owner</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/petowner/about">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/petowner/petcare">Pet Care</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/petowner/feedback">Feedback</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/petowner/contact">Contact Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-danger fw-bold" to="/petowner/emergency">🚨 Emergency</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/petowner/products">Pet Product</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
