/* eslint-disable no-debugger */
/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useSearchParams } from 'react-router-dom';
import s from './PhonesPage.module.scss';
import { Catalog } from '../../components/Catalog';
import { Pagination } from '../../components/Pagination';
import { Loader } from '../../components/Loader/Loader';
import { Phone } from '../../types/Phone';
import { getPhones } from '../../api/phones';

export const PhonesPage = () => {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [total, setTotal] = useState(0);

  const [searchParams] = useSearchParams();

  const perPage = Number(searchParams.get('perPage')) || 8;
  const currentPage = Number(searchParams.get('page')) || 1;

  // const setCurrentPage = (newPage: number | string) => {
  //   setSearchParams({ page: String(newPage) });
  // };

  const loadGoods = async () => {
    setIsLoading(true);

    try {
      const goods = await getPhones(currentPage, perPage);

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
  }, [currentPage, perPage]);

  debugger;

  return (
    <div className={s.phonesPage}>
      <div className="container">
        <h1 className={`page__title ${s.phonesPage__title}`}>Mobile phones</h1>

        {isLoading ? (
          <Loader />
        ) : (
          <>
            <p className={s.phonesPage__quantity}>{`${total} models`}</p>

            <Catalog phones={phones} />

            <Pagination
              total={total}
              perPage={perPage}
              currentPage={currentPage}
            />
          </>
        )}
      </div>
    </div>
  );
};
