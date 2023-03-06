import React from 'react';
import { Swiper } from '../../components/Swiper';
import s from './HomePage.module.scss';

export const HomePage = () => {
  return (
    <div className={s.homePage}>
      <div className={s.container}>
        <h1 className={s.title}>Welcome to Nice Gadgets store!</h1>

        <Swiper />
      </div>
    </div>
  );
};
