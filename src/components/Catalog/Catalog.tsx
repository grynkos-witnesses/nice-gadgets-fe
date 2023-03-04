import React from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { Phone } from '../../types/Phone';
import { Card } from '../Card';
import CatalogSCSS from './Catalog.module.scss';

type Props = {
  phones: Phone[];
};

export const Catalog: React.FC<Props> = ({ phones }) => {
  const [cart, favorites] = useLocalStorage();

  return (
    <div className={CatalogSCSS.catalog}>
      {phones.map((phone) => {
        const isInCart = Boolean(cart.find((el) => el.id === phone.id));
        const isInFavorites = Boolean(
          favorites.find((el) => el.id === phone.id),
        );

        return (
          <Card
            phone={phone}
            key={phone.id}
            isInCart={isInCart}
            isInFavorites={isInFavorites}
          />
        );
      })}
    </div>
  );
};
