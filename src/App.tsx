import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.scss';
import { Footer } from './components/Footer/Footer';

export const App: React.FC = () => {
  return (
    <div className="App">
      <main className="App_content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
