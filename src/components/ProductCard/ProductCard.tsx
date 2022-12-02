/* eslint-disable no-shadow */
import React, { useState } from 'react';
import './ProductCard.scss';
import { Phone } from '../../types/Phone';
import phonePhoto from '../../phone-photo.png';
import cn from 'classnames';

const phoneCard = {
  id: '1',
  category: 'phones',
  phoneId: 'apple-iphone-7-32gb-black',
  itemId: 'apple-iphone-7-32gb-black',
  name: 'Apple iPhone 7 32GB Black',
  fullPrice: 400,
  price: 375,
  screen: '4.7 IPS',
  capacity: '32GB',
  color: 'black',
  ram: '2GB',
  year: 2016,
  image: 'img/phones/apple-iphone-7/black/00.jpg',
};

export const ProductCard: React.FC<Phone> = ({ phoneCard }) => {
  const {
    name,
    fullPrice,
    price,
    screen,
    capacity,
    ram,
  } = phoneCard;

  const [added, setAdded] = useState(false);
  const [favorite, setFavorite] = useState(false);

  return (
    <div className="card">
      <img
        className="card__img"
        src={phonePhoto}
        alt="iPhone"
        width="208px"
        height="196px"
      />

      <h2 className="card__title">
        {name}
      </h2>

      <p className="card__price">
        <span className="card__price-current">
          {`${price}`}
        </span>

        <span className="card__price-full">
          {`${fullPrice}`}
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
          onClick={() => {
            setAdded(!added);
          }}
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
        onClick={() => {
          setFavorite(!favorite);
        }}
        className={cn('card__favorites-icon', {
          'card__favorites-icon--active': favorite,
        })}
      >
        </a>
      </div>
    </div>
  );
};
