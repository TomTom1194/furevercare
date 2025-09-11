import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function NavPetowner() {
    const [isOpen, setIsOpen] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);
    const location = useLocation();

    useEffect(() => {
        setIsOpen(false);
        const storedUser = localStorage.getItem("currentUser");
        if (storedUser) {
            setCurrentUser(JSON.parse(storedUser));
        }
    }, [location]);

    // ✅ Helper để check active link
    const isActive = (path) => (location.pathname === path ? "active-link" : "");

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
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-2 align-items-center">
                            <li className="nav-item">
                                <Link to="/petowner/homepetowner">
                                    <img src="/images/logo.png" alt="Logo" style={{ width: "70px" }} />
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${isActive("/petowner/homepetowner")}`} to="/petowner/homepetowner">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${isActive("/petowner/petcare")}`} to="/petowner/petcare">
                                    Pet Care
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${isActive("/petowner/petproduct")}`} to="/petowner/petproduct">
                                    Pet Product
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${isActive("/petowner/aboutus")}`} to="/petowner/aboutus">
                                    About Us
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${isActive("/petowner/contactus")}`} to="/petowner/contactus">
                                    Contact Us
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${isActive("/petowner/feedback")}`} to="/petowner/feedback">
                                    Feedback
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${isActive("/petowner/emergency")}`} to="/petowner/emergency">
                                    Emergency and Vet Help
                                </Link>
                            </li>
                        </ul>

                        {/* Hiển thị "Hi, user" nếu role là user */}                      {currentUser && currentUser.role === "user" && (
                            <Link
                                to="/petowner/myprofile"
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
