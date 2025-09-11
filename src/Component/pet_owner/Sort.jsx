import React, { useState, useEffect } from 'react';

function Sort({ db, onSort }) {
    const [sortOption, setSortOption] = useState("");
    const handleSort = () => {
        const sortedData = [...db].sort((a, b) => {
            switch (sortOption) {
                case "top_selling":
                    return b.sale_quantity - a.sale_quantity;
                case "price_asc":
                    return a.price - b.price;
                case "price_desc":
                    return b.price - a.price;
                case "rating":
                    return b.rating - a.rating;
                default:
                    return 0;
            }
        });
        onSort(sortedData);
    };
    useEffect(() => {
        handleSort();
    }, [db, sortOption])
    return (
        <div className="sort">
            <div className="d-flex align-items-center gap-2">
                <select className="form-select" aria-label="Default select example" onChange={(e) => setSortOption(e.target.value)} value={sortOption}>
                    <option value="" disable>Sort By</option>
                    <option value="top_selling">Top Selling</option>
                    <option value="price_asc">Price Low to High</option>
                    <option value="price_desc">Price High to Low</option>
                    <option value="rating">Customer Rating</option>
                </select>
            </div>
        </div>
    );
}

export default Sort;