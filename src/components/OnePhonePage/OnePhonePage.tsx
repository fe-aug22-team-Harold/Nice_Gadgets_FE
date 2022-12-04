import React from 'react';
import { AboutPhone } from './AboutPhone';
import { TechSpecs } from './TechSpecs';
import './OnePhonePage.scss';

export const OnePhonePage: React.FC = () => {
  const phone = {
    'id': '3',
    'category': 'phones',
    'phoneId': 'apple-iphone-8-64gb-gold',
    'itemId': 'apple-iphone-8-64gb-gold',
    'name': 'Apple iPhone 8 64GB Gold',
    'fullPrice': 600,
    'price': 550,
    'screen': "4.7' IPS",
    'capacity': '64GB',
    'color': 'gold',
    'ram': '2GB',
    'year': 2017,
    'image': 'img/phones/apple-iphone-8/gold/00.jpg',
  };

  return (
    <div className="OnePhonePage">
      <div className="OnePhonePage__container">

        <AboutPhone />
        <TechSpecs phoneInfo={phone}/>
      </div>
    </div>
  );
};
