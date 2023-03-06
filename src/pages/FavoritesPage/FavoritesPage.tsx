import React, { FC } from 'react';
import { Catalog } from '../../components/Catalog';
import { useLocalStorage } from '../../hooks/useLocalStorage';

import s from './FavoritesPage.module.scss';

export const FavoritesPage: FC = () => {
  const [, favoritesItems] = useLocalStorage();

  return (
    <div className={s.favoritesPage}>
      <div className="container">
        <h1 className={`page__title ${s.favoritesPage__title}`}>Favorites</h1>

        <Catalog
          products={favoritesItems}
          productsQuantity={favoritesItems.length}
        />
      </div>
    </div>
  );
};
