import React from 'react';
import { Link } from 'react-router-dom';
import { NavBar } from '../NavBar/NavBar';
import './Header.scss';

export const Header: React.FC = () => {
  return (
    <div className="header">
      <Link to="/" className="logo" />
      <NavBar />
      <div className="icons">
        <span className="icon icon__heart"></span>
        <span className="icon icon__cart"></span>
        <span className="icon icon__menu"></span>
      </div>
    </div>
  );
};
