import React from 'react';
import { HistoryBlock } from '../HistoryBlock';
import { ProductCard } from '../ProductCard';
import { Phone } from '../../types/Phone';
import acces from './accessories.json';

export const AccessoriesPage: React.FC = () => {
  const accessories: Phone[] = acces.map(i => i);

  return (
    <div className="phones-page">
      <div className="phones-page__container">
        <div className="favorites-page__grid">
          <div className="favorites-page__history">
            <HistoryBlock
              firstRoute={'Accessories'}
              secondRoute={undefined}
            />
          </div>
          <div className="favorites-page__text">
            <div className="favorites-page__title">Accessories</div>
            <div className="favorites-page__models-number">2 models</div>
          </div>
        </div>
        <div className="phones-page__all-phones all-phones">
          {accessories.map((accessory) => (
            <ProductCard key={accessory.itemId} phoneCard={accessory} />
          ))}
        </div>
        <div style={{ paddingTop: '1px' }}></div>
      </div>
    </div>
  );
};
