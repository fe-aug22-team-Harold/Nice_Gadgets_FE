import React from 'react';
import './ShopByCategory.scss';
import fotoCategory1 from './Category-1.png';
import fotoCategory2 from './Category-2.png';
import fotoCategory3 from './Category-3.png';

export const ShopByCategory: React.FC = () => {
  return (
    <div className="shopByCategory">
      <h2 className='shopByCategory__title'>
        Shop by category
      </h2>

      <div className="shopByCategory__sections section">
        <div className="section__first">
          <img
            className='section__img'
            src={fotoCategory1}
            alt="first-category" />

          <h3 className='section__title'>
            Mobile phones
          </h3>

          <p className='section__numberOfModels'>
            95 models
          </p>
        </div>

        <div className="section__second">
          <img
            className='section__img'
            src={fotoCategory2}
            alt="first-category"
          />

          <h3 className='section__title'>
            Tablets
          </h3>

          <p className='section__numberOfModels'>
            24 models
          </p>
        </div>

        <div className="section__third">
          <img
            className='section__img'
            src={fotoCategory3}
            alt="first-category"
          />

          <h3 className='section__title'>
            Accessories
          </h3>

          <p className='section__numberOfModels'>
            100 models
          </p>
        </div>
      </div>
    </div>
  );
};
