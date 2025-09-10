import React, { useState, useEffect } from 'react';

function Search({ type, db, onSearch }) {
    const [keySearch, setKeySearch] = useState("");
    const handleSearch = () => {
        if (!keySearch.trim()) {
            onSearch(db);
            return;
        }
        const searchdata = db.filter((data) => data[type]?.toLowerCase().includes(keySearch.toLowerCase()));
        onSearch(searchdata);
    }
    useEffect(() => {
        handleSearch();
    }, [keySearch, db]);
    return (
        <div className="search">
            <input type="text" className="form-control" name="search" onChange={(e) => setKeySearch(e.target.value)} placeholder={`Search ${type}`} />
        </div>
    );
}

export default Search; 