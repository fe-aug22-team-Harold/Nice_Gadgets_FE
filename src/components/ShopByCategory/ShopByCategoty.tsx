import React from 'react';
import './ShopByCategory.scss';
import fotoCategory1 from './Category-1.png';
import fotoCategory2 from './Category-2.png';
import fotoCategory3 from './Category-3.png';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';

export const ShopByCategory: React.FC = () => {
  const { allPhones } = useAppSelector(state => state.phones);

  return (
    <div className="
      shopByCategory
      page__section
      page__section--1
      "
    >
      <h2 className='shopByCategory__title'>
        Shop by category
      </h2>

      <div className="shopByCategory__sections section">
        <div className="section__first">
          <Link to={'/phones'} >
            <img
              className='section__img'
              src={fotoCategory1}
              alt="first-category"
            />
          </Link>

          <h3 className='section__title'>
            Mobile phones
          </h3>

          <p className='section__numberOfModels'>
            {allPhones?.length} models
          </p>
        </div>

        <div className="section__second">
          <Link to={'/tablets'} >
            <img
              className='section__img'
              src={fotoCategory2}
              alt="first-category"
            />
          </Link>

          <h3 className='section__title'>
            Tablets
          </h3>

          <p className='section__numberOfModels'>
            2 models
          </p>
        </div>

        <div className="section__third">
          <Link to={'/accessories'} >
            <img
              className='section__img'
              src={fotoCategory3}
              alt="first-category"
            />
          </Link>

          <h3 className='section__title'>
            Accessories
          </h3>

          <p className='section__numberOfModels'>
            2 models
          </p>
        </div>
      </div>
    </div>
  );
};
