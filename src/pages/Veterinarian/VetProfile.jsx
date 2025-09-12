import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import vets from "../../Data/Vet/veterinarian.json";
import BookingModal from "./BookingModal";

const VetProfile = () => {
  const { id } = useParams();
  const vet = vets.find((v) => v.id === parseInt(id));

  // State để hiển thị modal
  const [showModal, setShowModal] = useState(false);

  const handleBookingNow = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  if (!vet) {
    return (
      <div className="container mt-4">
        <h2 className="text-danger">Veterinarian not found</h2>
        <Link
          to="/veterinarian"
          className="btn"
          style={{
            border: "1px solid black",
            color: "black",
            backgroundColor: "transparent",
          }}
        >
          Back to List
        </Link>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <div className="card shadow p-4">
        <div className="row">
          <div className="col-md-4">
            <img
              src={vet.image}
              alt={vet.name}
              className="img-fluid rounded"
              style={{ objectFit: "cover", maxHeight: "350px" }}
            />
          </div>
          <div className="col-md-8">
            <h2 className="fw-bold text-primary">{vet.name}</h2>
            <p>
              <strong>Specialization:</strong> {vet.specialization}
            </p>
            <p>
              <strong>Email:</strong> {vet.email}
            </p>
            <p>
              <strong>Phone:</strong> {vet.phone}
            </p>
            <p>
              <strong>Working Time:</strong> {vet.working_time}
            </p>

            <div className="mt-3 d-flex gap-2">
              {/* Back to List - nút viền đen */}
              <Link
                to="/veterinarian"
                className="btn"
                style={{
                  border: "1px solid black",
                  color: "black",
                  backgroundColor: "transparent",
                }}
              >
                ← Back to List
              </Link>

              {/* Booking Now - nút nền nâu sang trọng */}
              <button
                className="btn"
                style={{
                  backgroundColor: "#7f5539",
                  color: "white",
                  border: "none",
                }}
                onClick={handleBookingNow}
              >
                Booking Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      {showModal && (
        <BookingModal
          show={showModal}
          vet={vet}
          handleClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default VetProfile;
