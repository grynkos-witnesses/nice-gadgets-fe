/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import s from './CartPage.module.scss';
import phonesFromServer from '../../mock_data/api/phones.json';
import { BackButton } from '../../components/BackButton/BackButton';
import { CartItem } from '../../components/CartItem';
import { Checkout } from '../../components/Checkout/Checkout';

const products = phonesFromServer.slice(0, 3);

export const CartPage: React.FC = () => {
  const productsTotal = products.reduce(
    (total, product) => total + product.price,
    0,
  );

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
              {products.map((product) => (
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
            <Checkout total={productsTotal} itemsNum={products.length} />
          </div>
        </div>
      </div>
    </div>
  );
};