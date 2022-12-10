import React, { useMemo } from 'react';
import { CartItem } from '../CartItem';
import { Checkout } from '../Checkout';
import './CartContent.scss';
import { useAppSelector } from '../../app/hooks';
import { Link } from 'react-router-dom';
import { Phone } from '../../types/Phone';

export const CartContent: React.FC = () => {
  const { currentCart } = useAppSelector(state => state.cart);

  const uniqCart: Phone[] = useMemo(() => {
    const uniqPhones: Phone[] = [];

    currentCart.forEach(item => {
      const i = uniqPhones.findIndex(itm => itm.itemId === item.itemId);

      if (i === -1) {
        uniqPhones.push(item);
      }
    });

    return uniqPhones;
  }, [currentCart]);

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
        {uniqCart.map(item =>
          <CartItem key={item.itemId} phoneItem={item} />)
        }

        {currentCart.length === 0 && (
          <div className="go-to-shop">
            <span className="go-to-shop__title">Cart is empty</span>
            <Link
              to={'/phones'}
              className="go-to-shop__link"
            >
              👉 Go to shop
            </Link>
          </div>
        )}
      </div>

      <Checkout />
    </div>
  );
};
