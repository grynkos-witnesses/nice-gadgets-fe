/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import styles from './Pagination.module.scss';
import { getPages } from './helpers/getPages';

type Props = {
  total: number;
  perPage: number;
  currentPage: number;
  changePage: (newPage: number | string) => void;
};

export const Pagination: React.FC<Props> = ({
  total,
  perPage,
  currentPage,
  changePage,
}) => {
  const firstPage = 1;
  const lastPage = Math.ceil(total / perPage);
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === lastPage;

  const maxVisiblePages = 5;
  const pageReplacement = '...';

  const pages = getPages(
    firstPage,
    lastPage,
    currentPage,
    maxVisiblePages,
    pageReplacement,
  );

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
          to={currentPage <= 2 ? '' : `?page=${currentPage - 1}`}
          onClick={goBack}
        >
        </Link>
      </li>

      <li className={styles.pagination__list}>
        {pages.map((page, index) => (
          <div key={index}>
            {page === pageReplacement ? (
              <span>{pageReplacement}</span>
            ) : (
              <Link
                className={cn(styles.pagination__link, {
                  [styles.pagination__link_active]: page === currentPage,
                })}
                onClick={() => changePage(page)}
                to={page === 1 ? '' : `?page=${page}`}
              >
                {page}
              </Link>
            )}
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
          to={isLastPage ? `?page=${currentPage}` : `?page=${currentPage + 1}`}
          onClick={goForward}
        >
        </Link>
      </li>
    </ul>
  );
};
