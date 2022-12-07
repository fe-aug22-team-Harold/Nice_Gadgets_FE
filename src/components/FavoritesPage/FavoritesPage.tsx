import React from 'react';
import { useAppSelector } from '../../app/hooks';
import { ProductCard } from '../ProductCard';
import { HistoryBlock } from '../HistoryBlock';

export const FavoritesPage: React.FC = () => {
  const { currentFavorites } = useAppSelector((state) => state.favorites);

  return (
    <div className="favorites-page">
      <div className="favorites-page__container">
        <div className="favorites-page__grid">
          <div className="favorites-page__history">
            <HistoryBlock firstRoute={'Favourites'} secondRoute={undefined} />
          </div>
          <div className="favorites-page__text">
            <div className="favorites-page__title">Favourites</div>
            <div className="favorites-page__models-number">
              {currentFavorites.length} models
            </div>
          </div>
        </div>
        <div className="favorites-page__all-favorites all-phones">
          {currentFavorites
            && currentFavorites.map((phone) => (
              <ProductCard key={phone.itemId} phoneCard={phone} />
            ))}
        </div>
      </div>
    </div>
  );
};
