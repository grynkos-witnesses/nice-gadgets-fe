import React from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { FavoritePhone } from '../../types/FavoritePhone';
import { Phone } from '../../types/Phone';
// import { PhoneInLocalStorage } from '../../types/PhoneInLocalStorage';
import { Card } from '../Card';
import CatalogSCSS from './Catalog.module.scss';

type Props = {
  products: Phone[] | FavoritePhone[];
};

export const Catalog: React.FC<Props> = ({ products }) => {
  const [cart, favorites] = useLocalStorage();

  return (
    <>
      <div className={CatalogSCSS.catalog}>
        {products.map((product) => {
          const isInCart = Boolean(
            cart.find((el) => el.id === product.phoneId),
          );
          const isInFavorites = Boolean(
            favorites.find((el) => el.id === product.phoneId),
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
