import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import BurgerSCSS from './BurgerMenu.module.scss';
import logo from './LogoBurger.svg';
import cross from './cross.svg';
import favourites from './Favourites.svg';
import cart from './Cart.svg';
import { BurgerNavLink } from './BurgerNavLink/BurgerNavLink';

export const BurgerMenu: React.FC = memo(() => {
  return (
    <div className={BurgerSCSS.burger}>
      <div className={BurgerSCSS.burger_header}>
        <Link
          to="/home"
          className={[BurgerSCSS.link, BurgerSCSS.link_logo].join(' ')}
        >
          <img src={logo} alt="NiceGadgets" />
        </Link>

        <Link
          to="/"
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
