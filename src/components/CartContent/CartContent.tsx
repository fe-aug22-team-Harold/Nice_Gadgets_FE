import React from 'react';
import { CartItem } from '../CartItem';
import { Checkout } from '../Checkout';
import './CartContent.scss';

export const CartContent: React.FC = () => {
  return (
    <div
      className="cart__content
        grid
        grid__item--desktop-1-24
        grid__item--tablet-1-12
        grid__item--mobile-1-4"
    >
      <div
        className="cart__list
          grid__item--desktop-1-16
          grid__item--tablet-1-12
          grid__item--mobile-1-4"
      >
        <CartItem />

        <CartItem />
      </div>

      <Checkout />
    </div>
  );
};
