import React, { FC } from 'react';

import s from './PageSection.module.scss';

interface Props {
  sectionTitle: string;
}

export const PageSection: FC<Props> = ({ sectionTitle, children }) => {
  return (
    <section className={s.pageSection}>
      <h1 className={s.pageSection__title}>{sectionTitle}</h1>

      {children}
    </section>
  );
};
