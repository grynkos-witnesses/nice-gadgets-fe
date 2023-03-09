import React, { FC } from 'react';
import { FullPhone } from '../../types/FullPhone';
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import { PhoneActions } from '../PhoneActions/PhoneActions';
import { ProductAbout } from '../ProductAbout/ProductAbout';
import { ProductDescription } from '../ProductDescription/ProductDescription';
import { ProductTechSpecs } from '../ProductTechSpecs/ProductTechSpecs';

import s from './ProductInfo.module.scss';

interface Props {
  product: FullPhone;
}

export const ProductInfo: FC<Props> = ({ product }) => {
  const {
    // id,
    // namespaceId,
    name,
    // capacityAvailable,
    capacity,
    // priceRegular,
    // priceDiscount,
    // colorsAvailable,
    // color,
    // images,
    description,
    screen,
    resolution,
    processor,
    ram,
    camera,
    zoom,
    cell,
  } = product;

  return (
    <div className={s.productInfo}>
      <Breadcrumbs location={['/', '/phones', `/${name}`]} />

      <h1 className={`page__title ${s.productInfo__title}`}>{name}</h1>

      <div className={`grid ${s.productInfo__grid}`}>
        <div
          className="
            grid__item--mobile--1-4
            grid__item--tablet--1-7
            grid__item--desktop--1-12"
        >
          <section>
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
          <PhoneActions phone={product} />
        </div>

        <div
          className="
            grid__item--mobile--1-4
            grid__item--tablet--1-12
            grid__item--desktop--1-12"
        >
          <ProductDescription sectionTitle="About">
            {description && <ProductAbout description={description} />}
          </ProductDescription>
        </div>

        <div
          className="
            grid__item--mobile--1-4
            grid__item--tablet--1-12
            grid__item--desktop--14-24"
        >
          <ProductDescription sectionTitle="TechSpecs block">
            <ProductTechSpecs
              specs={{
                screen,
                resolution,
                processor,
                ram,
                capacity,
                camera,
                zoom,
                cell,
              }}
            />
          </ProductDescription>
        </div>
      </div>
    </div>
  );
};
