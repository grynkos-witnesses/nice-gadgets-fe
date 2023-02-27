import React from 'react';
// import './Catalog.scss';
import CatalogCSS from './Catalog.module.scss';
import { Phone } from '../../types/Phone';
import { Card } from '../Card';

type Props = {
  phones: Phone[];
};

export const Catalog: React.FC<Props> = ({ phones }) => (
  <div className={CatalogCSS.catalog}>
    {phones.map((phone) => (
      <div className={CatalogCSS.catalog__item} key={phone.id}>
        <Card phone={phone} />
      </div>
    ))}
  </div>
);
