import React from 'react';
import { Link } from 'react-router-dom';

function Menus({ menus, path }) {
  return (
    <div className="footer-menus">
      <ul className="menus">
        {menus.map((menus, idx) => {
          return (
            <li className="menu" key={idx}>
              <Link to={path}>{menus.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Menus;
