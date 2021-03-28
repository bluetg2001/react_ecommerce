import React from 'react';

function Item({ context }) {
  return (
    <div className="contents">
      <div className="content">
        <div className="new txt-bold">New</div>
      </div>
      <div className="context">
        <div className="title txt-bold">{context.title}</div>
        <div className="price">{context.price}</div>
      </div>
      <div className="detail">{context.detail}</div>
    </div>
  );
}

export default Item;
