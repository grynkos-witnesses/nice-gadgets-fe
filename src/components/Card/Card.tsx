import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import s from './Card.module.scss';
import icons from '../../icons/iconsSprite.svg';
import { PrimaryButton } from '../PrimaryButton/PrimaryButton';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { ActiveButton } from '../ActiveButton/ActiveButton';
import { Phone } from '../../types/Phone';
import { FavoritePhone } from '../../types/FavoritePhone';

interface Props {
  product: Phone | FavoritePhone;
  isInCart: boolean;
  isInFavorites: boolean;
}

export const Card: React.FC<Props> = ({ product, isInCart, isInFavorites }) => {
  const {
    phoneId, name, fullPrice, price, screen, capacity, ram, image,
  }
    = product;

  const location = useLocation();
  const [, , addToLocalStorage, removeFromLocalStorage] = useLocalStorage();

  const handleAddtoCartClick = () => addToLocalStorage('cart', {
    id: phoneId,
    name,
    image,
    price,
    counter: 1,
  });

  const handleAddtoFavoritesClick = () => addToLocalStorage('favorites', {
    id: phoneId,
    phoneId,
    name,
    fullPrice,
    price,
    image,
    screen,
    capacity,
    ram,
  });

  return (
    <section className={s.card}>
      <Link
        to={{ pathname: `${location.pathname}/${phoneId}` }}
        className={s.card__link}
      >
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
            <PrimaryButton onClick={handleAddtoCartClick}>
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
            onClick={handleAddtoFavoritesClick}
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
