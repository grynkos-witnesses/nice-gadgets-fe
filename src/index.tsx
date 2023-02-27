import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter, Routes, Route, Navigate,
} from 'react-router-dom';
import { App } from './App';
import { HomePage } from './pages/HomePage';
import { PhonesPage } from './pages/PhonesPage';
import { ProductPage } from './pages/ProductPage';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="*" element={<h1 className="title">Page not found</h1>} />

          <Route path="home" element={<Navigate to="../" replace />} />
          <Route index element={<HomePage />} />

          <Route path="phones">
            <Route index element={<PhonesPage />} />
            <Route path=":productId" element={<ProductPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
