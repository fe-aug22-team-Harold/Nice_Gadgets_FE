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
    const res: Phone[] = [];

    currentCart.forEach(item => {
      const i = res.findIndex(itm => itm.itemId === item.itemId);

      if (i === -1) {
        res.push(item);
      }
    });

    return res;
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
          <Link
            to={'/phones'}
            style={{
              textDecoration: 'none',
              color: '#27AE60',
              fontSize: '35px',
              textAlign: 'center',
            }}
          >
            Go to shop -&gt;
          </Link>
        )}
      </div>

      <Checkout />
    </div>
  );
};
