import React, { FC } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';

import s from './PrimaryButton.module.scss';

interface Props {
  onClick?: () => void;
  id?: string;
}

export const PrimaryButton: FC<Props> = ({ onClick, id, children }) => {
  const [cart] = useLocalStorage();

  const isActive = Boolean(cart.find((el) => el.id === id));

  return !isActive ? (
    <button type="button" onClick={onClick} className={s.primaryBtn}>
      {children}
    </button>
  ) : (
    <button
      type="button"
      onClick={onClick}
      className={[s.primaryBtn, s.active].join(' ')}
    >
      {children}
    </button>
  );
};
