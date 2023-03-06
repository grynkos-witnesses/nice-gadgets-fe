import React, { FC } from 'react';

import s from './QuantityIndicator.module.scss';

interface Props {
  quantity: number;
}

export const QuantityIndicator: FC<Props> = ({ quantity }) => {
  return <p className={s.quantityIndicator}>{`${quantity} models`}</p>;
};
