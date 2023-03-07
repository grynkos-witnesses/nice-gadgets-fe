import React, { memo } from 'react';
import { Link } from 'react-router-dom';
// import emptyCart from '../../icons/emptyCart.svg';

import s from './EmptyMessage.module.scss';

interface Props {
  svg: string;
  btnText: string;
}

export const EmptyMessage: React.FC<Props> = memo(({ svg, btnText }) => {
  return (
    <div className={s.container}>
      <div className={s.container__inner}>
        <img src={svg} alt="EmptySpace" className={s.illustration} />
        <p className={s.text}>Looks like it is empty 🥲</p>
      </div>
      <Link to="/phones" className={s.btn}>
        {btnText}
      </Link>
    </div>
  );
});
