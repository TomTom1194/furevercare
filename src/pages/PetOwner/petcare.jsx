import PetList from "../../Component/pet_owner/petcare/PetList";
import Search from "../../Component/pet_owner/Search";
import React, { useState } from 'react';
import Filter from "../../Component/pet_owner/Filter";


function PetCare({ db }) {
    const [petData, setPetData] = useState(db);
    return (
        <div className="petcare container">
            <h2 className="mt-3 p-2 ">Petcare</h2>
            <div className="p-2">
                <Search type="breed" db={db} onSearch={setPetData} />
            </div>
            <div className="p-2">
                <Filter db={db} onFilter={setPetData} typefilter="species" />
            </div>
            <PetList db={petData} />
        </div>
    );
}

export default PetCare;