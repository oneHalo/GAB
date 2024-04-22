import React, { useState } from 'react';
import './SearchComponent.css';
function SearchComponent({ inputValue, setInputValue, handleSearch }) {
  
  return (
    <div className='container'>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter search term..."
        style={{ marginRight: '10px' }}
        className='input-field'
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchComponent;
