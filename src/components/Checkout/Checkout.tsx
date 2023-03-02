import React, { FC } from 'react';
import { PrimaryButton } from '../PrimaryButton/PrimaryButton';

import s from './Checkout.module.scss';

interface Props {
  total: number,
  itemsNum: number,
}

export const Checkout: FC<Props> = ({ total = 0, itemsNum = 0 }) => {
  return (
    <div className={s.checkout}>
      <div className={s.checkout_price}>{`$${total}`}</div>

      <div className={s.checkout_total}>{`Total for ${itemsNum} items`}</div>

      <PrimaryButton>
        Checkout
      </PrimaryButton>
    </div>
  );
};
