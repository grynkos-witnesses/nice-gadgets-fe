import React, { useEffect, useState } from 'react';

import CartItemSCSS from './CartItem.module.scss';

import img from '../../icons/iphone.jpg';
import close from '../../icons/close_icon.svg';
import minus from '../../icons/minus_icon.svg';
import plus from '../../icons/plus_icon.svg';

import { Phone } from '../../types/Phone';

type Props = {
  phone: Phone;
};

export const CartItem: React.FC<Props> = ({ phone }) => {
  const {
    name,
    price,
    // image,
    // we use img instead of image variable in img src
    // until we able to fetch images from server
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } = phone;

  const [counter, setCounter] = useState(1);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    if (counter === 1) {
      setIsDisabled(true);
    }

    if (counter > 1) {
      setIsDisabled(false);
    }
  }, [counter]);

  return (
    <section className={CartItemSCSS.cartItem}>

      <div className={CartItemSCSS.cartItem__container}>
        <button type="button" className={CartItemSCSS.cartItem__close_button}>
          <img src={close} alt="x" />
        </button>

        <img src={img} alt={name} className={CartItemSCSS.cartItem__img} />

        <a href="/" className={CartItemSCSS.cartItem__title}>
          {`${name} (iMT9G2FS/A)`}
        </a>
      </div>

      <div className={CartItemSCSS.cartItem__container}>
        <div className={CartItemSCSS.cartItem__counter}>
          <button
            type="button"
            className={CartItemSCSS.cartItem__counter__button__minus}
            onClick={() => setCounter(counter - 1)}
            disabled={isDisabled}
          >
            <img src={minus} alt="-" />
          </button>

          <p className={CartItemSCSS.cartItem__counter__number}>{counter}</p>

          <button
            type="button"
            className={CartItemSCSS.cartItem__counter__button__plus}
            onClick={() => setCounter(counter + 1)}
          >
            <img src={plus} alt="+" />
          </button>
        </div>

        <p className={CartItemSCSS.cartItem__price}>{`$${counter * price}`}</p>
      </div>
    </section>
  );
};
