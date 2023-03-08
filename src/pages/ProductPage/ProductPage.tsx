/* eslint-disable no-console */
import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getOne, getRecomendedProducts } from '../../api/phones';
import { Loader } from '../../components/Loader/Loader';
import { PageSection } from '../../components/PageSection/PageSection';
import { ProductAbout } from '../../components/ProductAbout/ProductAbout';
import { ProductDescription } from '../../components/ProductDescription/ProductDescription';
import { ProductSlider } from '../../components/ProductSlider';
import { ProductTechSpecs } from '../../components/ProductTechSpecs/ProductTechSpecs';
import { FullPhone } from '../../types/FullPhone';

import s from './ProductPage.module.scss';

export const ProductPage: FC = () => {
  const { productId } = useParams();

  const [product, setProduct] = useState<FullPhone | null>(null);

  const loadProduct = async () => {
    const data = await getOne(`${productId}`);

    return data;
  };

  useEffect(() => {
    loadProduct().then((loadedProduct) => setProduct(loadedProduct));
  }, [productId]);

  console.log(product);

  if (product) {
    const {
      // id,
      // namespaceId,
      // name,
      // capacityAvailable,
      capacity,
      // priceRegular,
      // priceDiscount,
      // colorsAvailable,
      // color,
      // images,
      // description,
      screen,
      resolution,
      processor,
      ram,
      camera,
      zoom,
      cell,
    } = product;

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
              <ProductDescription sectionTitle="About">
                {product?.description && (
                  <ProductAbout description={product?.description} />
                )}
              </ProductDescription>
            </section>
          </div>

            <div
              className="
            grid__item--mobile--1-4
            grid__item--tablet--1-12
            grid__item--desktop--14-24"
            >
              <section>
                <ProductDescription sectionTitle="TechSpecs block">
                  <ProductTechSpecs
                    specs={
                      {
                        screen,
                        resolution,
                        processor,
                        ram,
                        capacity,
                        camera,
                        zoom,
                        cell,
                      }
                    }
                  />
                </ProductDescription>
                {/* <p>4. TechSpecs block</p>
              <p>more content</p>
              <p>more content</p>
              <p>more content</p>
              <p>more content</p>
              <p>more content</p> */}
              </section>
            </div>
          </div>

          <PageSection sectionTitle="You may also like">
            <ProductSlider fetchProducts={getRecomendedProducts} />
          </PageSection>
        </div>
      </div>
    );
  }

  return <Loader />;
};
