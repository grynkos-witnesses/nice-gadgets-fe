import React from 'react';

import CardSCSS from './Card.module.scss';

import heart from '../../icons/heart_icon.svg';
import image from '../../icons/iphone.jpg';

export const Card: React.FC = () => {
  return (
    <section className={CardSCSS.card}>
      <img
        src={image}
        alt="Apple iPhone Xs 64GB Silver (iMT9G2FS/A)"
        className={CardSCSS.card__img}
      />

      <h2 className={CardSCSS.card__name}>
        Apple iPhone Xs 64GB Silver (iMT9G2FS/A)
      </h2>

      <div className={CardSCSS.card__price}>
        <p className={CardSCSS.card__price__new}>$799</p>
        <p className={CardSCSS.card__price__old}>$899</p>
      </div>

      <div className={CardSCSS.card__separator} />

      <div className={CardSCSS.card__params}>
        <div className={CardSCSS.card__params__container}>
          <p className={CardSCSS.card__params__text}>Screen</p>
          <p className={CardSCSS.card__params__num}>5.8” OLED</p>
        </div>
        <div className={CardSCSS.card__params__container}>
          <p className={CardSCSS.card__params__text}>Capacity</p>
          <p className={CardSCSS.card__params__num}>64 GB</p>
        </div>
        <div className={CardSCSS.card__params__container}>
          <p className={CardSCSS.card__params__text}>RAM</p>
          <p className={CardSCSS.card__params__num}>4 GB</p>
        </div>
      </div>

      <div className={CardSCSS.card__buy}>
        <div className={CardSCSS.card__buy__add}>
          <a href="/" className={CardSCSS.card__buy__add_link}>
            {' '}
            Add to cart
            {' '}
          </a>
        </div>

        <div className={CardSCSS.card__buy__heart}>
          <a href="/" className={CardSCSS.card__buy__heart__icon}>
            <img src={heart} alt="heart icon" className={CardSCSS.card__icon} />
          </a>
        </div>
      </div>
    </section>
  );
};
