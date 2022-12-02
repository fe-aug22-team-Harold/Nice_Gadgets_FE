import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from '../Menu';
import { NavBar } from '../NavBar';
import { NavLinks } from '../NavLinks';
import './Header.scss';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openMenu = () => {
    setIsOpen(true);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <Menu>
          <div className="header">
            <Link to="/" className="logo" />
            <div className="icons">
              <span className="icon icon__close" onClick={closeMenu}></span>
            </div>
          </div>
          <NavLinks isOpen={isOpen} />
          <div className="icons icons--menu">
            <span className="icon icon__heart icon__heart--menu"></span>
            <span className="icon icon__cart icon__cart--menu"></span>
          </div>
        </Menu>
      )}
      <div className="header">
        <Link to="/" className="logo" />
        <NavBar />
        <div className="icons">
          <span className="icon icon__heart"></span>
          <span className="icon icon__cart"></span>
          <span className="icon icon__menu" onClick={openMenu}></span>
        </div>
      </div>
    </>
  );
};
