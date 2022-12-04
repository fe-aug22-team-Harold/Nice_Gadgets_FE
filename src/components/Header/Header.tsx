import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
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
      <div id="menu-hook">
        {isOpen && (
          <Menu>
            <div className="header">
              <Link to="/" className="logo" />

              <div className="icons">
                <span className="icon icon__close" onClick={closeMenu}></span>
              </div>
            </div>

            <NavLinks isOpen={isOpen} closeMenu={closeMenu} />

            <div className="icons icons--menu">
              <NavLink to={`/favorites`} className="nav__link--heart">
                <span className="icon icon__heart icon__heart--menu"></span>
              </NavLink>

              <NavLink to={`/cart`} className="nav__link--cart">
                <span
                  className="icon icon__cart icon__cart--menu"
                  onClick={closeMenu}
                ></span>
              </NavLink>
            </div>
          </Menu>
        )}
      </div>

      <div className="header">
        <Link to="/" className="logo" />

        <NavBar />

        <div className="icons">
          <NavLink to={`/favorites`} className="nav__link--heart">
            <span className="icon icon__heart icon__heart--relative">
              <div className="badge-counter badge-counter--heart">2</div>
            </span>
          </NavLink>

          <NavLink to={`/cart`} className="nav__link--cart">
            <div className="icon icon__cart icon__cart--relative">
              <div className="badge-counter badge-counter--cart">2</div>
            </div>
          </NavLink>

          <span className="icon icon__menu" onClick={openMenu}></span>
        </div>
      </div>
    </>
  );
};
