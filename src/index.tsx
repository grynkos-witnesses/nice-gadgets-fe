import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter, Routes, Route, Navigate,
} from 'react-router-dom';
import { App } from './App';
import { NotFoundPage } from './components/NotFoundPage/NotFoundPage';
import { HomePage } from './pages/HomePage';
import { PhonesPage } from './pages/PhonesPage';
import { ProductPage } from './pages/ProductPage';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="*" element={<NotFoundPage />} />

          <Route path="home" element={<Navigate to="../" replace />} />
          <Route index element={<HomePage />} />

          <Route path="phones">
            <Route index element={<PhonesPage />} />
            <Route path=":productId" element={<ProductPage />} />
          </Route>
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
