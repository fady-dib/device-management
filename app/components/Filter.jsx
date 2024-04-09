'use client';
import React, { useState, useEffect } from "react";


const Filter = ({ initialData = [] }) => {

    const [filter, setFilter] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        if (filter === '') {
            setFilteredData(initialData); 
        } else {
            const newData = initialData.filter(item => item.brand === filter);
            setFilteredData(newData); 
        }
    }, [filter,initialData]); 

    return (
        <div>
            <div className="my-4">
                <select
                    id="brand-filter"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="mt-1 px-3 py-2 border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-indigo-600 sm:text-sm rounded-md shadow-sm"
                >
                    <option value="">All Brands</option>
                    {[...new Set(initialData.map(item => item.brand))].map(brand => (
                        <option key={brand} value={brand}>{brand}</option>
                    ))}
                </select>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {(filteredData.length > 0 ? filteredData : initialData).map(device => (
                    <li key={device.id} className="rounded-lg shadow-md bg-white">
                        <div className="p-4">
                            <p className="text-xl font-semibold text-gray-600">{device.name}</p>
                            <p className="text-gray-600">{device.brand}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Filter
