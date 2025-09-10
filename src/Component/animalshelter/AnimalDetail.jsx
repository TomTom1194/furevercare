import React from "react";

export default function AnimalDetail({ animal }) {
  return (
    <div className="container my-5">
      <div className="row">
        {/* Gallery bên trái */}
        <div className="col-md-6">
          <div className="card mb-3 shadow-sm">
            <img
              src={animal.mainImage}
              alt={animal.name}
              className="card-img-top"
              style={{ objectFit: "cover", height: "300px" }}
            />
          </div>

          <div className="row g-2">
            {animal.images.map((img, idx) => (
              <div className="col-4" key={idx}>
                <div className="card shadow-sm">
                  <img
                    src={img}
                    alt={`${animal.name} ${idx + 1}`}
                    className="card-img-top"
                    style={{ objectFit: "cover", height: "100px" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Thông tin bên phải */}
        <div className="col-md-6">
          <div className="card p-4 shadow-sm h-100">
            <h3 className="mb-3">{animal.name}</h3>
            <p className="mb-2">
              <strong>Species:</strong> {animal.species}
            </p>
            <p className="mb-2">
              <strong>Breed:</strong> {animal.breed}
            </p>
            <p className="mb-2">
              <strong>Age:</strong> {animal.age}
            </p>
          </div>
        </div>
      </div>

      {/* Detail full width */}
      <div className="row mt-4">
        <div className="col-12">
          <div className="card p-4 shadow-sm">
            <h5>Details</h5>
            <p>{animal.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
