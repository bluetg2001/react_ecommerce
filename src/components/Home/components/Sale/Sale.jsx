import React from 'react';

function Sale({ sales }) {
  return (
    <div className="sale">
      <div className="title txt-bold">{sales.title}</div>
      <div className="context">
        Up to <p className="percents txt-bold">{sales.percents}</p> sale for all
        {sales.context}
      </div>
      <div className="shop-btn">Shop Now</div>
    </div>
  );
}

export default Sale;
