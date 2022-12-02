import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getPhonesAsync } from '../../features/phonesSlice';
import { ProductCard } from '../ProductCard';
import { Loader } from '../Loader';

export const PhonesPage: React.FC = () => {
  // eslint-disable-next-line no-shadow
  const { allPhones, status } = useAppSelector(state => state.phones);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPhonesAsync());
  }, []);

  return (
    <div>
      {status === 'loading' && <Loader />}

      {allPhones && status === 'idle' && (
        allPhones.map(phone => (
          <ProductCard key={phone.itemId} phoneCard={phone} />
        ))
      )}
    </div>
  );
};
