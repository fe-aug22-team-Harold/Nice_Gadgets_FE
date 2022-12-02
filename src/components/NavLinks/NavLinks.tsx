import classNames from 'classnames';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavLinks.scss';

type Props = {
  isOpen?: boolean;
};

export const NavLinks: React.FC<Props> = ({ isOpen }) => {
  return (
    <div
      className={classNames('nav__bar', {
        'nav__bar--menu': isOpen,
      })}
    >
      <NavLink
        to="/"
        className={classNames('nav__link', {
          'nav__link--menu': isOpen,
        })}
      >
        Home
      </NavLink>
      <NavLink
        to="/phones"
        className={classNames('nav__link', {
          'nav__link--menu': isOpen,
        })}
      >
        Phones
      </NavLink>
      <NavLink
        to="/tablets"
        className={classNames('nav__link', {
          'nav__link--menu': isOpen,
        })}
      >
        Tablets
      </NavLink>
      <NavLink
        to="/accessories"
        className={classNames('nav__link', {
          'nav__link--menu': isOpen,
        })}
      >
        Accessories
      </NavLink>
    </div>
  );
};
