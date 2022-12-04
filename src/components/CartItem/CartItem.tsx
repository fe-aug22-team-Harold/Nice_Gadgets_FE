import React from 'react';
import './CartItem.scss';

export const CartItem: React.FC = () => {
  return (
    <div className="cart-item">
      <div className="cart-item__info">
        <span className="icon icon__close icon__close--cart-item"></span>
        <div className="cart-item__description">
          <img
            className="card__img card__img--cart"
            src="https://raw.githubusercontent.com/mate-academy/product_catalog/main/public/img/phones/apple-iphone-11/black/00.jpg"
            alt="phone"
          />
          <p className="cart-item__title">Apple iPhone 11 64GB Black</p>
        </div>
      </div>

      <div className="cart-item__price-block">
        <div className="cart-item__counter">
          <a
            className="icon
              icon__cart-item
              icon__cart-item--minus
              icon__cart-item--minus-disabled"
          ></a>
          1
          <a
            className="icon
              icon__cart-item
              icon__cart-item--plus"
          ></a>
        </div>

        <div className="cart-item__price">$ 740</div>
      </div>
    </div>
  );
};
