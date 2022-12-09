/* eslint-disable no-shadow */
import React, { useEffect, useState } from 'react';
import './PhoneImageInfo.scss';
import { Phone } from '../../types/Phone';
import cn from 'classnames';
import {
  useAppDispatch, useAppSelector, useLocalStorage,
} from '../../app/hooks';
import { addToCart, setCart } from '../../features/cartSlice';
import {
  addFavorites, removeFavorites, setFavorites,
} from '../../features/favoritesSlice';
import { useNavigate } from 'react-router-dom';

type Props = {
  phoneCard: Phone,
  colors: string[],
  memory: string[],
  currentColor: string,
  currentMemory: string,
};

export const PhoneImageInfo: React.FC<Props> = ({
  phoneCard,
  memory,
  colors,
}) => {
  const {
    fullPrice,
    price,
    screen,
    ram,
    color: currentColor,
    capacity: currentMemory,
    image,
  } = phoneCard;

  const [favoritesStored, setFavoritesStored] = useLocalStorage('favorites');
  const [cartStored, setCartStored] = useLocalStorage('cart');
  const dispatch = useAppDispatch();
  const { currentFavorites } = useAppSelector(state => state.favorites);
  const { currentCart } = useAppSelector(state => state.cart);

  const navigate = useNavigate();
  const routeChange = (memoryToFind: string, colorToFind: string) => {
    const basePhone = image.split('/')[2];

    navigate(`/phones/${basePhone}-${memoryToFind.toLowerCase()}-${colorToFind}`);
  };

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
    <div className='phone-info'>
      <div className='phone-info__container'>
        <div className='phone-info__colors'>
          <div className='phone-info phone-info__title-block'>
            <h2 className='phone-info__title'>Available colors</h2>
            <h2 className='phone-info__phone-id'>ID: 802390</h2>
          </div>

          <div className='phone-info__color'>
            {colors.map(color => (
              // eslint-disable-next-line max-len
              <button className={cn(
                `phone-info__color-button phone-info__color-button--${color}`,
                {
                  'phone-info__color-button--active': color === currentColor,
                },
              )}
                key={color}
                onClick={() => {
                  routeChange(currentMemory, color);
                }}
              ></button>
            ))}
          </div>
        </div>

        <div className='phone-info__capacity'>
          <h2 className='phone-info__title'>
            Select capacity
          </h2>

          <div className='phone-info__capacity__buttons'>
            {memory.map(capacity => (
              <button className={cn(
                'phone-info__capacity__button phone-info__capacity-button--low',
                {
                  // eslint-disable-next-line max-len
                  'phone-info__capacity__button--active': capacity === currentMemory,
                },
              )}
                key={capacity}
                onClick={() => {
                  routeChange(capacity, currentColor);
                }}
              >
                {capacity}
              </button>
            ))}
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
              onClick={addToCartHandler}
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
              onClick={addToFavoriteHandler}
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
