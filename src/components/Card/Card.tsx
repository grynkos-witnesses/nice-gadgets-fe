import React from 'react';
import { Link } from 'react-router-dom';
import s from './Card.module.scss';
import icons from '../../icons/iconsSprite.svg';
import { PrimaryButton } from '../PrimaryButton/PrimaryButton';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { ActiveButton } from '../ActiveButton/ActiveButton';
import { Phone } from '../../types/Phone';

interface Props {
  product: Phone;
  isInCart: boolean;
  isInFavorites: boolean;
}

export const Card: React.FC<Props> = ({ product, isInCart, isInFavorites }) => {
  const {
    itemId,
    phoneId,
    name,
    fullPrice,
    price,
    screen,
    capacity,
    ram,
    image,
  } = product;

  const [, , addToLocalStorage, removeFromLocalStorage] = useLocalStorage();

  const handleAddtoCartClick = (where: string) => addToLocalStorage(where, {
    ...product,
    id: itemId,
    counter: 1,
  });

  return (
    <section className={s.card}>
      <Link to={{ pathname: `/phones/${itemId}` }}>
        <img src={image} alt={name} className={s.card__img} />

        <h2 className={s.card__name}>{`${name} (iMT9G2FS/A)`}</h2>
      </Link>

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
          {isInCart ? (
            <ActiveButton
              onClick={() => removeFromLocalStorage('cart', phoneId, true)}
            >
              Added
            </ActiveButton>
          ) : (
            <PrimaryButton onClick={() => handleAddtoCartClick('cart')}>
              Add to cart
            </PrimaryButton>
          )}
        </div>

        {isInFavorites ? (
          <button
            type="button"
            className={s.card__buy__heart}
            onClick={() => removeFromLocalStorage('favorites', phoneId, true)}
          >
            <svg className={s.heartIcon}>
              <use href={`${icons}#icon-Favourites-Filled-Heart-Like`} />
            </svg>
          </button>
        ) : (
          <button
            type="button"
            className={s.card__buy__heart}
            onClick={() => handleAddtoCartClick('favorites')}
          >
            <svg className={s.heartIcon}>
              <use href={`${icons}#icon-Favourites-Heart-Like`} />
            </svg>
          </button>
        )}
      </div>
    </section>
  );
};
