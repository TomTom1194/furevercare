import React, { useState, useEffect } from "react";

export default function FilterProduct({ original, onFilter }) {
    const [typeOptions, setTypeOptions] = useState([]);
    const [priceOptions, setPriceOptions] = useState([]);

    const filterTypeProduct = Array.from(new Set(original.map((p) => p.typeProduct)));

    // Các khoảng giá
    const priceRanges = [
        { label: "Under $20", min: 0, max: 20 },
        { label: "$20 - $40", min: 20, max: 40 },
        { label: "$40 - $60", min: 40, max: 60 },
        { label: "Over $60", min: 60, max: Infinity },
    ];

    // Xử lý chọn typeProduct
    const handleTypeChange = (value) => {
        let updated = [...typeOptions];
        if (updated.includes(value)) {
            updated = updated.filter((item) => item !== value);
        } else {
            updated.push(value);
        }
        setTypeOptions(updated);
    };

    // Xử lý chọn price range
    const handlePriceChange = (rangeLabel) => {
        let updated = [...priceOptions];
        if (updated.includes(rangeLabel)) {
            updated = updated.filter((item) => item !== rangeLabel);
        } else {
            updated.push(rangeLabel);
        }
        setPriceOptions(updated);
    };

    // Kết hợp filter type + price
    useEffect(() => {
        let filtered = [...original];

        // Filter theo typeProduct
        if (typeOptions.length > 0) {
            filtered = filtered.filter((item) => typeOptions.includes(item.typeProduct));
        }

        // Filter theo price
        if (priceOptions.length > 0) {
            filtered = filtered.filter((item) =>
                priceOptions.some((label) => {
                    const range = priceRanges.find((r) => r.label === label);
                    return item.price >= range.min && item.price < range.max;
                })
            );
        }

        onFilter(filtered);
    }, [typeOptions, priceOptions, original, onFilter]);

    return (
        <div className="filter d-flex gap-4 px-4 mt-2 flex-wrap">

            {/* Filter Type */}
            <div className="d-flex gap-2 align-items-center flex-wrap">
                <p className="mb-0">Type:</p>
                {filterTypeProduct.map((type, index) => (
                    <div key={index} className="form-check p-0">
                        <input
                            type="checkbox"
                            className="btn-check"
                            autoComplete="off"
                            id={`filter-type-${type}`}
                            value={type}
                            checked={typeOptions.includes(type)}
                            onChange={() => handleTypeChange(type)}
                        />
                        <label
                            className="btn btn-outline-secondary text-nowrap"
                            htmlFor={`filter-type-${type}`}
                        >
                            {type}
                        </label>
                    </div>
                ))}
            </div>

            <div className="d-flex gap-2 align-items-center flex-wrap">
                <p className="mb-0">Price:</p>
                {priceRanges.map((range, index) => (
                    <div key={index} className="form-check p-0">
                        <input
                            type="checkbox"
                            className="btn-check"
                            autoComplete="off"
                            id={`filter-price-${index}`}
                            value={range.label}
                            checked={priceOptions.includes(range.label)}
                            onChange={() => handlePriceChange(range.label)}
                        />
                        <label
                            className="btn btn-outline-secondary text-nowrap"
                            htmlFor={`filter-price-${index}`}
                        >
                            {range.label}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
}
