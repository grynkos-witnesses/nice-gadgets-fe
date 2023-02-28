import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

import s from './HeaderNavLink.module.scss';

interface Props {
  path: string;
  text: string;
}

export const HeaderNavLink: FC<Props> = ({ path, text }) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) => cn(`${s.headerNavLink}`, { [s.active]: isActive })}
    >
      {text}
    </NavLink>
  );
};
