import React from 'react';
import { Phone } from '../../types/Phone';
import CardSCSS from './Card.module.scss';
import heart from '../../icons/heart_icon.svg';
import imageTest from '../../icons/iphone.jpg';

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
    <section className={CardSCSS.card}>
      <img src={imageTest} alt={name} className={CardSCSS.card__img} />

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
          <button
            type="button"
            className={CardSCSS.card__buy__add__button}
            onClick={() => save('phoneData', { id, name, price })}
          >
            {' '}
            Add to cart
            {' '}
          </button>
        </div>

        {/* <div className={CardSCSS.card__buy__heart}> */}
        <button
          type="button"
          className={CardSCSS.card__buy__heart}
          onClick={() => save('favouritePhone', phone)}
        >
          <img src={heart} alt="heart icon" className={CardSCSS.card__icon} />
        </button>
      </div>
      {/* </div> */}
    </section>
  );
};
