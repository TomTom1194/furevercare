import React, { useState, useEffect } from "react";

export default function Filter({ db, onFilter, typefilter }) {
    const [filterOptions, setFilterOptions] = useState([]);
    const filterTypeProduct = Array.from(new Set(db.map((p) => p[typefilter])));

    const handleCheckboxChange = (value) => {
        let updatedOptions = [...filterOptions];
        if (updatedOptions.includes(value)) {
            updatedOptions = updatedOptions.filter((item) => item !== value);
        } else {
            updatedOptions.push(value);
        }
        setFilterOptions(updatedOptions);
    };

    useEffect(() => {
        if (filterOptions.length === 0) {
            onFilter(db);
        } else {
            const filteredData = db.filter((data) =>
                filterOptions.includes(data[typefilter])
            );
            onFilter(filteredData);
        }
    }, [filterOptions, db, typefilter, onFilter]);

    return (
        <div className="filter d-flex gap-2 flex-wrap">
            {filterTypeProduct.map((type, index) => (
                <div key={index} className="form-check p-0">
                    <input
                        type="checkbox"
                        className="btn-check"
                        autoComplete="off"
                        id={`filter-${type}`}
                        value={type}
                        checked={filterOptions.includes(type)}
                        onChange={() => handleCheckboxChange(type)}
                    />
                    <label
                        className="btn btn-outline-secondary"
                        htmlFor={`filter-${type}`}
                        style={{ width: "6rem", textAlign: "center" }}
                    >
                        {type}
                    </label>
                </div>
            ))}
        </div>
    );
}
