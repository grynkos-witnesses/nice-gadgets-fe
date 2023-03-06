import React from 'react';
import { Swiper } from '../../components/Swiper';
import s from './HomePage.module.scss';

export const HomePage = () => {
  return (
    <div className={s.homePage}>
      <div className="container">
        <h1 className={s.title}>Welcome to Nice Gadgets store!</h1>
      </div>

      <div className={s.homePage__mainSlider}>
        <Swiper />
      </div>

      <div className="container">Bla-bla-blas</div>
    </div>
  );
};
