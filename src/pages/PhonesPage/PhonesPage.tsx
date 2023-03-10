/* eslint-disable no-debugger */
/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Phone } from '../../types/Phone';
import { getPhones } from '../../api/phones';
import { usePreparedSearchParams } from '../../hooks/usePreparedSearchParams';
import { Catalog } from '../../components/Catalog';
import { Loader } from '../../components/Loader/Loader';
import { QuantityIndicator } from '../../components/Catalog/QuantityIndicator/QuantityIndicator';
import { Pagination } from '../../components/Pagination';
import { SelectorsPanel } from '../../components/SelectorsPanel/SelectorsPanel';
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs';

import s from './PhonesPage.module.scss';

export const PhonesPage = () => {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [total, setTotal] = useState(0);

  const [currentPage, perPage, sortBy] = usePreparedSearchParams();

  const loadGoods = async () => {
    setIsLoading(true);

    try {
      const goods = await getPhones(currentPage, perPage, sortBy);

      setPhones(goods.data);
      setTotal(goods.total);
    } catch (err) {
      console.error(err);
      Notify.failure('Something went wrong. Try again later');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadGoods();
  }, [currentPage, perPage, sortBy]);

  return (
    <div className={s.phonesPage}>
      <div className="container">
        <Breadcrumbs />

        <h1 className={`page__title ${s.phonesPage__title}`}>Mobile phones</h1>

        {isLoading ? (
          <Loader />
        ) : (
          <>
            <QuantityIndicator quantity={total} />

            <SelectorsPanel />

            <Catalog products={phones} />

            {total > 0 && <Pagination total={total} />}
          </>
        )}
      </div>
    </div>
  );
};
