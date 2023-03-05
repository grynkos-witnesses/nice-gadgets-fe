/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import s from './CartPage.module.scss';
import { BackButton } from '../../components/BackButton/BackButton';
import { CartItem } from '../../components/CartItem';
import { Checkout } from '../../components/Checkout/Checkout';
import { useLocalStorage } from '../../hooks/useLocalStorage';

export const CartPage: React.FC = () => {
  const [cart] = useLocalStorage();

  const productsTotal = cart.reduce(
    (total, product) => total + product.price * product.counter,
    0,
  );

  const itemsNum = cart.reduce((total, prduct) => total + prduct.counter, 0);

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
              {cart.map((product) => (
                <CartItem product={product} key={product.id} />
              ))}
            </div>
          </div>

          <div
            className="
            grid__item--mobile--1-4
            grid__item--tablet--1-12
            grid__item--desktop--17-24"
          >
            <Checkout total={productsTotal} itemsNum={itemsNum} />
          </div>
        </div>
      </div>
    </div>
  );
};
