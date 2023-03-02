/* eslint-disable no-console */
/* eslint-disable no-debugger */
import React from 'react';
import { Phone } from '../../types/Phone';
import s from './Card.module.scss';
import icons from '../../icons/iconsSprite.svg';
import imageTest from '../../icons/iphone.jpg';
import { PrimaryButton } from '../PrimaryButton/PrimaryButton';

interface Props {
  phone: Phone;
}

type LocalPhone = Pick<Phone, 'id' | 'name' | 'price'>;

export const Card: React.FC<Props> = ({ phone }) => {
  const {
    id,
    name,
    fullPrice,
    price,
    screen,
    capacity,
    ram,
    // we use imageTest instead of image variable in img src
    // until we able to fetch images from server
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    image,
  } = phone;

  const save = (key: string, value: LocalPhone | Phone) => {
    const stringStorage = localStorage.getItem(key);

    let storage = [];

    if (stringStorage) {
      storage = JSON.parse(stringStorage);
    } else {
      localStorage.setItem(key, JSON.stringify([]));
    }

    if (storage.some((elem: { id: string }) => elem.id === value.id)) {
      return;
    }

    storage.push(value);

    localStorage.setItem(key, JSON.stringify(storage));
  };

  return (
    <section className={s.card}>
      <img src={imageTest} alt={name} className={s.card__img} />

      <h2 className={s.card__name}>{`${name} (iMT9G2FS/A)`}</h2>

      <div className={s.card__price}>
        <p className={s.card__price__new}>{`$${price}`}</p>
        <p className={s.card__price__old}>{`$${fullPrice}`}</p>
      </div>

      <div className={s.card__separator} />

      <div className={s.card__params}>
        <div className={s.card__params__container}>
          <p className={s.card__params__text}>Screen</p>
          <p className={s.card__params__num}>{screen}</p>
        </div>
        <div className={s.card__params__container}>
          <p className={s.card__params__text}>Capacity</p>
          <p className={s.card__params__num}>
            {`${capacity.split('G')[0]} G${capacity.split('G')[1]}`}
          </p>
        </div>
        <div className={s.card__params__container}>
          <p className={s.card__params__text}>RAM</p>
          <p className={s.card__params__num}>
            {`${ram.slice(0, 1)} ${ram.slice(1)}`}
          </p>
        </div>
      </div>

      <div className={s.card__buy}>
        <div className={s.card__buy__add}>
          <PrimaryButton onClick={() => save('phoneData', { id, name, price })}>
            Add to cart
          </PrimaryButton>
        </div>

        <button
          type="button"
          className={s.card__buy__heart}
          onClick={() => save('favoritePhone', phone)}
        >
          <svg className={s.heartIcon}>
            <use href={`${icons}#icon-Favourites-Heart-Like`} />
            {/* <use href={`${icons}#icon-Favourites-Filled-Heart-Like`} /> */}
          </svg>
        </button>
      </div>
    </section>
  );
};
