/* eslint-disable no-debugger */
/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Tablet } from '../../types/Tablet';
import { getTablets } from '../../api/phones';
import { usePreparedSearchParams } from '../../hooks/usePreparedSearchParams';
import { Catalog } from '../../components/Catalog';
import { Loader } from '../../components/Loader/Loader';
import { QuantityIndicator } from '../../components/Catalog/QuantityIndicator/QuantityIndicator';
import { Pagination } from '../../components/Pagination';
import { SelectorsPanel } from '../../components/SelectorsPanel/SelectorsPanel';
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs';

import s from './TabletsPage.module.scss';

export const TabletsPage = () => {
  const [tablets, setTablets] = useState<Tablet[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [total, setTotal] = useState(0);

  const [currentPage, perPage, sortBy] = usePreparedSearchParams();

  const loadGoods = async () => {
    setIsLoading(true);

    try {
      const goods = await getTablets(currentPage, perPage, sortBy);

      setTablets(goods.data);
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

  console.log(tablets);

  return (
    <div className={s.tabletsPage}>
      <div className="container">
        <Breadcrumbs location={['/', '/tablets']} />

        <h1 className={`page__title ${s.tabletsPage__title}`}>Tablets</h1>

        {isLoading ? (
          <Loader />
        ) : (
          <>
            {total ? (
              <>
                <QuantityIndicator quantity={total} />

                <SelectorsPanel />

                <Catalog products={tablets} />

                {total > perPage && <Pagination total={total} />}
              </>
            ) : (
              <h2 className={s.tabletsPage__soldout_message}>
                Everything is sold out. Check back next week!
              </h2>
            )}
          </>
        )}
      </div>
    </div>
  );
};
