/* eslint-disable operator-linebreak */
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getPhonesAsync } from '../../features/phonesSlice';
import { ProductCard } from '../ProductCard';
import { Loader } from '../Loader';
import { FilterInputs } from '../FilterInputs';
import { PaginationButtons } from './PaginationButtons/PaginationButtons';

export const PhonesPage: React.FC = () => {
  // eslint-disable-next-line no-shadow
  const { allPhones, status } = useAppSelector((state) => state.phones);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPhonesAsync());
  }, []);

  return (
    <div className="phones-page">
      <div className="phones-page__container">
        {status === 'loading' && <Loader />}
        {allPhones && status === 'idle' && (
          <div className="phones-page__header">
            <FilterInputs />
          </div>
        )}
        <div className="phones-page__all-phones all-phones">
          {allPhones &&
            status === 'idle' &&
            allPhones.map((phone) => (
              <ProductCard key={phone.itemId} phoneCard={phone} />
            ))}
          ;
        </div>
        {allPhones && status === 'idle' && (
          <div className="phones-page__buttons">
            <PaginationButtons />
          </div>
        )}
      </div>
    </div>
  );
};
