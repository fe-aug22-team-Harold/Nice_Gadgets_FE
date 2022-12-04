/* eslint-disable operator-linebreak */
/* eslint-disable max-len */
import React, { useEffect } from 'react';
import {
  useAppDispatch,
  useAppSelector,
  useLocalStorage,
} from '../../app/hooks';
import { ProductCard } from '../ProductCard';
import { setFavorites } from '../../features/favoritesSlice';
import { HistoryBlock } from '../HistoryBlock';

export const FavoritesPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { currentFavorites } = useAppSelector((state) => state.favorites);
  const [storedFavorites] = useLocalStorage('favorites');

  useEffect(() => {
    dispatch(setFavorites(storedFavorites));
  }, []);

  return (
    <div className="favorites-page">
      <div className="favorites-page__container">
        <div className="all-phones">
        <div className="favorites-page__history">
          <HistoryBlock
            firstRoute={'Phones'}
            secondRoute={'Apple iPhone 11 Pro Max 64GB Gold'}
          />
        </div>
          <div className="favorites-page__text">
            <div className="favorites-page__title">Favourites</div>
            <div className="favorites-page__models-number">
              {currentFavorites.length} models
            </div>
          </div>
        </div>
        <div className="favorites-page__all-favorites all-phones">
          {currentFavorites &&
            currentFavorites.map((phone) => (
              <ProductCard key={phone.itemId} phoneCard={phone} />
            ))}
        </div>
      </div>
    </div>
  );
};
