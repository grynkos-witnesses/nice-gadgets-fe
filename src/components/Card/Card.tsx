import React from 'react';
import { Phone } from '../../types/Phone';
import CardSCSS from './Card.module.scss';
import heart from '../../icons/heart_icon.svg';

interface Props {
  phone: Phone;
}

export const Card: React.FC<Props> = ({ phone }) => {
  const {
    name, fullPrice, price, screen, capacity, ram, image,
  } = phone;

  return (
    <section className={CardSCSS.card}>
      <img src={image} alt={name} className={CardSCSS.card__img} />

      <h2 className={CardSCSS.card__name}>{`${name} (iMT9G2FS/A)`}</h2>

      <div className={CardSCSS.card__price}>
        <p className={CardSCSS.card__price__new}>{`$${price}`}</p>
        <p className={CardSCSS.card__price__old}>{`$${fullPrice}`}</p>
      </div>

      <div className={CardSCSS.card__separator} />

      <div className={CardSCSS.card__params}>
        <div className={CardSCSS.card__params__container}>
          <p className={CardSCSS.card__params__text}>Screen</p>
          <p className={CardSCSS.card__params__num}>{screen}</p>
        </div>
        <div className={CardSCSS.card__params__container}>
          <p className={CardSCSS.card__params__text}>Capacity</p>
          <p className={CardSCSS.card__params__num}>
            {`${capacity.split('G')[0]} G${capacity.split('G')[1]}`}
          </p>
        </div>
        <div className={CardSCSS.card__params__container}>
          <p className={CardSCSS.card__params__text}>RAM</p>
          <p className={CardSCSS.card__params__num}>
            {`${ram.slice(0, 1)} ${ram.slice(1)}`}
          </p>
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
