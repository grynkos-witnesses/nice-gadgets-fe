import React from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { Phone } from '../../types/Phone';
import { Card } from '../Card';
import CatalogSCSS from './Catalog.module.scss';

type Props = {
  products: Phone[];
};

export const Catalog: React.FC<Props> = ({ products }) => {
  const [cart, favorites] = useLocalStorage();

  return (
    <>
      <div className={CatalogSCSS.catalog}>
        {products.map((product) => {
          const isInCart = Boolean(cart.find((el) => el.id === product.id));
          const isInFavorites = Boolean(
            favorites.find((el) => el.id === product.id),
          );

          return (
            <div key={product.id} className={CatalogSCSS.catalog__item}>
              <Card
                product={product}
                isInCart={isInCart}
                isInFavorites={isInFavorites}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};
