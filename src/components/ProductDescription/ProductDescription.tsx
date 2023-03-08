import React, { FC } from 'react';

import s from './ProductDescription.module.scss';

interface Props {
  sectionTitle: string;
}

export const ProductDescription: FC<Props> = ({ sectionTitle, children }) => {
  return (
    <section className={s.productDescription}>
      <h1 className={s.productDescription__title}>{sectionTitle}</h1>

      {children}
    </section>
  );
};
