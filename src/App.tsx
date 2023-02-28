import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.scss';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Card } from './components/Card';

export const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <main className="App_content">
        <Outlet />
        <Card />
      </main>
      <Footer />
    </div>
  );
};
