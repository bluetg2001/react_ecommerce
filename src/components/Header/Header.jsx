import React from 'react';
import Logo from './components/Logo/Logo';
import Navigation from './components/Navigation/Navigation';
import Languages from './components/Languages/Languages';
import { useSelector } from 'react-redux';
import './css/index.css';

function Header() {
  const menuSet = useSelector((state) => state.layouts.menus);

  return (
    <header className="header">
      <div className="wrapper">
        <Logo menus={menuSet} />
        <Navigation menus={menuSet} />
        <Languages />
      </div>
    </header>
  );
}

export default Header;
