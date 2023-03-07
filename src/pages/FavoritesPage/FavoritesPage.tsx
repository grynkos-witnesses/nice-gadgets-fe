import React, { FC } from 'react';
import { Catalog } from '../../components/Catalog';
import { QuantityIndicator } from '../../components/Catalog/QuantityIndicator/QuantityIndicator';
import { useLocalStorage } from '../../hooks/useLocalStorage';

import s from './FavoritesPage.module.scss';

export const FavoritesPage: FC = () => {
  const [, favoritesItems] = useLocalStorage();

  return (
    <div className={s.favoritesPage}>
      <div className="container">
        <h1 className={`page__title ${s.favoritesPage__title}`}>Favorites</h1>

        <QuantityIndicator quantity={favoritesItems.length} />
        <Catalog products={favoritesItems} />
      </div>
    </div>
  );
};
