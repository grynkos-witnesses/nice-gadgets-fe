import React, { memo } from 'react';
import s from './SuccessMessageModal.module.scss';

export const SuccessMessageModal: React.FC = memo(() => {
  return (
    <div className={s.modal}>
      <p className={s.text}>Thanks for your purchase!</p>
    </div>
  );
});
