import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchWith } from '../../helpers/getSearchWith';
import s from './Selector.module.scss';

type Props = {
  options: string[][];
  defaultValue: string | number;
  parameter: string;
};

export const Select: React.FC<Props> = ({
  options,
  defaultValue,
  parameter,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const updateSearchParams = (value: string) => {
    const newParams = getSearchWith(searchParams, {
      [parameter]: value,
      page: '1',
    });

    setSearchParams(newParams);
  };

  return (
    <select
      className={s.selector}
      defaultValue={defaultValue}
      onChange={(event) => updateSearchParams(event.target.value)}
    >
      {options.map((option) => {
        const [optionValue, optionName] = option;

        return (
          <option
            key={optionValue}
            className={s.selector__option}
            value={optionValue}
          >
            {optionName}
          </option>
        );
      })}
    </select>
  );
};
