import React, { useEffect, useState } from 'react';

import CartItemSCSS from './CartItem.module.scss';

import img from '../../icons/iphone.jpg';
import close from '../../icons/close_icon.svg';
import icons from '../../icons/iconsSprite.svg';

import { Phone } from '../../types/Phone';
import { IconButton } from '../IconButton/IconButton';

type Props = {
  product: Phone;
};

export const CartItem: React.FC<Props> = ({ product }) => {
  const {
    name,
    price,
    // image,
    // we use img instead of image variable in img src
    // until we able to fetch images from server
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } = product;

  const [counter, setCounter] = useState(1);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLimit, setIsLimit] = useState(false);

  useEffect(() => {
    if (counter === 1) {
      setIsDisabled(true);
    }

    if (counter > 1) {
      setIsDisabled(false);
    }
  }, [counter]);

  useEffect(() => {
    if (counter === 10) {
      setIsLimit(true);
    }

    if (counter < 10) {
      setIsLimit(false);
    }
  }, [counter]);

  return (
    <article className={CartItemSCSS.cartItem}>
      <div
        className={`${CartItemSCSS.cartItem__container} ${CartItemSCSS.cartItem__container__top}`}
      >
        <button type="button" className={CartItemSCSS.cartItem__close_button}>
          <img src={close} alt="x" />
        </button>

        <img src={img} alt={name} className={CartItemSCSS.cartItem__img} />

        <a href="/" className={CartItemSCSS.cartItem__title}>
          {`${name} (iMT9G2FS/A)`}
        </a>
      </div>

      <div
        className={`${CartItemSCSS.cartItem__container} ${CartItemSCSS.cartItem__container__bottom}`}
      >
        <div className={CartItemSCSS.cartItem__counter}>
          <IconButton
            onClick={() => setCounter(counter - 1)}
            disabled={isDisabled}
          >
            <use href={`${icons}#icon-Minus`} />
          </IconButton>

          <p className={CartItemSCSS.cartItem__counter__number}>{counter}</p>

          <IconButton
            onClick={() => setCounter(counter + 1)}
            disabled={isLimit}
          >
            <use href={`${icons}#icon-Plus`} />
          </IconButton>
        </div>

        <p className={CartItemSCSS.cartItem__price}>{`$${counter * price}`}</p>
      </div>
    </article>
  );
};
