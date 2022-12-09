/* eslint-disable no-shadow */
import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import './ProductCard.scss';
import { Phone } from '../../types/Phone';

import {
  useAppDispatch, useAppSelector, useLocalStorage,
} from '../../app/hooks';
import {
  addFavorites, removeFavorites, setFavorites,
} from '../../features/favoritesSlice';
import { Link } from 'react-router-dom';
import { setCart, addToCart } from '../../features/cartSlice';

// eslint-disable-next-line max-len
const staticBasePath = 'https://raw.githubusercontent.com/fe-aug22-team-Harold/nice_gadgets_static-files/master/';

type Props = {
  phoneCard: Phone,
}

export const ProductCard: React.FC<Props> = ({ phoneCard }) => {
  const {
    name,
    fullPrice,
    itemId,
    price,
    screen,
    capacity,
    ram,
    image,
  } = phoneCard;

  const [favoritesStored, setFavoritesStored] = useLocalStorage('favorites');
  const [cartStored, setCartStored] = useLocalStorage('cart');
  const dispatch = useAppDispatch();
  const { currentFavorites } = useAppSelector(state => state.favorites);
  const { currentCart } = useAppSelector(state => state.cart);

  const [added, setAdded] = useState(
    cartStored.some((item: Phone) => item.itemId === phoneCard.itemId),
  );
  const [favorite, setFavorite] = useState(
    favoritesStored.some((item: Phone) => item.itemId === phoneCard.itemId),
  );

  const addToCartHandler = () => {
    if (currentCart.find(item => item.itemId === phoneCard.itemId)) {
      return;
    }

    setAdded(!added);
    dispatch(addToCart(phoneCard));
  };

  const addToFavoriteHandler = () => {
    if (currentFavorites.find(item => item.itemId === phoneCard.itemId)) {
      dispatch(removeFavorites(phoneCard));
    } else {
      dispatch(addFavorites(phoneCard));
    }
    setFavorite(!favorite);
  };

  useEffect(() => {
    dispatch(setFavorites(favoritesStored));
    dispatch(setCart(cartStored));
  }, []);

  useEffect(() => {
    setFavoritesStored(() => currentFavorites);
  }, [currentFavorites]);

  useEffect(() => {
    setCartStored(() => currentCart);
  }, [currentCart]);

  return (
    <div className="card">
      <div className="card__img-container">
        <Link to={`/phones/${itemId}`}>
          <img
            className="card__img"
            src={staticBasePath + image.replace(/jpg/g, 'png')}
            alt="iPhone"
            width="208px"
            height="196px"
          />
        </Link>
      </div>

      <h2 className="card__title">
        {name}
      </h2>

      <p className="card__price">
        <span className="card__price-current">
          ${price}
        </span>

        <span className="card__price-full">
          ${fullPrice}
        </span>
      </p>

      <div className="card__features">
        <p className="card__feature">
          <span className="card__feature-name">
            Screen
          </span>

          <span className="card__feature-value">
            {screen}
          </span>
        </p>

        <p className="card__feature">
          <span className="card__feature-name">
            Capacity
          </span>

          <span className="card__feature-value">
            {capacity}
          </span>
        </p>

        <p className="card__feature">
          <span className="card__feature-name">
            RAM
          </span>

          <span className="card__feature-value">
            {ram}
          </span>
        </p>
      </div>

      <div className='card__buy'>
        <a
          onClick={addToCartHandler}
          className={cn('card__add-to-cart', {
            'card__add-to-cart--active': added,
          })}
      >
        {
          added
            ? 'Added'
            : 'Add to cart'
        }
      </a>

      <a
        onClick={addToFavoriteHandler}
        className={cn('card__favorites-icon', {
          'card__favorites-icon--active': favorite,
        })}
      >
        </a>
      </div>
    </div>
  );
};
