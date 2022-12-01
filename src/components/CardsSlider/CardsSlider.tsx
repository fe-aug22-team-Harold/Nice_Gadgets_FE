// import React from 'react';
// import { client } from '../../utils/fetch';
// import { Phone } from '../../types/Phone';
// import { ProductCard } from '../ProductCard';

// const goodsFromServer = client.get<Phone[]>('/products');

// export const CardsGeneration: React.FC<Phone[]> = ({ goodsFromServer }) => {
//   return (
//     <div classNameName='test'>
//       {goodsFromServer.map(good =>
//         <ProductCard phoneCard={good} key={good.id} />)
//       }
//     </div>
//   );
// };
import React from 'react';
import './CardsSlider.scss';
import { Phone } from '../../types/Phone';
import { ProductCard } from '../ProductCard';

// const allPhones = [
//   {
//     'id': '1',
//     'category': 'phones',
//     'phoneId': 'apple-iphone-7-32gb-black',
//     'itemId': 'apple-iphone-7-32gb-black',
//     'name': 'Apple iPhone 7 32GB Black',
//     'fullPrice': 400,
//     'price': 375,
//     'screen': "4.7' IPS",
//     'capacity': '32GB',
//     'color': 'black',
//     'ram': '2GB',
//     'year': 2016,
//     'image': 'img/phones/apple-iphone-7/black/00.jpg',
//   },
//   {
//     'id': '2',
//     'category': 'phones',
//     'phoneId': 'apple-iphone-7-plus-32gb-black',
//     'itemId': 'apple-iphone-7-plus-32gb-black',
//     'name': 'Apple iPhone 7 Plus 32GB Black',
//     'fullPrice': 540,
//     'price': 500,
//     'screen': "5.5' IPS",
//     'capacity': '32GB',
//     'color': 'black',
//     'ram': '3GB',
//     'year': 2016,
//     'image': 'img/phones/apple-iphone-7-plus/black/00.jpg',
//   },
//   {
//     'id': '3',
//     'category': 'phones',
//     'phoneId': 'apple-iphone-8-64gb-gold',
//     'itemId': 'apple-iphone-8-64gb-gold',
//     'name': 'Apple iPhone 8 64GB Gold',
//     'fullPrice': 600,
//     'price': 550,
//     'screen': "4.7' IPS",
//     'capacity': '64GB',
//     'color': 'gold',
//     'ram': '2GB',
//     'year': 2017,
//     'image': 'img/phones/apple-iphone-8/gold/00.jpg',
//   },
//   {
//     'id': '4',
//     'category': 'phones',
//     'phoneId': 'apple-iphone-11-64gb-black',
//     'itemId': 'apple-iphone-11-64gb-black',
//     'name': 'Apple iPhone 11 64GB Black',
//     'fullPrice': 932,
//     'price': 880,
//     'screen': "6.1' IPS",
//     'capacity': '64GB',
//     'color': 'black',
//     'ram': '4GB',
//     'year': 2019,
//     'image': 'img/phones/apple-iphone-11/black/00.jpg',
//   },
// ];

type Props = {
  allPhones: Phone[],
};

export const CardsSlider: React.FC<Props> = ({ allPhones }) => {
  return (
    <section className='slider'>
      <div className='slider__top'>
        <h2 className='slider__title'>Brand new models</h2>

        <div className="slider__buttons">
          <a
            href='#'
            className="slider__buttons--left"
          >
          </a>
          <a
            href='#'
            className="slider__buttons--right"
          >
          </a>
        </div>
      </div>

      <ul className="slider__phone">
        {allPhones.map((phone: Phone) => (
          <li key={phone.id}>
            <ProductCard phoneCard={phone} />
          </li>
        ))}
      </ul>
    </section>
  );
};
