import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getPhonesAsync } from '../../features/phonesSlice';
import { ProductCard } from '../ProductCard';
import { Loader } from '../Loader';
import { FilterInputs } from '../FilterInputs';
import { PaginationButtons } from './PaginationButtons';
import { getPhonesPageAsync } from '../../features/allPhonesSlice';

export const PhonesPage: React.FC = () => {
  const { allPhones } = useAppSelector((state) => state.phones);
  const { phonesOnPage, status: pagePhonesStatus } = useAppSelector(
    (state) => state.phonesPage,
  );
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(3);
  const [onPage, setOnPage] = useState(16);

  useEffect(() => {
    if (!allPhones) {
      dispatch(getPhonesAsync());
    }

    dispatch(getPhonesPageAsync({ page, onPage }));
  }, []);

  useEffect(() => {
    dispatch(getPhonesPageAsync({ page, onPage }));
  }, [page]);

  const onPageChange = (newPageNum: number) => {
    setPage(newPageNum);
  };

  const onChangeOnPage = (newOnPageNum: number) => {
    setOnPage(newOnPageNum);
  };

  return (
    <div className="phones-page">
      <div className="phones-page__container">
        {pagePhonesStatus === 'loading' && (
          <div style={{ paddingTop: '150px' }}>
            <Loader />
          </div>
        )}

        {phonesOnPage && pagePhonesStatus === 'idle' && (
          <div className="phones-page__header">
            <FilterInputs changeOnPage={onChangeOnPage} />
          </div>
        )}

        <div className="phones-page__all-phones all-phones">
          {phonesOnPage
            && pagePhonesStatus === 'idle'
            && phonesOnPage.map((phone) => (
              <ProductCard key={phone.itemId} phoneCard={phone} />
            ))}
        </div>

        {phonesOnPage && pagePhonesStatus === 'idle' && (
          <div className="phones-page__buttons">
            <PaginationButtons currentPage={page} changePage={onPageChange} />
          </div>
        )}
      </div>
    </div>
  );
};
