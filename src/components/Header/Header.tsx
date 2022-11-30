import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import logo from '../../images/logo.svg';
import { NavBar } from '../NavBar/NavBar';

export const Header: React.FC = () => {
  return (
    <div className="header">
      <Link to="/" className="logo">
        <img src={logo} alt="logo" />
      </Link>
      <NavBar />
    </div>
  );
};
