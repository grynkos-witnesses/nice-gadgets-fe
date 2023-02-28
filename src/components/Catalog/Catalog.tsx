import React from 'react';
import { Phone } from '../../types/Phone';
import { Card } from '../Card';
import CatalogSCSS from './Catalog.module.scss';

type Props = {
  phones: Phone[];
};

export const Catalog: React.FC<Props> = ({ phones }) => (
  <div className={CatalogSCSS.catalog}>
    {phones.map((phone) => (
      <Card key={phone.id} />
    ))}
  </div>
);
