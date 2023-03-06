import React from 'react';
import { usePageInfo } from '../../hooks/usePageInfo';
import { Select } from '../Select/Select';
import s from './Filters.module.scss';

export const Filters = () => {
  const [, perPage, sortBy] = usePageInfo();

  const sortByOptions = [
    ['newest', 'Newest'],
    ['oldest', 'Oldest'],
    ['cheep', 'Price: Lowest first'],
    ['expensive', 'Price: Highest first'],
    ['name', 'Name: A - Z'],
  ];

  const perPageOptions = [
    ['8', '8'],
    ['16', '16'],
    ['32', '32'],
    ['64', '64'],
  ];

  return (
    <div className={s.filters}>
      <div className="grid">
        <div
          className="
            grid__item--mobile--1-2
            grid__item--tablet--1-4
            grid__item--desktop--1-4"
        >
          <div className={s.filters__filter}>
            <div className={s.filters__title}>Sort by</div>

            <Select
              options={sortByOptions}
              defaultValue={sortBy}
              parameter="sortBy"
            />
          </div>
        </div>

        <div
          className="
            grid__item--mobile--3-4
            grid__item--tablet--5-7
            grid__item--desktop--5-7"
        >
          <div className={s.filters__filter}>
            <div className={s.filters__title}>Items on page</div>

            <Select
              options={perPageOptions}
              defaultValue={perPage}
              parameter="perPage"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
