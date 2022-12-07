import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu } from '../Menu';
import { NavBar } from '../NavBar';
import { NavLinks } from '../NavLinks';
import './Header.scss';
import {
  useAppDispatch,
  useAppSelector,
  useLocalStorage,
} from '../../app/hooks';
import { setFavorites } from '../../features/favoritesSlice';
import { setCart } from '../../features/cartSlice';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { currentCart } = useAppSelector((state) => state.cart);
  const { currentFavorites } = useAppSelector((state) => state.favorites);
  const [storedFavorites] = useLocalStorage('favorites');
  const [storedCart] = useLocalStorage('cart');
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setFavorites(storedFavorites));
    dispatch(setCart(storedCart));
  }, []);

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
                <span
                  className="
                    icon
                    icon__heart
                    icon__heart--relative
                    icon__heart--menu
                  "
                  onClick={closeMenu}
                >
                  <div className="
                    badge-counter
                    badge-counter--heart
                    badge-counter--heart-menu
                  "
                  >
                    {currentFavorites.length}
                  </div>
                </span>
              </NavLink>

              <NavLink
                to={`/cart`}
                className="nav__link--cart nav__link--cart-menu"
              >
                <span
                  className="
                    icon
                    icon__cart
                    icon__cart--relative
                    icon__cart--menu
                  "
                  onClick={closeMenu}
                >
                  <div className="
                    badge-counter
                    badge-counter--cart
                    badge-counter--cart-menu
                  "
                  >
                    {currentCart.length}
                  </div>
                </span>
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
              <div className="badge-counter badge-counter--heart">
                {currentFavorites.length}
              </div>
            </span>
          </NavLink>

          <NavLink to={`/cart`} className="nav__link--cart">
            <div className="icon icon__cart icon__cart--relative">
              <div className="badge-counter badge-counter--cart">
                {currentCart.length}
              </div>
            </div>
          </NavLink>

          <span className="icon icon__menu" onClick={openMenu}></span>
        </div>
      </div>
    </>
  );
};
