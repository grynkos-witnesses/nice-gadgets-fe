import React, { FC } from 'react';
import s from './IconButton.module.scss';

interface Props {
  onClick: () => void;
}

export const IconButton: FC<Props> = ({ onClick, children }) => {
  return (
    <button type="button" className={s.card__buy__heart} onClick={onClick}>
      {children}
    </button>
  );
};
