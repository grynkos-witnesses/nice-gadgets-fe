/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { memo } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { FullPhone } from '../../types/FullPhone';
import icons from '../../icons/iconsSprite.svg';
import { ActiveButton } from '../ActiveButton/ActiveButton';
import { PrimaryButton } from '../PrimaryButton/PrimaryButton';
import s from './PhoneActions.module.scss';

interface Props {
  phone: FullPhone | null;
  isInCart: boolean;
  isInFavorites: boolean;
}

export const PhoneActions: React.FC<Props> = memo(
  ({ phone, isInCart, isInFavorites }) => {
    const [, , addToLocalStorage, removeFromLocalStorage] = useLocalStorage();

    let product: FullPhone;

    if (phone) {
      product = phone;
    }

    const handleAddtoCartClick = (where: string) => addToLocalStorage(where, {
      ...product,
      counter: 1,
    });

    const colors = {
      midnightGreen: s.btn_mdnGreen,
      gold: s.btn_gold,
      silver: s.btn_silver,
      spaceGray: s.btn_spaceGray,
    };

    let color: string;

    return (
      <div className={s.container}>
        <div className={s.colorsAndIdContainer}>
          <h3 className={s.subHeading}>Available colors</h3>
          <h3 className={s.subHeading}>
            {`ID: ${Math.floor(
              100000 + Math.random() * 900000,
            )}`}
          </h3>
        </div>
        <div className={s.container__colors}>
          {phone?.colorsAvailable.map((col) => {
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

              default:
                break;
            }

            return (
              <div key={phone.id} className={s.btn}>
                <button type="button" className={color} />
              </div>
            );
          })}
        </div>
        <div className={s.container__capacity}>
          <h3 className={s.subHeading}>Select capacity</h3>
          <div className={s.container__btns}>
            {phone?.capacityAvailable.map((cap) => (
              <button key={phone.id} type="button" className={s.btn__capacity}>
                {cap}
              </button>
            ))}
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
  },
);
