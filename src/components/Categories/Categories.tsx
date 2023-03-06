import React from 'react';

import Phones from '../../mock_data/img/category-phones.png';
import Tablets from '../../mock_data/img/category-tablets.png';
import Accessories from '../../mock_data/img/category-accessories.png';

import { CategoryItem } from '../CategoryItem';
import phonesCount from '../../mock_data/api/phones.json';

import s from './Categories.module.scss';

export const Categories: React.FC = () => {
  return (
    <div className={s.categories__container}>
      <CategoryItem
        categoryImage={Phones}
        categoryImageAlt="Phones"
        categoryLink="/phones"
        categoryTitle="Phones"
        categoryCount={`${phonesCount.length} phones`}
      />

      <CategoryItem
        categoryImage={Tablets}
        categoryImageAlt="Tablets"
        categoryLink="/tablets"
        categoryTitle="Tablets"
        categoryCount={`${phonesCount.length} tablets`}
      />

      <CategoryItem
        categoryImage={Accessories}
        categoryImageAlt="Accessories"
        categoryLink="/accessories"
        categoryTitle="Accessories"
        categoryCount={`${phonesCount.length} accessories`}
      />
    </div>
  );
};
