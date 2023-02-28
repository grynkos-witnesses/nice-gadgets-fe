import React from 'react';
import { Logo } from '../Logo/Logo';

import s from './Header.module.scss';
import { HeaderNavLink } from './HeaderNavLink/HeaderNavLink';

export const Header: React.FC = () => {
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
              <HeaderNavLink path="/phones" text="Phones" />
            </li>
            <li className={s.header__navItem}>
              <HeaderNavLink path="/tablets" text="Tablets" />
            </li>
            <li className={s.header__navItem}>
              <HeaderNavLink path="/accessories" text="Accessories" />
            </li>

            <li className={s.header__navItem}>
              <HeaderNavLink path="/cart" text="Cart" />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
