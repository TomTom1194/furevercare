import PetProductList from "../../Component/pet_owner/petproduct/PetProductList";
import Search from "../../Component/pet_owner/Search";
import React, { useState, useEffect } from 'react';
import Sort from "../../Component/pet_owner/Sort";
import FilterProduct from "../../Component/pet_owner/petproduct/FilterProduct";

function PetProduct({ db }) {
    const [originalData] = useState(db);
    const [searchedData, setSearchedData] = useState(db);
    const [filterData, setFilterData] = useState(db);
    const [sortData, setSortData] = useState(db);
    const handleSearch = (searchResult) => {
        setSearchedData(searchResult);
        setSortData(filterData);
        setFilterData(searchResult);
    };

    return (
        <div className="petcare container">
            <h2 className="mt-3 p-2 ">Pet Product</h2>
            <div className="p-2 row">
                <div className="col-md-8">
                    <Search type="name" db={originalData} onSearch={handleSearch} />
                </div>
                <div className="col-md-4">
                    <Sort type="name" db={filterData} onSort={setSortData} />
                </div>
            </div>
            <div className="row">
                <FilterProduct original={searchedData} onFilter={setFilterData} />
            </div>
            <PetProductList db={sortData} />
        </div>
    );
}

export default PetProduct;
