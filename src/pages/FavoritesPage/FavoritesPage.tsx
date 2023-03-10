import React, { FC } from 'react';
import { Catalog } from '../../components/Catalog';
import { EmptyMessage } from '../../components/EmptyMessage/EmptyMessage';
import { QuantityIndicator } from '../../components/Catalog/QuantityIndicator/QuantityIndicator';
import emptyBox from '../../icons/emptyBox.svg';
import { useLocalStorage } from '../../hooks/useLocalStorage';

import s from './FavoritesPage.module.scss';
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs';

export const FavoritesPage: FC = () => {
  const [, favoritesItems] = useLocalStorage();

  return (
    <div className={s.favoritesPage}>
      <div className="container">
        <Breadcrumbs />
        <h1 className={`page__title ${s.favoritesPage__title}`}>Favorites</h1>

        {favoritesItems.length ? (
          <>
            <QuantityIndicator quantity={favoritesItems.length} />

            <Catalog products={favoritesItems} />
          </>
        ) : (
          <div className={s.container}>
            <EmptyMessage svg={emptyBox} btnText="Add" />
          </div>
        )}
      </div>
    </div>
  );
};
