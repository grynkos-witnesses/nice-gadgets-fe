/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import s from './CartPage.module.scss';
import phonesFromServer from '../../mock_data/api/phones.json';
import { BackButton } from '../../components/BackButton/BackButton';
import { CartItem } from '../../components/CartItem';

const phones = phonesFromServer.slice(0, 3);

export const CartPage: React.FC = () => {
  return (
    <div className={s.cartPage}>
      <div className="container">
        <div className={s.cartPage_backBtn}>
          <BackButton />
        </div>
        <div className={s.cartPage_title}>
          <h1 className="page__title">Cart</h1>
        </div>
        <div className="grid">
          <div
            className="
            grid__item--mobile--1-4
            grid__item--tablet--1-12
            grid__item--desktop--1-16"
          >
            <div className={s.cartPage__card_container}>
              {phones.map((phone) => (
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
            <div className={s.cartPage__checkout}>
              <span className={s.cartPage__checkout_price}>$2657</span>

              <span className={s.cartPage__checkout_total}>
                Total for 3 items
              </span>

              <div className={s.cartPage__checkout_separator} />

              <button type="button" className={s.cartPage__checkout_button}>
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
