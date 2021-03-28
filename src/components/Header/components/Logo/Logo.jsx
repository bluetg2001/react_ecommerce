import React from 'react';
import { Link } from 'react-router-dom';

function Logo({ menus }) {
  return (
    <div className="logo">
      <Link to={menus.keys(menus)[0]}>
        <img src="/assets/header/logo.svg" alt="OBREBI" />
      </Link>
    </div>
  );
}

export default Logo;
