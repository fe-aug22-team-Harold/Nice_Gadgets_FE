import React from 'react';
import { Link } from 'react-router-dom';
import './Checkout.scss';

export const Checkout: React.FC = () => {
  return (
    <div
      className="checkout
        grid__item--desktop-17-24
        grid__item--tablet-1-12
        grid__item--mobile-1-4"
    >
      <h2 className="checkout__sum">$ 740</h2>
      <p className="checkout__total-items">Total for 3 items</p>
      <Link to="/" className="checkout__btn">Checkout</Link>
    </div>
  );
};
