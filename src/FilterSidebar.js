// FilterSidebar.js
import React, { useState } from 'react';
import './App.css';  // Make sure your CSS with the above styles is here

function FilterSidebar() {
  const [filters, setFilters] = useState({
    beginner: false,
    intermediate: false,
    advanced: false
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setFilters(prevState => ({ ...prevState, [name]: checked }));
  };

  return (
    <div className="sidebar">
      <h3>Filter By Level</h3>
      <label>
        <input
          type="checkbox"
          name="beginner"
          checked={filters.beginner}
          onChange={handleCheckboxChange}
        />
        Beginner
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="intermediate"
          checked={filters.intermediate}
          onChange={handleCheckboxChange}
        />
        Intermediate
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="advanced"
          checked={filters.advanced}
          onChange={handleCheckboxChange}
        />
        Advanced
      </label>
    </div>
  );
}

export default FilterSidebar;
