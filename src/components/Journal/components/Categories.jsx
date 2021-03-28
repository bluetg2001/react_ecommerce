import React from 'react';

function Categories({ context }) {
  return (
    <li className="category">
      <div>{context}</div>
    </li>
  );
}

export default Categories;
