import React from 'react';
import { useAppSelector } from '../../../app/hooks';
import classNames from 'classnames';

type Props = {
  changePage: (num: number) => void,
  currentPage: number
}

export const PaginationButtons: React.FC<Props> = ({
  changePage,
  currentPage,
}) => {
  const { allPhones } = useAppSelector(state => state.phones);
  const onPage = 8;
  const pageCount = allPhones ? Math.ceil(allPhones.length / onPage) : 16;
  const pagesNums = new Array(pageCount).fill(0).map((_, i) => i + 1);

  return (
    <div className="buttons">
      <button
        className="buttons__button buttons__button--arrow"
        onClick={() => {
          changePage(currentPage > 1 ? currentPage - 1 : currentPage);
          window.scrollTo(0, 0);
        }}
      >
        <div className="icon-arrow icon-arrow--left"></div>
      </button>

      {pagesNums.map(page => (
        <button
          key={page}
          className={classNames('buttons__button', {
            'buttons__button--active': currentPage === page,
          })}
          onClick={() => {
            changePage(page);
            window.scrollTo(0, 0);
          }}
        >
          <div className="buttons__text">{page}</div>
        </button>
      ))}

      <button className="buttons__button buttons__button--arrow">
        <div className="icon-arrow"></div>
      </button>
    </div>
  );
};
