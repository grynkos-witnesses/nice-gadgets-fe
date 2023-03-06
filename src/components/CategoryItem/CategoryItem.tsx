import React from 'react';
import { Link } from 'react-router-dom';

import s from './CategoryItem.module.scss';

type Props = {
  categoryImage: string;
  categoryImageAlt: string;
  categoryLink: string;
  categoryTitle: string;
  categoryCount: string;
};

export const CategoryItem: React.FC<Props> = ({
  categoryImage,
  categoryImageAlt,
  categoryLink,
  categoryTitle,
  categoryCount,
}) => {
  return (
    <div className={s.category}>
      <Link to={categoryLink}>
        <img
          src={categoryImage}
          alt={categoryImageAlt}
          className={s.category__image}
        />
      </Link>

      <h4 className={s.category__title}>
        <Link to={categoryLink} className={s.category__link}>
          {categoryTitle}
        </Link>
      </h4>

      <p className={s.category__count}>{categoryCount}</p>
    </div>
  );
};
