import React, { Dispatch, FC, SetStateAction } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { PrimaryButton } from '../PrimaryButton/PrimaryButton';

import s from './Checkout.module.scss';

interface Props {
  total: number;
  itemsNum: number;
  setTrigger: Dispatch<SetStateAction<boolean>>;
}

export const Checkout: FC<Props> = ({
  total = 0,
  itemsNum = 0,
  setTrigger,
}) => {
  const [cart, , , removeFromStorage] = useLocalStorage();

  const handleClick = () => {
    setTrigger(true);

    setTimeout(() => {
      setTrigger(false);

      cart.map((elem) => removeFromStorage('cart', elem.id, true));

      window.location.replace(
        'https://nice-gadgets.herokuapp.com/phones?page=1&perPage=8',
      );
    }, 2500);
  };

  return (
    <div className={s.checkout}>
      <div className={s.checkout_price}>{`$${total}`}</div>

      <div className={s.checkout_total}>{`Total for ${itemsNum} items`}</div>

      <PrimaryButton onClick={handleClick}>Checkout</PrimaryButton>
    </div>
  );
};
