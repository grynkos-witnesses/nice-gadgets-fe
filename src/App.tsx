import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import './App.scss';
import { BurgerMenu } from './components/BurgerMenu/BurgerMenu';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';

export const App: React.FC = () => {
  const { hash } = useLocation();

  const isMenuOpen = hash.includes('#menu');

  return (
    <div className="App">
      {isMenuOpen && <BurgerMenu />}
      <Header />
      <main className="App_content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
