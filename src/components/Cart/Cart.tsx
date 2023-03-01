/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { Link } from 'react-router-dom';
import { CartItem } from './CartItem/CartItem';
import back from '../../icons/back_icon.svg';

import CartSCSS from './Cart.module.scss';

export const Cart: React.FC = () => {
  return (
<<<<<<< HEAD
    <div className={CartSCSS.cart}>
      <Link to="/" className={CartSCSS.cart__back_content}>
        <img src={back} alt="back icon" className={CartSCSS.cart__link} />
        <span className={CartSCSS.cart__back_text}>Back</span>
      </Link>

      <h1 className={CartSCSS.cart__header}>Cart</h1>

      <div className={CartSCSS.cart__container}>
        <div className={CartSCSS.cart__card_container}>
          <div className={CartSCSS.cart__card_item}>Card Item 1</div>

          <div className={CartSCSS.cart__card_item}>Card Item 2</div>

          <div className={CartSCSS.cart__card_item}>Card Item 3</div>

          <CartItem />
        </div>

        <div className={CartSCSS.cart__checkout}>
          <span className={CartSCSS.cart__checkout_price}>$2657</span>

          <span className={CartSCSS.cart__checkout_total}>
            Total for 3 items
          </span>

          <div className={CartSCSS.cart__checkout_separator} />

          <button type="button" className={CartSCSS.cart__checkout_button}>
            Checkout
          </button>
        </div>
=======
    <div className={CartSCSS.cart__page}>
      <Link to="/" className={CartSCSS.cart__page__back_content}>
        <img
          src={back}
          alt="back icon"
          className={CartSCSS.cart__page__link}
        />
        <span className={CartSCSS.cart__page__back_text}>Back</span>
      </Link>

      <h1 className={CartSCSS.cart__page__header}>Cart</h1>

      {/* CartItem will be here */}

      <div>
        <div className={CartSCSS.cart__page__card_item}>
          Card Item 1
        </div>

        <div className={CartSCSS.cart__page__card_item}>
          Card Item 2
        </div>

        <div className={CartSCSS.cart__page__card_item}>
          Card Item 3
        </div>
      </div>

      <div className={CartSCSS.cart__page__checkout}>
        <span className={CartSCSS.cart__page__checkout_price}>$2657</span>
        <span
          className={CartSCSS.cart__page__checkout_total}
        >
          Total for 3 items
        </span>
        <div className={CartSCSS.cart__page__checkout_pipe} />
        <button
          type="button"
          className={CartSCSS.cart__page__checkout_button}
        >
          Checkout
        </button>
>>>>>>> 8b033ea (Cart Layout)
      </div>
    </div>
  );
};
