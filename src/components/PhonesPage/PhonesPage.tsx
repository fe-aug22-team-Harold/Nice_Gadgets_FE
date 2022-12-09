import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getPhonesAsync } from '../../features/phonesSlice';
import { ProductCard } from '../ProductCard';
import { FilterInputs } from '../FilterInputs';
import { PaginationButtons } from './PaginationButtons';
import {
  getPhonesPageAsync, setPhonesOnPage,
} from '../../features/allPhonesSlice';
import { HistoryBlock } from '../HistoryBlock';
import { Phone } from '../../types/Phone';
import { LoaderBox } from '../LoaderBox';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

export const PhonesPage: React.FC = () => {
  const { allPhones } = useAppSelector((state) => state.phones);
  const { phonesOnPage, status: pagePhonesStatus } = useAppSelector(
    (state) => state.phonesPage,
  );
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(1);
  const [onPage, setOnPage] = useState(16);
  const [sortBy, setSortBy] = useState('Newest');

  useEffect(() => {
    if (!allPhones) {
      dispatch(getPhonesAsync());
    }

    dispatch(getPhonesPageAsync({ page, onPage }));

    return () => {
      dispatch(setPhonesOnPage(null));
    };
  }, []);

  useEffect(() => {
    dispatch(getPhonesPageAsync({ page, onPage }));
  }, [page, onPage]);

  const onPageChange = (newPageNum: number) => {
    setPage(newPageNum);
  };

  const onChangeOnPage = (newOnPageNum: number) => {
    setOnPage(newOnPageNum);
  };

  const onSortByChange = (newSortBy: string) => {
    setSortBy(newSortBy);
  };

  const sortPhonesOnPage = (prev: Phone, curr: Phone) => {
    switch (sortBy) {
      case 'Newest':
        return curr.year - prev.year;
      case 'Cheapest':
        return prev.price - curr.price;
      case 'Expensive':
        return curr.price - prev.price;
      case 'Alphabetic':
        return prev.name.localeCompare(curr.name);
      default:
        return 0;
    }
  };

  return (
    <div className="phones-page">
      <div className="phones-page__container">
        {pagePhonesStatus === 'loading' && (
          <div style={{ paddingTop: '150px' }}>
            <LoaderBox />
          </div>
        )}

        {phonesOnPage && pagePhonesStatus === 'idle' && (
          <div className="phones-page__header phones-page__grid">
            <div className="phones-page__history">
              <HistoryBlock firstRoute={'Phones'} secondRoute={undefined} />
            </div>
            <div className="phones-page__filter">
              <FilterInputs
                currentOnPage={onPage}
                changeOnPage={onChangeOnPage}
                sortBy={sortBy}
                changeSortBy={onSortByChange}
              />
            </div>
          </div>
        )}

        <div>
          <TransitionGroup className="phones-page__all-phones all-phones">
            {phonesOnPage
              && pagePhonesStatus === 'idle'
              && phonesOnPage.slice().sort(sortPhonesOnPage).map((phone) => (
                <CSSTransition
                  key={phone.itemId}
                  timeout={1000}
                  classNames="phones-page-list"
                >
                  <ProductCard phoneCard={phone} />
                </CSSTransition>
              ))
            }
          </TransitionGroup>
        </div>

        {phonesOnPage && pagePhonesStatus === 'idle' && (
          <div className="phones-page__buttons">
            <PaginationButtons
              onPage={onPage}
              currentPage={page}
              changePage={onPageChange}
            />
          </div>
        )}
      </div>
    </div>
  );
};
