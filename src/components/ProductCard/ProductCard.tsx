/* eslint-disable no-shadow */
import React, { useState } from 'react';
import './ProductCard.scss';
import { Phone } from '../../types/Phone';
import cn from 'classnames';

type Props = {
  phoneCard: Phone,
}

export const ProductCard: React.FC<Props> = ({ phoneCard }) => {
  const {
    name,
    fullPrice,
    price,
    screen,
    capacity,
    ram,
    image,
  } = phoneCard;

  const [added, setAdded] = useState(false);
  const [favorite, setFavorite] = useState(false);

  // temp version of loading images from front-end.
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const imagePhone = require(`../../images/${image}`);

  return (
    <div className="card">
      <img
        className="card__img"
        src={imagePhone}
        alt="iPhone"
        width="208px"
        height="196px"
      />

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
