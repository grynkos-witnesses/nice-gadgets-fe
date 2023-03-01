/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import cn from 'classnames';
import styles from './Pagination.module.scss';
import { getNumbers } from './helpers/getNumbers';

type Props = {
  total: number;
  perPage: number;
  currentPage: number;
  changePage: (newPage: number) => void;
};

export const Pagination: React.FC<Props> = ({
  total,
  perPage,
  currentPage,
  changePage,
}) => {
  const lastPage = Math.ceil(total / perPage);
  const pages = getNumbers(1, lastPage);

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === lastPage;

  const goBack = () => {
    if (!isFirstPage) {
      changePage(currentPage - 1);
    }
  };

  const goForward = () => {
    if (!isLastPage) {
      changePage(currentPage + 1);
    }
  };

  return (
    <ul className={styles.pagination}>
      <li>
        <button
          type="button"
          className={cn(
            `${styles.pagination__link} ${styles.pagination__link_prev}`,
            {
              [styles.pagination__link_disabled]: isFirstPage,
            },
          )}
          onClick={goBack}
        >
        </button>
      </li>

      <li className={styles.pagination__list}>
        {pages.map((page) => (
          <div key={page}>
            <button
              type="button"
              className={cn(styles.pagination__link, {
                [styles.pagination__link_active]: page === currentPage,
              })}
              onClick={() => changePage(page)}
            >
              {page}
            </button>
          </div>
        ))}
      </li>

      <li>
        <button
          type="button"
          className={cn(
            `${styles.pagination__link} ${styles.pagination__link_next}`,
            {
              [styles.pagination__link_disabled]: isLastPage,
            },
          )}
          onClick={goForward}
        >
        </button>
      </li>
    </ul>
  );
};
