import React, { useEffect, useMemo } from 'react';
import classNames from 'classnames';
import {
  useAppDispatch, useAppSelector, useLocalStorage,
} from '../../app/hooks';
import { Link } from 'react-router-dom';
import {
  addToCart, removeFromCart, setCart,
} from '../../features/cartSlice';
import './CartItem.scss';
import { Phone } from '../../types/Phone';

// eslint-disable-next-line max-len
const staticURL = 'https://raw.githubusercontent.com/fe-aug22-team-Harold/nice_gadgets_static-files/master/';

type Props = {
  phoneItem: Phone,
}

export const CartItem: React.FC<Props> = ({ phoneItem }) => {
  const { currentCart } = useAppSelector(state => state.cart);
  const [, setCartStored] = useLocalStorage('cart');
  const dispatch = useAppDispatch();

  const sameItemInCart = useMemo(() => {
    return currentCart.filter(item => item.itemId === phoneItem.itemId).length;
  }, [currentCart]);

  const deleteHandler = () => {
    const isEmpty = currentCart
      .filter(item => item.itemId !== phoneItem.itemId).length === 0;

    if (isEmpty) {
      setCartStored([]);
    }

    dispatch(removeFromCart(phoneItem));
  };

  const minusHandler = () => {
    if (sameItemInCart === 1) {
      return;
    }

    const indexToDelete = currentCart.lastIndexOf(phoneItem);

    const cartItems = [...currentCart];

    cartItems.splice(indexToDelete, 1);

    dispatch(setCart(cartItems));
  };

  const plusHandler = () => {
    dispatch(addToCart(phoneItem));
  };

  useEffect(() => {
    setCartStored(currentCart);
  }, [currentCart]);

  return (
    <div className="cart-item">
      <div className="cart-item__info">
        <span
          onClick={deleteHandler}
          className="icon icon__close icon__close--cart-item"
        ></span>

        <div className="cart-item__description">
          <Link to={`/phones/${phoneItem.itemId}`}>
            <img
              className="card__img card__img--cart"
              src={staticURL + phoneItem.image.replace(/jpg/g, 'png')}
              alt="phone"
            />
          </Link>
          <p className="cart-item__title">{phoneItem.name}</p>
        </div>
      </div>

      <div className="cart-item__price-block">
        <div className="cart-item__icons-block">
          <a
            onClick={minusHandler}
            className={
            classNames('icon icon__cart-item icon__cart-item--minus', {
              'icon__cart-item--minus-disabled': sameItemInCart === 1,
            })}
          ></a>
          <div className="cart-item__counter">
            {sameItemInCart}
          </div>
          <a
            onClick={plusHandler}
            className="icon
              icon__cart-item
              icon__cart-item--plus"
          ></a>
        </div>

        <div className="cart-item__price">
          $ {phoneItem.price}
        </div>
      </div>
    </div>
  );
};
