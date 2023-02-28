import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

import s from './HeaderNavLink.module.scss';

interface Props {
  path: string;
  text: string;
}

export const HeaderNavLink: FC<Props> = ({ path, text }) => {
  return (
    <NavLink to={path} className={`${s.headerNavLink}`}>
      {text}
    </NavLink>
  );
};
