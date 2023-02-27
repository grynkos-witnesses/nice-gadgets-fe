import React from 'react';

import { Catalog } from '../components/Catalog';
import phonesFromServer from '../mock_data/api/phones.json';

export const PhonesPage = () => {
  return (
    <div className="page">
      <div className="container">
        <h1 className="page__title">Mobile phones</h1>

        <Catalog phones={phonesFromServer.slice(0, 8)} />
      </div>
    </div>
  );
};
