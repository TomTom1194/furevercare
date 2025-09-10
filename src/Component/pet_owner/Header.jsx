import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="header">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                            <li className="nav-item">
                                <Link className="nav-link" to="/petowner">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/petowner/petcare">Pet Care</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Pet Product</a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/petowner/aboutus">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/petowner/contactus">Contact Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/petowner/feedback">Feedback</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Emergency and Vet Help</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;