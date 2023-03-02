/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
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
        <Link
          className={cn(
            `${styles.pagination__link} ${styles.pagination__link_prev}`,
            {
              [styles.pagination__link_disabled]: isFirstPage,
            },
          )}
          to={
            currentPage <= 2
              ? './'
              : `?page=${currentPage - 1}`
          }
          onClick={goBack}
        >
        </Link>
      </li>

      <li className={styles.pagination__list}>
        {pages.map((page) => (
          <div key={page}>
            <Link
              className={cn(styles.pagination__link, {
                [styles.pagination__link_active]: page === currentPage,
              })}
              onClick={() => changePage(page)}
              to={
                page === 1
                  ? './'
                  : `?page=${page}`
              }
            >
              {page}
            </Link>
          </div>
        ))}
      </li>

      <li>
        <Link
          className={cn(
            `${styles.pagination__link} ${styles.pagination__link_next}`,
            {
              [styles.pagination__link_disabled]: isLastPage,
            },
          )}
          to={
            isLastPage
              ? `?page=${currentPage}`
              : `?page=${currentPage + 1}`
          }
          onClick={goForward}
        >
        </Link>
      </li>
    </ul>
  );
};
