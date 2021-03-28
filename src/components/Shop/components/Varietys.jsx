import React from 'react';
import Variety from './components/Variety';
import { useSelector } from 'react-redux';

function Varietys({ titles }) {
  const categorySet = useSelector((state) => state.layouts.shop);

  return (
    <div className="varietys">
      <div className="title txt-bold">{titles.title}</div>
      {categorySet.map((categorySet, idx) => {
        return <Variety menu={categorySet} key={idx} />;
      })}
    </div>
  );
}

export default Varietys;
