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
                                <Link className="nav-link" to="/petowner/homepetowner">
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
                                <Link className="nav-link" to="/petowner/emergency">
                                    Emergency and Vet Help
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavPetowner;
