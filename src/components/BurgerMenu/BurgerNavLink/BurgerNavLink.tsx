import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import BurgerSCSS from '../BurgerMenu.module.scss';

type Props = {
  to: string;
  text: string;
};

export const BurgerNavLink: React.FC<Props> = memo(({ to, text }) => (
  <NavLink to={to} className={BurgerSCSS.link}>
    {text}
  </NavLink>
));
