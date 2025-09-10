import React from "react";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
      {/* Logo */}
      <a className="navbar-brand" href="#">
        <img
          src="/images/logo.png"
          alt="logo"
          width="80"
          height="80"
          className="d-inline-block align-top"
        />
      </a>

      {/* Toggle button (hiện trên mobile) */}
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

      {/* Nav items */}
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav w-100 d-flex justify-content-evenly">
          <li className="nav-item">
            <a className="nav-link" href="#gallery">
              Gallery
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#success-story">
              Success Story
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#event">
              Event
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">
              Shelter Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
