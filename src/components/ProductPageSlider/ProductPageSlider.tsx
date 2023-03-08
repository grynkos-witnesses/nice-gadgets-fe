import React from 'react';

import s from './ProductPageSlider.module.scss';

export const ImagesSlider: React.FC = () => {
  return (
    <div className={s.slider}>
      <div className={s.slider__mainPhoto}>{1}</div>
    </div>
  );
};
