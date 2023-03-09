import React from 'react';
import { useNavigate } from 'react-router-dom';
import back from '../../icons/back_icon.svg';
import s from './BackButton.module.scss';

export const BackButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <button type="button" onClick={() => navigate(-1)} className={s.backBtn}>
      <img src={back} alt="back icon" className={s.backBtn_link} />
      <span className={s.backBtn_text}>Back</span>
    </button>
  );
};
