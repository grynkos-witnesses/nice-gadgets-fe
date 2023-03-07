/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import s from './CartPage.module.scss';
import emptyCart from '../../icons/emptyCart.svg';
import { BackButton } from '../../components/BackButton/BackButton';
import { CartItem } from '../../components/CartItem';
import { Checkout } from '../../components/Checkout/Checkout';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { SuccessMessageModal } from '../../components/SuccessMessageModal/SuccessMessageModal';
import { EmptyMessage } from '../../components/EmptyMessage/EmptyMessage';

export const CartPage: React.FC = () => {
  const [isModalTriggered, setIsModalTriggered] = useState(false);
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

          {itemsNum ? (
            <div
              className="
              grid__item--mobile--1-4
              grid__item--tablet--1-12
              grid__item--desktop--17-24"
            >
              <Checkout
                total={productsTotal}
                itemsNum={itemsNum}
                setTrigger={setIsModalTriggered}
              />
              {isModalTriggered && <SuccessMessageModal />}
            </div>
          ) : (
            <div
              className="
              grid__item--mobile--1-4
              grid__item--tablet--1-12
              grid__item--desktop--8-15"
            >
              <EmptyMessage svg={emptyCart} btnText="Buy" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
