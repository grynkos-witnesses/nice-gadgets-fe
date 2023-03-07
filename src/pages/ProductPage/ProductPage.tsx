import React, { FC } from 'react';

import s from './ProductPage.module.scss';

export const ProductPage: FC = () => {
  return (
    <div className={s.productPage}>
      <div className="container">
        <h1 className={`page__title ${s.productPage__title}`}>Product page</h1>

        <div className="grid">
          <div
            className="
            grid__item--mobile--1-4
            grid__item--tablet--1-7
            grid__item--desktop--1-12"
          >
            <section className={s.productPage__section}>
              <p>1. Photos block</p>
              <p>more content</p>
              <p>more content</p>
              <p>more content</p>
              <p>more content</p>
              <p>more content</p>
              <p>more content</p>
              <p>more content</p>
            </section>
          </div>

          <div
            className="
            grid__item--mobile--1-4
            grid__item--tablet--8-12
            grid__item--desktop--14-24"
          >
            <section className={s.productPage__section}>
              <p>2. Actions block</p>
              <p>more content</p>
              <p>more content</p>
              <p>more content</p>
              <p>more content</p>
              <p>more content</p>
              <p>more content</p>
              <p>more content</p>
            </section>
          </div>

          <div
            className="
            grid__item--mobile--1-4
            grid__item--tablet--1-12
            grid__item--desktop--1-12"
          >
            <section className={s.productPage__section}>
              <p>3. About block</p>
              <p>more content</p>
              <p>more content</p>
              <p>more content</p>
              <p>more content</p>
              <p>more content</p>
              <p>more content</p>
              <p>more content</p>
              <p>more content</p>
              <p>more content</p>
            </section>
          </div>

          <div
            className="
            grid__item--mobile--1-4
            grid__item--tablet--1-12
            grid__item--desktop--14-24"
          >
            <section className={s.productPage__section}>
              <p>4. TechSpecs block</p>
              <p>more content</p>
              <p>more content</p>
              <p>more content</p>
              <p>more content</p>
              <p>more content</p>
            </section>
          </div>
        </div>

        <section className={s.productPage__section}>
          <p>5. Recommended block</p>
          <p>more content</p>
          <p>more content</p>
          <p>more content</p>
          <p>more content</p>
          <p>more content</p>
          <p>more content</p>
          <p>more content</p>
          <p>more content</p>
          <p>more content</p>
        </section>
      </div>
    </div>
  );
};
