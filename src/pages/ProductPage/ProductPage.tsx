/* eslint-disable no-console */
import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getOne, getRecomendedProducts } from '../../api/phones';
import { PageSection } from '../../components/PageSection/PageSection';
import { ProductSlider } from '../../components/ProductSlider';
import { FullPhone } from '../../types/FullPhone';

import s from './ProductPage.module.scss';
import { ProductInfo } from '../../components/ProductInfo/ProductInfo';

export const ProductPage: FC = () => {
  const { productId } = useParams();

  const [product, setProduct] = useState<FullPhone | null>(null);

  const loadProduct = async () => {
    const loadedProduct = await getOne(`${productId}`);

    return loadedProduct;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

  useEffect(() => {
    loadProduct().then((loadedProduct) => setProduct(loadedProduct));
  }, [productId]);

  console.log(product);

  return (
    <div className={s.productPage}>
      <div className="container">
        <div className={s.productPage__product}>
          {product && <ProductInfo product={product} />}
        </div>

        <PageSection sectionTitle="You may also like">
          <ProductSlider fetchProducts={getRecomendedProducts} />
        </PageSection>
      </div>
    </div>
  );
};
