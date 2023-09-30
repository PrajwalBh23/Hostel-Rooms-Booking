import React from 'react';
import './Search_Bar.css';

const SearchBar = () => {
  return (
    <div className="search-ba">
      <select className="select-optio">
        <option value="option1">College</option>
        <option value="option2">Area</option>
      </select>
      
      <div className="search-containe">
        <input type="text" placeholder="Search..." />
        <button className='butt'>Search</button>
      </div>
    </div>
  );
};

export default SearchBar;
