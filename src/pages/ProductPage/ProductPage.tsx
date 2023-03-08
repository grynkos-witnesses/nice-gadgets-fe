/* eslint-disable no-console */
import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getOne, getRecomendedProducts } from '../../api/phones';
import { PageSection } from '../../components/PageSection/PageSection';
import { ProductSlider } from '../../components/ProductSlider';
import { FullPhone } from '../../types/FullPhone';

import s from './ProductPage.module.scss';

export const ProductPage: FC = () => {
  const { productId } = useParams();

  const [product, setProduct] = useState<FullPhone | null>(null);

  const loadProduct = async () => {
    const data = await getOne(`${productId}`);

    return data[0];
  };

  useEffect(() => {
    loadProduct().then((loadedProduct) => setProduct(loadedProduct));
  }, [productId]);

  console.log(product);

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

        <PageSection sectionTitle="You may also like">
          <ProductSlider fetchProducts={getRecomendedProducts} />
        </PageSection>
      </div>
    </div>
  );
};
