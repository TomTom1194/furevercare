import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import vets from "../../Data/Vet/veterinarian.json";
import BookingModal from "./BookingModal";

const VetProfile = () => {
  const { id } = useParams();
  const vet = vets.find((v) => v.id === parseInt(id));

  const [mainImage, setMainImage] = useState(vet?.image || "");

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
    <div className="container my-5">
      <div className="row align-items-start">
        {/* Ảnh bác sĩ */}
        <div className="col-md-6">
          <div className="mb-3 text-center">
            <img
              src={mainImage}
              alt={vet.name}
              className="img-fluid rounded border shadow-sm"
              style={{ maxHeight: "400px", objectFit: "cover" }}
            />
          </div>

          {/* Nếu JSON có mảng images -> hiển thị thumbnail */}
          {vet.images && vet.images.length > 0 && (
            <div className="d-flex gap-3 flex-wrap justify-content-center">
              {[vet.image, ...vet.images].map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index}`}
                  className="img-thumbnail"
                  style={{
                    width: "90px",
                    height: "90px",
                    objectFit: "cover",
                    cursor: "pointer",
                  }}
                  onClick={() => setMainImage(img)}
                />
              ))}
            </div>
          )}
        </div>

        {/* Thông tin bác sĩ */}
        <div className="col-md-6">
          <h2 className="mb-4 mt-3" style={{ color: "rgb(148, 118, 94)" }}>
            {vet.name}
          </h2>

          <div className="mb-3">
            <div className="d-flex mb-3">
              <strong className="me-2" style={{ width: "120px" }}>
                Specialization:
              </strong>
              <span>{vet.specialization}</span>
            </div>
            <hr className="my-2" />

            <div className="d-flex mb-3">
              <strong className="me-2" style={{ width: "120px" }}>
                Email:
              </strong>
              <span>{vet.email}</span>
            </div>
            <hr className="my-2" />

            <div className="d-flex mb-3">
              <strong className="me-2" style={{ width: "120px" }}>
                Phone:
              </strong>
              <span>{vet.phone}</span>
            </div>
            <hr className="my-2" />

            <div className="d-flex mb-3">
              <strong className="me-2" style={{ width: "120px" }}>
                Working Time:
              </strong>
              <span>{vet.working_time}</span>
            </div>
          </div>

          {/* Description/About */}
          {vet.description && (
            <div className="border rounded p-3 bg-light">
              <h5 className="mb-2">About</h5>
              <p className="mb-0">{vet.description}</p>
            </div>
          )}

          <div className="mt-4 d-flex gap-2">
            <Link to="/veterinarian" className="btn btn-outline-dark">
              ← Back to List
            </Link>
          </div>
        </div>
      </div>

      {/* Booking Modal hiển thị mặc định */}
      <div className="mt-5">
        <BookingModal vet={vet} />
      </div>
    </div>
  );
};

export default VetProfile;