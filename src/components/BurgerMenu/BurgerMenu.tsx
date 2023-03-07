/* eslint-disable max-len */
/* eslint-disable no-console */
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import s from './BurgerMenu.module.scss';
import cross from './cross.svg';
import favourites from './Favourites.svg';
import cartSvg from './Cart.svg';
import { BurgerNavLink } from './BurgerNavLink/BurgerNavLink';
import { Logo } from '../Logo/Logo';
import { useLocalStorage } from '../../hooks/useLocalStorage';

interface Props {
  isVisible: boolean;
}

export const BurgerMenu: React.FC<Props> = memo(({ isVisible }) => {
  const [cart, favorites] = useLocalStorage();

  const cartItemsNum = cart.reduce(
    (total, prduct) => total + prduct.counter,
    0,
  );
  const favoriteItemsNum = favorites.length;

  return (
    <div className={cn(s.burger, { [s.visible]: isVisible })}>
      <div className={s.burger_header}>
        <div className={s.burger_logo}>
          <Logo />
        </div>

        <Link
          to={{
            hash: '',
          }}
          className={[s.link, s.link_cross].join(' ')}
        >
          <img src={cross} alt="closeMenu" className={s.icon} />
        </Link>
      </div>

      <nav className={s.navigation}>
        <BurgerNavLink to="home" text="home" />
        <BurgerNavLink to="phones" text="phones" />
        <BurgerNavLink to="tablets" text="tablets" />
        <BurgerNavLink to="accessories" text="accessories" />
      </nav>

      <div className={s.burger_footer}>
        <Link to="/favorites" className={s.link_footer}>
          {Boolean(favoriteItemsNum) && (
            <span className={s.burger__counter}>{favoriteItemsNum}</span>
          )}
          <img src={favourites} alt="Favourites" className={s.icon} />
        </Link>
        <Link to="/cart" className={s.link_footer}>
          {Boolean(cartItemsNum) && (
            <span className={s.burger__counter}>{cartItemsNum}</span>
          )}
          <img src={cartSvg} alt="Cart" className={s.icon} />
        </Link>
      </div>
    </div>
  );
});
