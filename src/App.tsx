import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import './App.scss';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { BurgerMenu } from './components/BurgerMenu/BurgerMenu';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';

export const App: React.FC = () => {
  const { hash } = useLocation();

  const isMenuOpen = hash.includes('#menu');

  if (isMenuOpen) {
    document.body.classList.add('App__body--with-menu');
  } else {
    document.body.classList.remove('App__body--with-menu');
  }

  return (
    <div className="App">
      <div className="App__header">
        <BurgerMenu isVisible={isMenuOpen} />
        <Header />
      </div>
      <main className="App_content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
