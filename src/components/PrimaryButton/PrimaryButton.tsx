import React, { FC } from 'react';

import s from './PrimaryButton.module.scss';

interface Props {
  onClick?: () => void
}

export const PrimaryButton: FC<Props> = ({ onClick, children }) => {
  return (
    <button type="button" onClick={onClick} className={s.primaryBtn}>
      {children}
    </button>
  );
};
