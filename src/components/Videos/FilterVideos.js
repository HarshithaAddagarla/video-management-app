import React, { useState } from 'react';

const FilterVideos = ({ onFilter }) => {
    const [filterText, setFilterText] = useState('');

    const handleChange = (e) => {
        setFilterText(e.target.value);
        onFilter(e.target.value);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search videos..."
                value={filterText}
                onChange={handleChange}
            />
        </div>
    );
};

export default FilterVideos;
