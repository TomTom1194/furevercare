import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HomeFooter() {
  const [time, setTime] = useState(new Date());
  const [location, setLocation] = useState("Loading...");

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const res = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
            );
            const data = await res.json();
            const city =
              data.address.city ||
              data.address.town ||
              data.address.village ||
              "";
            const country = data.address.country || "";
            setLocation(`${city}, ${country}`);
          } catch (error) {
            setLocation("Location unavailable");
          }
        },
        () => setLocation("Permission denied")
      );
    } else {
      setLocation("Geolocation not supported");
    }

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <footer
        className="pt-5 pb-3 mt-5"
        style={{ backgroundColor: "#e6ccb2", color: "#000" }}
      >
        <div className="container">
          <div className="row text-center text-md-start align-items-start">
            {/* Logo + slogan + social icons */}
            <div className="col-md-3 mb-4 mb-md-0">
              <div className="d-flex align-items-center mb-2">
                <img
                  src="/images/logo.png"
                  alt="FurEver Care Logo"
                  style={{
                    height: "40px",
                    width: "40px",
                    objectFit: "contain",
                  }}
                  className="me-2"
                />
                <h2 className="fw-bold mb-0">FurEver Care</h2>
              </div>
              <p className="mb-2 small">
                Dedicated to the health and happiness of your beloved pets.
              </p>
              <div className="d-flex gap-3 mt-2">
                <a href="#" className="fs-5 text-dark">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="fs-5 text-dark">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="fs-5 text-dark">
                  <i className="fab fa-tiktok"></i>
                </a>
                <a href="#" className="fs-5 text-dark">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>

            {/* Quick Links chia 3 nhóm */}
            <div className="col-md-5 mb-4 mb-md-0 d-flex justify-content-center gap-5">
              <div>
                <h6 className="fw-bold">Pet Owner</h6>
                <ul className="list-unstyled">
                  <li>
                    <Link to="/" className="text-dark text-decoration-none">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about"
                      className="text-dark text-decoration-none"
                    >
                      About
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h6 className="fw-bold">Vet</h6>
                <ul className="list-unstyled">
                  <li>
                    <Link
                      to="/veterinarian"
                      className="text-dark text-decoration-none"
                    >
                      Veterinarian
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services"
                      className="text-dark text-decoration-none"
                    >
                      Services
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h6 className="fw-bold">Animal Shelter</h6>
                <ul className="list-unstyled">
                  <li>
                    <Link
                      to="/adopt"
                      className="text-dark text-decoration-none"
                    >
                      Adopt
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact"
                      className="text-dark text-decoration-none"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Newsletter */}
            <div className="col-md-4 text-center text-md-start ps-md-4 border-start">
              <h6 className="fw-bold">Subscribe to our newsletter</h6>
              <p className="small text-muted mb-2">
                Get the latest updates and exclusive offers.
              </p>
              <form className="d-flex mb-3">
                <input
                  type="email"
                  className="form-control me-2"
                  placeholder="Enter your email"
                />
                <button
                  className="btn"
                  style={{ backgroundColor: "#7f5539", color: "#fff" }}
                >
                  Sign Up
                </button>
              </form>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center mt-4 pt-3 border-top border-dark small opacity-75">
            © {new Date().getFullYear()} FurEver Care. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Floating datetime + location box */}
      <div
        style={{
          position: "fixed",
          bottom: "10px",
          right: "10px",
          background: "#fff",
          border: "1px solid #7f5539",
          borderRadius: "6px",
          padding: "6px 12px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
          fontSize: "14px",
          color: "#000",
          zIndex: 9999,
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <span>{time.toLocaleTimeString()}</span>
        <span>|</span>
        <span className="fw-bold">{time.toLocaleDateString()}</span>
        <span>|</span>
        <span style={{ color: "#7f5539", fontWeight: "500" }}>{location}</span>
      </div>
    </>
  );
}

export default HomeFooter;
