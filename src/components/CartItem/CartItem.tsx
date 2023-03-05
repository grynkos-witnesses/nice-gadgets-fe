/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';

import CartItemSCSS from './CartItem.module.scss';

import close from '../../icons/close_icon.svg';
import icons from '../../icons/iconsSprite.svg';

import { IconButton } from '../IconButton/IconButton';
import { CartPhone } from '../../types/CartPhone';
import { useLocalStorage } from '../../hooks/useLocalStorage';

type Props = {
  product: CartPhone;
};

export const CartItem: React.FC<Props> = ({ product }) => {
  const {
    name,
    price,
    image,
    counter,
    // we use img instead of image variable in img src
    // until we able to fetch images from server
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } = product;

  const [isDisabled, setIsDisabled] = useState(false);
  const [isLimit, setIsLimit] = useState(false);
  const [, , addToLocalStorage, removeFromLocalStorage] = useLocalStorage();

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
        <button
          type="button"
          className={CartItemSCSS.cartItem__close_button}
          onClick={() => removeFromLocalStorage('cart', product.id, true)}
        >
          <img src={close} alt="x" />
        </button>

        <img src={image} alt={name} className={CartItemSCSS.cartItem__img} />

        <a href="/" className={CartItemSCSS.cartItem__title}>
          {name}
        </a>
      </div>

      <div
        className={`${CartItemSCSS.cartItem__container} ${CartItemSCSS.cartItem__container__bottom}`}
      >
        <div className={CartItemSCSS.cartItem__counter}>
          <IconButton
            onClick={() => removeFromLocalStorage('cart', product.id, false)}
            disabled={isDisabled}
          >
            <use href={`${icons}#icon-Minus`} />
          </IconButton>

          <p className={CartItemSCSS.cartItem__counter__number}>{counter}</p>

          <IconButton
            onClick={() => addToLocalStorage('cart', product)}
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
