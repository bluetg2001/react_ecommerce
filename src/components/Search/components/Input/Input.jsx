import React from 'react';

function Input() {
  return (
    <div className="input">
      <input type="text" placeholder="Search Products" />
      <div className="search-icon">
        <img src="/assets/Search/input_search-icon.svg" alt="검색하기" />
      </div>
    </div>
  );
}

export default Input;
