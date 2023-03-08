import React, { FC } from 'react';

import { v4 as uuidv4 } from 'uuid';
import { Details } from '../../types/FullPhone';
import s from './ProductAbout.module.scss';

interface Props {
  description: Details[];
}

export const ProductAbout: FC<Props> = ({ description }) => {
  return (
    <div className={s.productAbout}>
      {description.map((detail) => (
        <div className={s.productAbout__subsection} key={uuidv4()}>
          <h3 className={s.productAbout__subtitle}>{detail.title}</h3>

          {detail.text.map(paragraph => (
            <p className={s.productAbout__paragraph} key={uuidv4()}>
              {paragraph}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};
