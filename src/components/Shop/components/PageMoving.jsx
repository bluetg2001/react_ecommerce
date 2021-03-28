import React, { useState } from 'react';

function PageMoving() {
  const pageNum = [1, 2, 3, 4];

  return (
    <nav className="nav">
      <div className="moving-pages">
        {pageNum.map((num) => {
          return <div className="moving-page">{num}</div>;
        })}
        <div className="more">
          <img src="/assets/shop/more-icon.svg" alt="..." />
        </div>
        <div className="moving-page">10</div>
      </div>
      <div className="page-info txt-bold">Products from 1 to 12 of 80</div>
    </nav>
  );
}

export default PageMoving;
