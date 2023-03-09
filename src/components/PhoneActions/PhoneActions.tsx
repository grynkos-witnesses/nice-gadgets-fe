/* eslint-disable no-debugger */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { memo } from 'react';
import cn from 'classnames';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { FullPhone } from '../../types/FullPhone';
import icons from '../../icons/iconsSprite.svg';
import { ActiveButton } from '../ActiveButton/ActiveButton';
import { PrimaryButton } from '../PrimaryButton/PrimaryButton';
import s from './PhoneActions.module.scss';

interface Props {
  phone: FullPhone;
}

export const PhoneActions: React.FC<Props> = memo(({ phone }) => {
  const [cart, favorites, addToLocalStorage, removeFromLocalStorage]
    = useLocalStorage();
  const isInCart = Boolean(cart.find((el) => el.id === phone.id));
  const isInFavorites = Boolean(favorites.find((el) => el.id === phone.id));

  const handleAddtoCartClick = (where: string) => addToLocalStorage(where, {
    id: phone.id,
    itemId: phone.id,
    name: phone.name,
    price: phone.priceDiscount,
    fullPrice: phone.priceRegular,
    image: phone.images[0],
    capacity: phone.capacity,
    ram: phone.ram,
    counter: 1,
  });

  const colors: { [index: string]: string } = {
    midnightgreen: '#5f7170',
    gold: '#fcdbc1',
    silver: '#f0f0f0',
    spacegray: '#4c4c4c',
    black: '#1a1a00',
    green: '#66ffc2',
    yellow: '#ffff80',
    white: '#fffff',
    purple: '#ccb3ff',
    red: '#e63900',
  };

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
            <button
              key={col}
              type="button"
              className={cn({
                [s.colorBtn]: true,
                [s.colorBtn__active]: isCurrColor,
              })}
            >
              <div
                className={s.colorBtn__background}
                style={{ backgroundColor: hexBGColor }}
              />
            </button>
          );
        })}
      </div>
      <div className={s.container__capacity}>
        <h3 className={s.subHeading}>Select capacity</h3>
        <div className={s.container__btns}>
          {phone?.capacityAvailable.map((cap) => {
            return (
              <button key={phone.id} type="button" className={s.capacityBtn}>
                {cap}
              </button>
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
            onClick={() => handleAddtoCartClick('favorites')}
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
          <span className={s.value}>{phone?.screen}</span>
        </li>
        <li className={s.intel}>
          <span className={s.subHeading}>Resolution</span>
          <span className={s.value}>{phone?.resolution}</span>
        </li>
        <li className={s.intel}>
          <span className={s.subHeading}>Processor</span>
          <span className={s.value}>{phone?.processor}</span>
        </li>
        <li className={s.intel}>
          <span className={s.subHeading}>RAM</span>
          <span className={s.value}>{phone?.ram}</span>
        </li>
      </ul>
    </div>
  );
});
