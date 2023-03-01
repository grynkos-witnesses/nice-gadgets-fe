/* eslint-disable no-console */
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import BurgerSCSS from './BurgerMenu.module.scss';
import cross from './cross.svg';
import favourites from './Favourites.svg';
import cart from './Cart.svg';
import { BurgerNavLink } from './BurgerNavLink/BurgerNavLink';
import { Logo } from '../Logo/Logo';

interface Props {
  isVisible: boolean;
}

export const BurgerMenu: React.FC<Props> = memo(({ isVisible }) => {
  return (
    <div className={cn(BurgerSCSS.burger, { [BurgerSCSS.visible]: isVisible })}>
      <div className={BurgerSCSS.burger_header}>
        <div className={BurgerSCSS.burger_logo}>
          <Logo />
        </div>

        <Link
          to={{
            hash: '',
          }}
          className={[BurgerSCSS.link, BurgerSCSS.link_cross].join(' ')}
        >
          <img src={cross} alt="closeMenu" className={BurgerSCSS.icon} />
        </Link>
      </div>

      <nav className={BurgerSCSS.navigation}>
        <BurgerNavLink to="home" text="home" />
        <BurgerNavLink to="phones" text="phones" />
        <BurgerNavLink to="tablets" text="tablets" />
        <BurgerNavLink to="accessories" text="accessories" />
      </nav>

      <div className={BurgerSCSS.burger_footer}>
        <Link to="/favourites" className={BurgerSCSS.link_footer}>
          <img src={favourites} alt="Favourites" className={BurgerSCSS.icon} />
        </Link>
        <Link to="/cart" className={BurgerSCSS.link_footer}>
          <img src={cart} alt="Cart" className={BurgerSCSS.icon} />
        </Link>
      </div>
    </div>
  );
});
