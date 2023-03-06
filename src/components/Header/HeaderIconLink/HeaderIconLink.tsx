/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

import icons from '../../../icons/iconsSprite.svg';
import s from '../Header.module.scss';

interface Props {
  path: string;
  iconId: string;
  amount?: number;
}

export const HeaderIconLink: FC<Props> = ({ path, iconId, amount }) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) => cn(`${s.header__iconLink}`, { [s.active]: isActive })}
    >
      {Boolean(amount) && <span className={s.header__counter}>{amount}</span>}
      <svg className={s.header__iconLinkIcon}>
        <use href={`${icons}#${iconId}`} />
      </svg>
    </NavLink>
  );
};
