import React from 'react';

import { v4 as uuidv4 } from 'uuid';
import { Link, useSearchParams } from 'react-router-dom';
import cn from 'classnames';
import styles from './Pagination.module.scss';
import { getPages } from '../../helpers/getPages';
import { getSearchWith } from '../../helpers/getSearchWith';
import { usePreparedSearchParams } from '../../hooks/usePreparedSearchParams';

type Props = {
  total: number;
};

export const Pagination: React.FC<Props> = ({ total }) => {
  const [searchParams] = useSearchParams();
  const [currentPage, perPage] = usePreparedSearchParams();

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
          to={{
            search: getSearchWith(searchParams, {
              page: isFirstPage
                ? currentPage.toString()
                : (currentPage - 1).toString(),
            }),
          }}
        >
        </Link>
      </li>

      <li className={styles.pagination__list}>
        {pages.map((page) => (
          <div key={uuidv4()}>
            {page === pageReplacement ? (
              <span>{pageReplacement}</span>
            ) : (
              <Link
                className={cn(styles.pagination__link, {
                  [styles.pagination__link_active]: page === currentPage,
                })}
                to={{
                  search: getSearchWith(searchParams, {
                    page: typeof page === 'number' ? page.toString() : null,
                  }),
                }}
              >
                {page}
              </Link>
            )}
          </div>
        ))}
      </li>

      <li>
        <Link
          type="button"
          className={cn(
            `${styles.pagination__link} ${styles.pagination__link_next}`,
            {
              [styles.pagination__link_disabled]: isLastPage,
            },
          )}
          to={{
            search: getSearchWith(searchParams, {
              page: isLastPage
                ? currentPage.toString()
                : (currentPage + 1).toString(),
            }),
          }}
        >
        </Link>
      </li>
    </ul>
  );
};
