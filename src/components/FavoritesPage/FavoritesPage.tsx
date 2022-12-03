/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getPhonesAsync } from '../../features/phonesSlice';
import { ProductCard } from '../ProductCard';
import { Loader } from '../Loader';

export const FavoritesPage: React.FC = () => {
  const { allPhones, status } = useAppSelector((state) => state.phones);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPhonesAsync());
  }, []);

  return (
    <div className="favorites-page">
      <div className="favorites-page__container">
        {status === 'loading' && <Loader />}
        <div className="all-phones">
          <div className="favorites-page__text">
            <div className="favorites-page__title">Favourites</div>
            <div className="favorites-page__models-number">95 models</div>
          </div>
        </div>
        <div className="favorites-page__all-favorites all-phones">
          {allPhones
            && status === 'idle'
            && allPhones
              .slice(0, 5)
              .map((phone) => (
                <ProductCard key={phone.itemId} phoneCard={phone} />
              ))}
        </div>
      </div>
    </div>
  );
};
