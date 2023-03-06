/* eslint-disable no-debugger */
/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Catalog } from '../../components/Catalog';
import { Loader } from '../../components/Loader/Loader';
import { Phone } from '../../types/Phone';
import { getPhones } from '../../api/phones';
import { usePageInfo } from '../../hooks/usePageInfo';
import { QuantityIndicator } from '../../components/Catalog/QuantityIndicator/QuantityIndicator';
import { Pagination } from '../../components/Pagination';
import s from './PhonesPage.module.scss';
import { Filters } from '../../components/Filters/Filters';

export const PhonesPage = () => {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [total, setTotal] = useState(0);

  const [currentPage, perPage, sortBy] = usePageInfo();

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
        <h1 className={`page__title ${s.phonesPage__title}`}>Mobile phones</h1>

        {isLoading ? (
          <Loader />
        ) : (
          <>
            <QuantityIndicator quantity={total} />

            <Filters />

            <Catalog products={phones} productsQuantity={total} />

            {total > 0 && <Pagination total={total} />}
          </>
        )}
      </div>
    </div>
  );
};
