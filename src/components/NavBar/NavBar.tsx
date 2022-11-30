import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.scss';

export const NavBar: React.FC = () => {
  return (
    <div className="nav">
      <div className="nav__bar">
        <NavLink to="/" className="nav__link">
          Home
        </NavLink>
        <NavLink to="/phones" className="nav__link">
          Phones
        </NavLink>
        <NavLink to="/phones" className="nav__link">
          Tablets
        </NavLink>
        <NavLink to="/about" className="nav__link">
          Accessories
        </NavLink>
      </div>
    </div>
  );
};
