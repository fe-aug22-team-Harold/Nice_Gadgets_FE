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
        <div className="phones-page__header">
          <div className="phones-page__history">
            <HistoryBlock
              firstRoute={'Accessories'}
              secondRoute={undefined}
            />
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
