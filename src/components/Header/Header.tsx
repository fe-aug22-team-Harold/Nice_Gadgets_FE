import React, { useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
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
import { client } from '../../utils/fetch';
import { setUser } from '../../features/userSlice';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { currentCart } = useAppSelector((state) => state.cart);
  const { currentFavorites } = useAppSelector((state) => state.favorites);
  const { user } = useAppSelector((state) => state.user);
  const [storedFavorites] = useLocalStorage('favorites');
  const [storedCart] = useLocalStorage('cart');

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const routeChange = () => {
    navigate('/');
  };

  const [userStores, setUserStores] = useLocalStorage('user');

  const logoutHandler = async() => {
    try {
      await client.get('/users/logout');
      routeChange();
      dispatch(setUser(null));
      setUserStores({});
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
    }
  };

  useEffect(() => {
    const userForState = 'id' in userStores ? userStores : null;

    dispatch(setFavorites(storedFavorites));
    dispatch(setCart(storedCart));
    dispatch(setUser(userForState));
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
          {user ? (
            <>
              <NavLink
                style={{
                  paddingTop: '12px',
                  textDecoration: 'none',
                  color: 'white',
                  borderLeft: '1px solid #323542',
                }}
                to={`/user`}
                className="nav__link--heart"
              >
                {user.name}
              </NavLink>
              <div
                className="nav__link--heart"
                onClick={logoutHandler}
                style={{
                  paddingTop: '12px',
                  textDecoration: 'none',
                  color: 'white',
                  borderLeft: '1px solid #323542',
                  cursor: 'pointer',
                }}
              >
                Logout
              </div>
            </>
          ) : (
            <>
              <NavLink
                to={`/sing-up`}
                className="nav__link--heart"
                style={{
                  paddingTop: '12px',
                  textDecoration: 'none',
                  color: 'white',
                  borderLeft: '1px solid #323542',
                }}
              >
                SingUp
              </NavLink>
              <NavLink
                to={`/login`}
                className="nav__link--heart"
                style={{
                  paddingTop: '12px',
                  textDecoration: 'none',
                  color: 'white',
                  borderLeft: '1px solid #323542',
                }}
              >
                Login
              </NavLink>
            </>
          )}
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
