import React from 'react';
import { HistoryBlock } from '../HistoryBlock';
import { ProductCard } from '../ProductCard';
import { Phone } from '../../types/Phone';
import tabs from './tablets.json';

export const TabletsPage: React.FC = () => {
  const tablets: Phone[] = tabs.map(i => i);

  return (
    <div className="phones-page">
      <div className="phones-page__container">
        <div className="favorites-page__grid">
          <div className="favorites-page__history">
            <HistoryBlock firstRoute={'Tablets'} secondRoute={undefined} />
          </div>
          <div className="favorites-page__text">
            <div className="favorites-page__title">Tablets</div>
            <div className="favorites-page__models-number">
              2 models
            </div>
          </div>
        </div>
        <div className="phones-page__all-phones all-phones">
          {tablets.map((tablet) => (
            <ProductCard key={tablet.itemId} phoneCard={tablet} />
          ))}
        </div>
        <div style={{ paddingTop: '1px' }}></div>
      </div>
    </div>
  );
};
