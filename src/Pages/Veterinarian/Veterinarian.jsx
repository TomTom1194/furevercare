import React from "react";
import vets from "../../Data/Vet/veterinarian.json";
import { useNavigate } from "react-router-dom";

const Veterinarian = () => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/veterinarian/${id}`);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center fw-bold mb-4 text-primary">
        Our Veterinarians
      </h2>
      <div className="row">
        {vets.map((vet) => (
          <div
            key={vet.id}
            className="col-md-4 mb-4"
            onClick={() => handleClick(vet.id)}
            style={{ cursor: "pointer" }}
          >
            <div className="card shadow-sm h-100">
              <img
                src={vet.image}
                alt={vet.name}
                className="card-img-top"
                style={{ height: "220px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{vet.name}</h5>
                <p className="card-text">
                  <strong>Specialization:</strong> {vet.specialization}
                </p>
                <p className="card-text">
                  <strong>Working Time:</strong> {vet.working_time}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Veterinarian;
