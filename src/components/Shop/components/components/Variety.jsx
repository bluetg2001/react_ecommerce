import React from 'react';

function Variety({ menu }) {
  return (
    <div className="items">
      <div className="item">
        <div className="context">{menu.title}</div>
        <div className="plus-icon">
          <img src="/assets/shop/plus-icon.svg" alt="plus-icon" />
        </div>
      </div>
    </div>
  );
}

export default Variety;
