import React, { FC } from 'react';
import s from './IconButton.module.scss';

interface Props {
  onClick: () => void;
  disabled?: boolean;
}

export const IconButton: FC<Props> = ({
  onClick,
  children,
  disabled = false,
}) => {
  return (
    <button
      type="button"
      className={s.iconBtn}
      onClick={onClick}
      disabled={disabled}
    >
      <svg className={s.iconBtn_icon}>{children}</svg>
    </button>
  );
};
