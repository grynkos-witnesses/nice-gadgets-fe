/* eslint-disable no-plusplus */
import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { FullPhone } from '../../types/FullPhone';
import icons from '../../icons/iconsSprite.svg';
import { ActiveButton } from '../ActiveButton/ActiveButton';
import { PrimaryButton } from '../PrimaryButton/PrimaryButton';
import s from './PhoneActions.module.scss';

interface Props {
  phone: FullPhone;
}

export const PhoneActions: React.FC<Props> = ({ phone }) => {
  const [cart, favorites, addToLocalStorage, removeFromLocalStorage]
    = useLocalStorage();

  const isInCart = Boolean(cart.find((el) => el.id === phone.id));
  const isInFavorites = Boolean(favorites.find((el) => el.id === phone.id));

  const handleAddtoCartClick = (where: string) => addToLocalStorage(where, {
    id: phone.id,
    name: phone.name,
    image: phone.images[0],
    price: phone.priceDiscount,
    counter: 1,
  });

  const handleAddtoFavoritesClick = () => addToLocalStorage('favorites', {
    id: phone.id,
    phoneId: phone.id,
    name: phone.name,
    fullPrice: phone.priceRegular,
    price: phone.priceDiscount,
    image: phone.images[0],
    screen: phone.screen,
    capacity: phone.capacity,
    ram: phone.ram,
  });

  const colors: { [index: string]: string } = {
    midnightgreen: '#5f7170',
    gold: '#fcdbc1',
    rosegold: '#fdddd7',
    silver: '#f0f0f0',
    spacegray: '#4c4c4c',
    black: '#1a1a00',
    green: '#66ffc2',
    yellow: '#ffff80',
    white: '#fffff',
    purple: '#ccb3ff',
    red: '#e63900',
  };

  function changeCapacity(id: string, newCapacity: string) {
    const splittedId = id.split('-');

    for (let i = 0; i < splittedId.length; i++) {
      if (splittedId[i].includes('gb')) {
        splittedId[i] = newCapacity.toLowerCase();
      }
    }

    return splittedId.join('-');
  }

  function changeColor(id: string, newColor: string) {
    const splittedId = id.split('-');

    for (let i = 0; i < splittedId.length; i++) {
      if (colors[splittedId[i]]) {
        splittedId[i] = newColor;
      }
    }

    return splittedId.join('-');
  }

  return (
    <div className={s.container}>
      <div className={s.colorsAndIdContainer}>
        <h3 className={s.subHeading}>Available colors</h3>
        <h3 className={s.subHeading}>
          {`ID: ${Math.floor(100000 + Math.random() * 900000)}`}
        </h3>
      </div>
      <div className={s.container__colors}>
        {phone.colorsAvailable.map((col) => {
          const hexBGColor = colors[col];
          const isCurrColor = col === phone.color;

          return (
            <Link
              key={col}
              to={`/phones/${changeColor(phone.id, col)}`}
              className={cn({
                [s.colorBtn]: true,
                [s.colorBtn__active]: isCurrColor,
              })}
            >
              <div
                className={s.colorBtn__background}
                style={{ backgroundColor: hexBGColor }}
              />
            </Link>
          );
        })}
      </div>
      <div className={s.container__capacity}>
        <h3 className={s.subHeading}>Select capacity</h3>
        <div className={s.container__btns}>
          {phone.capacityAvailable.map((cap) => {
            const isCurrCapacity = cap === phone.capacity;

            return (
              <Link
                key={cap}
                to={`/phones/${changeCapacity(phone.id, cap)}`}
                className={cn({
                  [s.capacityBtn]: true,
                  [s.capacityBtn__active]: isCurrCapacity,
                })}
              >
                {cap}
              </Link>
            );
          })}
        </div>
      </div>
      <div className={s.container__price}>
        <h2 className={s.heading}>{`$${phone?.priceDiscount}`}</h2>
        <h3 className={s.heading__discount}>{`$${phone?.priceRegular}`}</h3>
      </div>
      <div className={s.container__localBtns}>
        <div className={s.btn__cart}>
          {isInCart ? (
            <ActiveButton
              onClick={() => removeFromLocalStorage('cart', phone.id, true)}
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
            className={s.btn__buy__heart}
            onClick={() => removeFromLocalStorage('favorites', phone.id, true)}
          >
            <svg className={s.heartIcon}>
              <use href={`${icons}#icon-Favourites-Filled-Heart-Like`} />
            </svg>
          </button>
        ) : (
          <button
            type="button"
            className={s.btn__buy__heart}
            onClick={handleAddtoFavoritesClick}
          >
            <svg className={s.heartIcon}>
              <use href={`${icons}#icon-Favourites-Heart-Like`} />
            </svg>
          </button>
        )}
      </div>
      <ul className={s.container__intel}>
        <li className={s.intel}>
          <span className={s.subHeading}>Screen</span>
          <span className={s.intel__value}>{phone?.screen}</span>
        </li>
        <li className={s.intel}>
          <span className={s.subHeading}>Resolution</span>
          <span className={s.intel__value}>{phone?.resolution}</span>
        </li>
        <li className={s.intel}>
          <span className={s.subHeading}>Processor</span>
          <span className={s.intel__value}>{phone?.processor}</span>
        </li>
        <li className={s.intel}>
          <span className={s.subHeading}>RAM</span>
          <span className={s.intel__value}>{phone?.ram}</span>
        </li>
      </ul>
    </div>
  );
};
