import React, { useState } from 'react';

import CartItemSCSS from './CartItem.module.scss';

import image from '../../../icons/iphone.jpg';
import close from '../../../icons/close_icon.svg';
import minus from '../../../icons/minus_icon.svg';
import plus from '../../../icons/plus_icon.svg';

export const CartItem: React.FC = () => {
  const [counter, setCounter] = useState(0);

  return (
    <section className={CartItemSCSS.cartItem}>
      <button type="button" className={CartItemSCSS.cartItem__close_button}>
        <img src={close} alt="x" />
      </button>

      <img
        src={image}
        alt="product_small"
        className={CartItemSCSS.cartItem__img}
      />

      <a href="/" className={CartItemSCSS.cartItem__title}>
        Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)
      </a>

      <div className={CartItemSCSS.cartItem__counter}>
        <button
          type="button"
          className={CartItemSCSS.cartItem__counter__button__minus}
          onClick={() => setCounter(counter - 1)}
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

      <p className={CartItemSCSS.cartItem__price}>$1099</p>
    </section>
  );
};
