import React, { useCallback, useState } from 'react';

function ShopItem({ contents: { title, color, type, price, percent } }) {
  function sale(fl, dis) {
    if (dis) {
      return (fl * (100 - dis)) / 100;
    } else {
      return fl;
    }
  }

  const [isOptionOpen, setIsOptionOpen] = useState(false);

  const showOptions = useCallback(() => {
    setIsOptionOpen(true);
  }, []);

  const closeOptions = useCallback(() => {
    setIsOptionOpen(false);
  }, []);

  return (
    <div className="item" onMouseOver={showOptions} onMouseOut={closeOptions}>
      <div className="img-box">
        {type ? (
          type === 'new' ? (
            <div className="badge txt-bold">New</div>
          ) : (
            <div className="badge txt-bold">-{percent}%</div>
          )
        ) : undefined}
        <div
          className={`options ${isOptionOpen ? 'open-option' : 'close-option'}`}
        >
          <ul className="lists">
            <li className="wish-list">
              <div className="context">Add to Wish List</div>
              <div className="icon">
                <img src="/assets/shop/heart-icon.svg" alt="heart-icon" />
              </div>
            </li>
            <li className="compare">
              <div className="context">Compare</div>
              <div className="icon">
                <img src="/assets/shop/compare-icon.svg" alt="compare-icon" />
              </div>
            </li>
            <li className="add-cart">
              <div className="context">Add to Cart</div>
              <div className="icon">
                <img src="/assets/shop/cart-icon.svg" alt="cart-icon" />
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="context">
        <div className="title txt-bold">{title}</div>
        <div className="price">${sale(price, percent)}</div>
      </div>
      <div className="detail">{color}</div>
    </div>
  );
}

export default ShopItem;
