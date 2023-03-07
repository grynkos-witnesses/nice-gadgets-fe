import React, { FC } from 'react';

import s from './ActiveButton.module.scss';

interface Props {
  onClick?: () => void;
}

export const ActiveButton: FC<Props> = ({ onClick, children }) => {
  return (
    <button type="button" onClick={onClick} className={s.activeBtn}>
      {children}
    </button>
  );
};
