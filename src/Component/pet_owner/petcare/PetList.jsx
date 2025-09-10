import React from "react";
import { Link } from "react-router-dom";
import "../../../index.css";

function PetList({ db }) {
  return (
    <div className="container my-4">
      <div className="row g-4">
        {db.map((pet) => (
          <div key={pet.id} className="col-sm-6 col-md-4">
            <Link to={`/petowner/petcare/${pet.breed}`}>
              <div className="card shadow-sm h-100">
                <img
                  src={pet.mainImage}
                  className="card-img-top"
                  alt={pet.breed}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{pet.breed}</h5>
                  <p
                    className="card-text"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      minHeight: "3rem"
                    }}
                  >
                    {pet.training_tips}
                  </p>
                  <button className="btn btn-primary mt-auto">View Details</button>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PetList;
