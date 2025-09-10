import React, { useState, useMemo } from "react";
import Animals from "../../Data/Animalshelter/animalshelter.json"; // file JSON của bạn

export default function AnimalShelter() {
  const [filters, setFilters] = useState({
    name: "",
    age: "",
    breed: "",
    description: "",
  });

  // Hàm handle change filter
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Lọc danh sách động vật dựa trên filters
  const filteredAnimals = useMemo(() => {
    return Animals.filter((animal) => {
      return (
        animal.name.toLowerCase().includes(filters.name.toLowerCase()) &&
        (filters.age === "" || animal.age === Number(filters.age)) &&
        animal.breed.toLowerCase().includes(filters.breed.toLowerCase()) &&
        animal.description
          .toLowerCase()
          .includes(filters.description.toLowerCase())
      );
    });
  }, [filters]);

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">🐾 Animal Shelter Gallery 🐾</h2>

      {/* Bộ lọc */}
      <div className="card p-3 mb-4">
        <h5 className="mb-3">Filter Animals</h5>
        <div className="row g-3">
          <div className="col-md-3">
            <input
              type="text"
              name="name"
              placeholder="Filter by Name"
              className="form-control"
              value={filters.name}
              onChange={handleFilterChange}
            />
          </div>
          <div className="col-md-2">
            <input
              type="number"
              name="age"
              placeholder="Age"
              className="form-control"
              value={filters.age}
              onChange={handleFilterChange}
            />
          </div>
          <div className="col-md-3">
            <input
              type="text"
              name="breed"
              placeholder="Breed"
              className="form-control"
              value={filters.breed}
              onChange={handleFilterChange}
            />
          </div>
          <div className="col-md-4">
            <input
              type="text"
              name="description"
              placeholder="Search in Description"
              className="form-control"
              value={filters.description}
              onChange={handleFilterChange}
            />
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="row">
        {filteredAnimals.length > 0 ? (
          filteredAnimals.map((animal) => (
            <div
              key={animal.id}
              className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
            >
              <div className="card h-100 shadow-sm">
                <img
                  src={animal.mainImage}
                  alt={animal.name}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{animal.name}</h5>
                  <p className="card-text">
                    <strong>Species:</strong> {animal.species} <br />
                    <strong>Breed:</strong> {animal.breed} <br />
                    <strong>Age:</strong> {animal.age} <br />
                    <small>{animal.description}</small>
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No animals match your filters.</p>
        )}
      </div>
    </div>
  );
}
