import React from "react";

function Policy() {
    return (
        <div className="policy border-1 rounded-0 card shadow-sm">

            <div
                className="p-3 text-center text-black fw-bold bg-light "
                style={{ fontSize: "1rem", borderBottom: "1px solid #ddd" }}
            >
                Support Policy
            </div>


            <div className="p-3 bg-white">
                <p className="mb-3 d-flex align-items-center">
                    <i className="bi bi-truck text-success me-2 fs-3"></i>
                    Free Shipping on all orders
                </p>
                <hr className="my-2" />
                <p className="mb-3 d-flex align-items-center">
                    <i className="bi bi-shield-check text-primary me-2 fs-3"></i>
                    100% Authentic Products
                </p>
                <hr className="my-2" />
                <p className="mb-3 d-flex align-items-center">
                    <i className="bi bi-wrench-adjustable text-warning me-2 fs-3"></i>
                    Professional Warranty Support
                </p>
                <hr className="my-2" />
                <p className="mb-0 d-flex align-items-center">
                    <i className="bi bi-telephone text-danger me-2 fs-3"></i>
                    Hotline: <span className="fw-bold text-brown">0123 456 789</span>
                </p>
            </div>
        </div>
    );
}

export default Policy;
