import React from "react";
import { useParams, Link } from "react-router-dom";
import vets from "../../Data/Vet/veterinarian.json";

const VetProfile = () => {
  const { id } = useParams();
  const vet = vets.find((v) => v.id === parseInt(id));

  if (!vet) {
    return (
      <div className="container mt-4">
        <h2 className="text-danger">Veterinarian not found</h2>
        <Link to="/veterinarian" className="btn btn-primary mt-3">
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
            <Link to="/veterinarian" className="btn btn-outline-primary mt-3">
              ← Back to List
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VetProfile;
