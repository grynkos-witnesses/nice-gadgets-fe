/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { memo } from 'react';
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

  let product: FullPhone;

  if (phone) {
    product = phone;
  }

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

  const colors = {
    midnightGreen: s.btn_mdnGreen,
    gold: s.btn_gold,
    silver: s.btn_silver,
    spaceGray: s.btn_spaceGray,
    black: s.btn_black,
    green: s.btn_green,
    yellow: s.btn_yellow,
    white: s.btn_white,
    purple: s.btn_purple,
    red: s.btn_red,
  };

  let color: string;

  return (
    <div className={s.container}>
      <div className={s.colorsAndIdContainer}>
        <h3 className={s.subHeading}>Available colors</h3>
        <h3 className={s.subHeading}>
          {`ID: ${Math.floor(100000 + Math.random() * 900000)}`}
        </h3>
      </div>
      <div className={s.container__colors}>
        {phone?.colorsAvailable.map((col) => {
          let btnBorder: string;
          const phoneColor = phone.color;

          switch (col) {
            case 'midnightgreen':
              color = colors.midnightGreen;
              break;

            case 'spacegray':
              color = colors.spaceGray;
              break;

            case 'silver':
              color = colors.silver;
              break;

            case 'gold':
              color = colors.gold;
              break;

            case 'black':
              color = colors.black;
              break;

            case 'green':
              color = colors.green;
              break;

            case 'yellow':
              color = colors.yellow;
              break;

            case 'white':
              color = colors.white;
              break;

            case 'purple':
              color = colors.purple;
              break;

            case 'red':
              color = colors.red;
              break;

            default:
              break;
          }

          if (phoneColor === col) {
            btnBorder = `${s.btn} ${s.activeColor}`;
          } else {
            btnBorder = s.btn;
          }

          return (
            <div key={phone.id} className={btnBorder}>
              <button type="button" className={color} />
            </div>
          );
        })}
      </div>
      <div className={s.container__capacity}>
        <h3 className={s.subHeading}>Select capacity</h3>
        <div className={s.container__btns}>
          {phone?.capacityAvailable.map((cap) => {
            let btnClass = s.btn__capacity;
            const capcity = phone.capacity;

            if (capcity === cap) {
              btnClass = `${s.btn__capacity} ${s.activeCapacity}`;
            } else {
              btnClass = s.btn__capacity;
            }

            return (
              <button key={phone.id} type="button" className={btnClass}>
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
              onClick={() => removeFromLocalStorage('cart', product.id, true)}
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
            onClick={() => removeFromLocalStorage('favorites', product.id, true)}
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
