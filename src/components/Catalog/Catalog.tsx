import React from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { Phone } from '../../types/Phone';
import { QuantityIndicator } from './QuantityIndicator/QuantityIndicator';
import { Card } from '../Card';
import { Pagination } from '../Pagination';
import CatalogSCSS from './Catalog.module.scss';

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

      {productsQuantity > 0 && <Pagination total={productsQuantity} />}
    </>
  );
};
