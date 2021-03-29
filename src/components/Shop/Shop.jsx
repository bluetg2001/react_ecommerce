import React from 'react';
import PageMoving from './components/PageMoving';
import ShopItems from './components/ShopItems';
import Sort from './components/Sort';
import Varietys from './components/Varietys';
import './css/index.css';
import { useSelector } from 'react-redux';

function Shop() {
  const categorySet = useSelector((state) => state.layouts.category);
  const colorSet = useSelector((state) => state.layouts.color);
  const brandSet = useSelector((state) => state.layouts.brand);
  const priceSet = useSelector((state) => state.layouts.price);

  return (
    <div className="shop">
      <div className="wrapper">
        <div className="title">
          <div className="context txt-bold">Products</div>
          <div className="path">Home &gt; Products</div>
        </div>

        <div className="main">
          <aside className="aside">
            <div className="block">
              <Varietys titles={categorySet} />
              <Varietys titles={colorSet} />
              <Varietys titles={brandSet} />
              <Varietys titles={priceSet} />
            </div>
          </aside>
          <section className="section">
            <Sort />
            <ShopItems />
            <PageMoving />
          </section>
        </div>
      </div>
    </div>
  );
}

export default Shop;
