import React from 'react';
import './App.scss';
import { Catalog } from './components/Catalog';
import { Footer } from './components/Footer/Footer';

import phonesFromServer from './mock_data/api/phones.json';

export const App: React.FC = () => {
  return (
    <div className="page">
      <div className="container">
        <h1 className="page__title">Mobile phones</h1>

        <Catalog phones={phonesFromServer.slice(0, 8)} />
      </div>

      <Footer />
    </div>
  );
};
