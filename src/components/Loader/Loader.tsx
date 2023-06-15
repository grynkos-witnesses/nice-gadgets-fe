import React, { FC } from 'react';
import cn from 'classnames';
import s from './Loader.module.scss';

type Props = {
  type?: 'fullscreen' | 'local';
};

export const Loader: FC<Props> = ({ type = 'fullscreen' }) => (
  <div className={cn({ [s.loader]: type === 'fullscreen' })}>
    <div className={s.loader__content} />
  </div>
);
