/* eslint-disable no-console */
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Logo } from '../Logo/Logo';
import s from './Header.module.scss';
import { HeaderNavLink } from './HeaderNavLink/HeaderNavLink';
import { HeaderIconLink } from './HeaderIconLink/HeaderIconLink';

export const Header: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <div className={s.header}>
      <div className={s.header__content}>
        <div className={s.header__logo}>
          <Logo />
        </div>
        <nav className={s.header__nav}>
          <ul className={s.header__navList}>
            <li className={s.header__navItem}>
              <HeaderNavLink path="/" text="Home" />
            </li>
            <li className={s.header__navItem}>
              <HeaderNavLink path="/phones?page=1&perPage=8" text="Phones" />
            </li>
            <li className={s.header__navItem}>
              <HeaderNavLink path="/tablets" text="Tablets" />
            </li>
            <li className={s.header__navItem}>
              <HeaderNavLink path="/accessories" text="Accessories" />
            </li>
          </ul>
        </nav>
        <ul className={s.header__iconLinksList}>
          <li className={s.header__iconLinksItem}>
            <HeaderIconLink
              path="/favorites"
              iconId="icon-Favourites-Heart-Like"
            />
          </li>
          <li className={s.header__iconLinksItem}>
            <HeaderIconLink path="/cart" iconId="icon-Shopping-bag-Cart" />
          </li>
          <li className={`${s.header__iconLinksItem} ${s.menuLinkItem}`}>
            <HeaderIconLink path={`${pathname}#menu`} iconId="icon-Menu" />
          </li>
        </ul>
      </div>
    </div>
  );
};
