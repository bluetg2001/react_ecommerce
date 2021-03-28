import React from 'react';
import Item from './components/Item/Item';
import { useSelector } from 'react-redux';

function Items({ item }) {
  const contextSet = useSelector((state) => state.layouts.item);

  return (
    <div className="block">
      <div className="wrapper">
        <div className="context">
          <div className="title txt-bold">{item.title}</div>
          <div className="view-all">View All</div>
        </div>
        <div className="items">
          <div className="item">
            {contextSet.map((contextSet, idx) => {
              return <Item context={contextSet} key={idx} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Items;
