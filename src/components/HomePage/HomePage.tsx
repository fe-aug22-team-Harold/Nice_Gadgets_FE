import React, { useEffect } from 'react';
import { WelcomeBanner } from './WelcomeBanner';
import { CardsSlider } from '../CardsSlider';
import { ShopByCategory } from '../ShopByCategory';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getPhonesAsync } from '../../features/phonesSlice';
import { Loader } from '../Loader';

export const HomePage: React.FC = () => {
  const { allPhones, status: allPhonesStatus } = useAppSelector(
    (state) => state.phones,
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!allPhones) {
      dispatch(getPhonesAsync());
    }
  }, []);

  return (
    <div className='home-page'>
      <div className='home-page__container'>

        <WelcomeBanner />

        {allPhonesStatus === 'loading' && <Loader />}
        {allPhones && allPhonesStatus === 'idle'
          && <CardsSlider
            allPhones={allPhones?.slice(10, 14)}
            title='Brand new models'
          />
        }

        <ShopByCategory />

        {allPhonesStatus === 'loading' && <Loader />}
        {allPhones && allPhonesStatus === 'idle'
          && <CardsSlider
            allPhones={allPhones?.slice(0, 4)}
            title='Hot prices'
          />
        }
      </div>
    </div>
  );
};
