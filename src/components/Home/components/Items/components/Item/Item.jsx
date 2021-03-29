import React from 'react';

function Item({ context: { title, price, detail, event } }) {
  return (
    <div className="contents">
      <div className="content">
        <div className="new txt-bold">{event}</div>
      </div>
      <div className="context">
        <div className="title txt-bold">{title}</div>
        <div className="price">{price}</div>
      </div>
      <div className="detail">{detail}</div>
    </div>
  );
}

export default Item;
