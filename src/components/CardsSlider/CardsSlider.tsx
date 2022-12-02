import React from 'react';
import './CardsSlider.scss';
import { Phone } from '../../types/Phone';
import { ProductCard } from '../ProductCard';

type Props = {
  allPhones: Phone[],
};

export const CardsSlider: React.FC<Props> = ({ allPhones }) => {
  return (
    <section className='cards-slider'>
      <div className='cards-slider__container'>
        <div className='cards-slider__top'>
          <h2 className='cards-slider__title'>Brand new models</h2>

          <div className="cards-slider__buttons">
            <a className="cards-slider__button">
              <div className="arrow-icon arrow-icon--left"></div>
            </a>

            <a className="cards-slider__button">
              <div className="arrow-icon"></div>
            </a>
          </div>
        </div>

        <ul className="cards-slider__phone">
          {allPhones.map((phone: Phone) => (
            <li key={phone.id}>
              <ProductCard phoneCard={phone} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
