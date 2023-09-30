import React from 'react';
import './Search.css';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <select className="select-option">
        <option value="option1">College</option>
        <option value="option2">Area</option>
      </select>
      
      <div className="search-container">
        <input type="text" placeholder="Search..." />
        <button className='but'>Search</button>
      </div>
    </div>
  );
};

export default SearchBar;
