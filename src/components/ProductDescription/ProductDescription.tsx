import React, { FC } from 'react';

import s from './ProductDescription.module.scss';

interface Props {
  sectionTitle: string;
}

export const ProductDescription: FC<Props> = ({ sectionTitle, children }) => {
  return (
    <section className={s.productDescription}>
      <h2 className={s.productDescription__title}>{sectionTitle}</h2>

      {children}
    </section>
  );
};
