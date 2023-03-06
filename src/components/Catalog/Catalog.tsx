import React from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { Phone } from '../../types/Phone';
import { Card } from '../Card';
import CatalogSCSS from './Catalog.module.scss';
import { QuantityIndicator } from './QuantityIndicator/QuantityIndicator';

type Props = {
  products: Phone[];
  productsQuantity: number;
};

export const Catalog: React.FC<Props> = ({ products, productsQuantity }) => {
  const [cart, favorites] = useLocalStorage();

  return (
    <>
      <QuantityIndicator quantity={productsQuantity} />

      <div className={CatalogSCSS.catalog}>
        {products.map((product) => {
          const isInCart = Boolean(cart.find((el) => el.id === product.id));
          const isInFavorites = Boolean(
            favorites.find((el) => el.id === product.id),
          );

          return (
            <Card
              product={product}
              key={product.id}
              isInCart={isInCart}
              isInFavorites={isInFavorites}
            />
          );
        })}
      </div>
    </>
  );
};
