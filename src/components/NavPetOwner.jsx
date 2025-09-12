import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function NavPetowner() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();


    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    return (
        <div className="header">
            <nav className="navbar navbar-expand-lg navbar-light shadow-sm">
                <div className="container">
                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-controls="navbarSupportedContent"
                        aria-expanded={isOpen}
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                            <li className="nav-item">
                                <Link to="/petowner/home">
                                    <img src="/images/logo.png" alt="Logo" style={{ width: "70px" }} />
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${isActive("/petowner/home")}`} to="/petowner/home">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/petowner/petcare">
                                    Pet Care
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/petowner/petproduct">
                                    Pet Product
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/petowner/aboutus">
                                    About Us
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/petowner/contactus">
                                    Contact Us
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/petowner/feedback">
                                    Feedback
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${isActive("/petowner/emergency")}`} to="/petowner/emergency">
                                    Emergency
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link`} to="/veterinarian">
                                    Veterinarian
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link`} to="/animalshelter/animal">
                                    Animal Shelter
                                </Link>
                            </li>
                        </ul>

                        {currentUser && currentUser.role === "user" && (
                            <Link
                                to="/petowner/myprofile"
                                className="btn"
                                style={{ backgroundColor: "#7f5539", color: "white" }}
                            >
                                Hi, {currentUser.name}
                            </Link>
                        )}
                        {currentUser && currentUser.role === "vet" && (
                            <Link
                                to="/veterinarian/myprofile"
                                className="btn"
                                style={{ backgroundColor: "#7f5539", color: "white" }}
                            >
                                Hi, {currentUser.name}
                            </Link>
                        )}
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavPetowner;
