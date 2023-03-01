/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { Link } from 'react-router-dom';
import { CartItem } from './CartItem/CartItem';
import back from '../../icons/back_icon.svg';

import CartSCSS from './Cart.module.scss';
import '../../base_styles/utils/_grid.scss';

import { Phone } from '../../types/Phone';

type Props = {
  phones: Phone[];
};

export const Cart: React.FC<Props> = ({ phones }) => {
  return (
    <div className={CartSCSS.cart}>
      <Link to="/" className={CartSCSS.cart__back_content}>
        <img src={back} alt="back icon" className={CartSCSS.cart__link} />
        <span className={CartSCSS.cart__back_text}>Back</span>
      </Link>

      <h1 className={CartSCSS.cart__header}>Cart</h1>

      <div className="grid">
        <div
          className="
            grid__item--mobile--1-4
            grid__item--tablet--1-12
            grid__item--desktop--1-16"
        >
          <div className={CartSCSS.cart__card_container}>
            {phones.map((phone: Phone) => (
              <CartItem phone={phone} key={phone.id} />
            ))}
          </div>
        </div>

        <div
          className="
            grid__item--mobile--1-4
            grid__item--tablet--1-12
            grid__item--desktop--17-24"
        >
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
        </div>
      </div>
    </div>
  );
};
