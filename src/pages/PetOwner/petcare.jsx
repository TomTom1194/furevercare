import React, { useState, useEffect } from 'react';
import PetList from "../../Component/pet_owner/petcare/PetList";
import Search from "../../Component/pet_owner/Search";
import Filter from "../../Component/pet_owner/Filter";

function PetCare({ db }) {
    const [originalData] = useState(db);
    const [searchedData, setSearchedData] = useState(db);
    const [filteredData, setFilteredData] = useState(db);


    const handleSearch = (searchResult) => {
        setSearchedData(searchResult);
        setFilteredData(searchResult);
    };

    return (
        <div className="petcare container">
            <h2 className="mt-3 p-2">Petcare</h2>

            <div className="p-2">
                <Search
                    type="breed"
                    db={originalData}
                    onSearch={handleSearch}
                />
            </div>

            <div className="p-2">
                <Filter
                    original={searchedData}
                    db={searchedData}
                    onFilter={setFilteredData}
                    typefilter="species"
                />
            </div>

            <PetList db={filteredData} />
        </div>
    );
}

export default PetCare;
