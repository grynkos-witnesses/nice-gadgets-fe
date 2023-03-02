import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

import icons from '../../../icons/iconsSprite.svg';
import s from '../Header.module.scss';

interface Props {
  path: string;
  iconId: string;
}

export const HeaderIconLink: FC<Props> = ({ path, iconId }) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) => cn(`${s.header__iconLink}`, { [s.active]: isActive })}
    >
      <svg className={s.header__iconLinkIcon}>
        <use href={`${icons}#${iconId}`} />
      </svg>
    </NavLink>
  );
};
