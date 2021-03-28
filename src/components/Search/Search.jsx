import React from 'react';
import Category from './components/Category/Category';
import Input from './components/Input/Input';
import Mypage from './components/Mypage/Mypage';
import './css/index.css';

function Search() {
  return (
    <div className="search">
      <div className="wrapper">
        <Category />
        <Input />
        <Mypage />
      </div>
    </div>
  );
}

export default Search;
