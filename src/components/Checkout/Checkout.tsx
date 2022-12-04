import React from 'react';
import { Link } from 'react-router-dom';
import './Checkout.scss';
import { useAppSelector } from '../../app/hooks';

export const Checkout: React.FC = () => {
  const { currentCart } = useAppSelector(state => state.cart);

  return (
    <div
      className="checkout
        grid__item--desktop-17-24
        grid__item--tablet-1-12
        grid__item--mobile-1-4"
    >
      <h2 className="checkout__sum">
        $ {currentCart.reduce((acc, item) => acc + item.price, 0)}
      </h2>
      <p className="checkout__total-items">
        Total for {currentCart.length} items
      </p>
      <Link to="/" className="checkout__btn">Checkout</Link>
    </div>
  );
};
