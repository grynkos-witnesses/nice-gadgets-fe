import React from 'react';
import { useSearchParamsWithDefaults } from '../../hooks/useSearchParamsWithDefaults';
import { Select } from '../Selector/Selector';
import s from './SelectorsPanel.module.scss';

export const SelectorsPanel = () => {
  const [, perPage, sortBy] = useSearchParamsWithDefaults();

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
    <div className={s.selectorsPanel}>
      <div className="grid">
        <div
          className="
            grid__item--mobile--1-2
            grid__item--tablet--1-4
            grid__item--desktop--1-4"
        >
          <div className={s.selectorsPanel__selector}>
            <div className={s.selectorsPanel__title}>Sort by</div>

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
          <div className={s.selectorsPanel__selector}>
            <div className={s.selectorsPanel__title}>Items on page</div>

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
