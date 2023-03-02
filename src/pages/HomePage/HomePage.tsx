import React from 'react';
import s from './HomePage.module.scss';

export const HomePage = () => {
  return (
    <div className={s.homePage}>
      <div className="container">
        <h1 className="page__title">Welcome to Nice Gadgets store!</h1>
      </div>
    </div>
  );
};
