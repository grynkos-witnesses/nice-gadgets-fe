import React, { useEffect, useState } from 'react';

import { Catalog } from '../components/Catalog';
import { Pagination } from '../components/Pagination';
import { Phone } from '../types/Phone';
import { getRange } from '../components/Pagination/helpers/getRange';

import phonesFromServer from '../mock_data/api/phones.json';

export const PhonesPage = () => {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [total, setTotal] = useState(0);
  const [perPage] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);

  const loadGoods = () => {
    const allPhones = phonesFromServer;

    setPhones(allPhones);
    setTotal(allPhones.length);
  };

  useEffect(() => {
    loadGoods();
  }, []);

  const changePage = (newPage: number) => {
    setCurrentPage(newPage);
  };

  // next line and corresponding helper func should be deleted
  // after we are able to fetch phones from server
  const [startItem, endItem] = getRange(total, perPage, currentPage);

  return (
    <div className="page">
      <div className="container">
        <h1 className="page__title">Mobile phones</h1>

        <Catalog phones={phones.slice(startItem, endItem)} />

        <Pagination
          total={total}
          perPage={perPage}
          currentPage={currentPage}
          changePage={changePage}
        />
      </div>
    </div>
  );
};
