import { useState } from "react";
import { Link } from "react-router-dom";

function SignUp() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Sign Up Data:", formData);
    };

    return (
        <div className="signup container mt-5 d-flex justify-content-center ">
            <div
                className="p-4 bg-white rounded-4 shadow"
                style={{ maxWidth: "400px", width: "100%", border: "1px solid #ddd" }}
            >
                <h2 className="mb-4 text-center text-brown">Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    {/* Name */}
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                            Name
                        </label>
                        <input
                            type="text"
                            className="form-control rounded"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Enter your name"
                        />
                    </div>

                    {/* Email */}
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Email
                        </label>
                        <input
                            type="email"
                            className="form-control rounded"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="Enter your email"
                        />
                    </div>

                    {/* Phone */}
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">
                            Phone
                        </label>
                        <input
                            type="tel"
                            className="form-control rounded"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            placeholder="Enter your phone number"
                        />
                    </div>

                    {/* Submit */}
                    <button type="submit" className="btn btncss w-100 rounded shadow-sm">
                        Sign Up
                    </button>
                    <div className="text-center  mt-3">
                        <small>
                            Have an account?
                            <Link to="/" className="text-decoration-none ms-1 text-brown">
                                Sign In
                            </Link>
                        </small>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignUp;
