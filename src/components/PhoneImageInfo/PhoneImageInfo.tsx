/* eslint-disable no-shadow */
import React, { useState } from 'react';
import './PhoneImageInfo.scss';
import { Phone } from '../../types/Phone';
import cn from 'classnames';

type Props = {
  phoneCard: Phone,
};

export const PhoneImageInfo: React.FC<Props> = ({ phoneCard }) => {
  const {
    fullPrice,
    price,
    screen,
    ram,
  } = phoneCard;

  const [added, setAdded] = useState(false);
  const [favorite, setFavorite] = useState(false);

  return (
    <div className='phone-info'>
      <div className='phone-info__container'>
        <div className='phone-info__colors'>
          <div className='phone-info phone-info__title-block'>
            <h2 className='phone-info__title'>Available colors</h2>
            <h2 className='phone-info__phone-id'>ID: 802390</h2>
          </div>

          <div className='phone-info__color'>
            <button className='phone-info__color-button'></button>
            <button className='
              phone-info__color-button
              phone-info__color-button--2'
            ></button>
            <button className='
              phone-info__color-button
              phone-info__color-button--3'
            ></button>
            <button className='
              phone-info__color-button
              phone-info__color-button--4'
            ></button>
          </div>
        </div>

        <div className='phone-info__capacity'>
          <h2 className='phone-info__title'>
            Select capacity
          </h2>

          <div className='phone-info__capacity__buttons'>
            <button className='
              phone-info__capacity__button
              phone-info__capacity-button--low'
            >64 GB</button>
            <button className='
              phone-info__capacity__button
              phone-info__capacity-button--med'
            >256 GB</button>
            <button className='
              phone-info__capacity__button
              phone-info__capacity-button--high'
            >512 GB</button>
          </div>
        </div>

        <div className="phone-info__purchase">
          <p className="phone-info__price">
            <span className="phone-info__price-current">
              ${price}
            </span>

            <span className="phone-info__price-full">
              ${fullPrice}
            </span>
          </p>

          <div className='phone-info__buy'>
            <a
              onClick={() => {
                setAdded(!added);
              }}
              className={cn('phone-info__add-to-cart', {
                'phone-info__add-to-cart--active': added,
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
              className={cn('phone-info__favorites-icon', {
                'phone-info__favorites-icon--active': favorite,
              })}
            >
              <div className="favorite-icon"></div>
            </a>
          </div>

          <div className="phone-info__features">
            <p className="phone-info__feature">
              <span className="phone-info__feature-name">
                Screen
              </span>

              <span className="phone-info__feature-value">
                {screen}
              </span>
            </p>

            <p className="phone-info__feature">
              <span className="phone-info__feature-name">
                Resolution
              </span>

              <span className="phone-info__feature-value">
                2688x1242
              </span>
            </p>

            <p className="phone-info__feature">
              <span className="phone-info__feature-name">
                Processor
              </span>

              <span className="phone-info__feature-value">
                Apple A12 Bionic
              </span>
            </p>

            <p className="phone-info__feature">
              <span className="phone-info__feature-name">
                RAM
              </span>

              <span className="phone-info__feature-value">
                {ram}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
