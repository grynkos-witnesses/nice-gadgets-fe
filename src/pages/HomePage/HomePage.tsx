import React from 'react';
import { Categories } from '../../components/Categories';
import { Gallery } from '../../components/Gallery/Gallery';
import { PageSection } from '../../components/PageSection/PageSection';
import { ProductSlider } from '../../components/ProductSlider';
import { Swiper } from '../../components/Swiper';

import s from './HomePage.module.scss';

export const HomePage = () => {
  return (
    <div className={s.homePage}>
      <div className="container">
        <h1 className={`page__title ${s.homePage__title}`}>
          Welcome to Nice Gadgets store!
        </h1>
      </div>

      <div className={s.homePage__mainSlider}>
        <Swiper />
      </div>

      <div className="container">
        <div className={s.homePage__section}>
          <PageSection sectionTitle="Brand new models">
            <ProductSlider />
          </PageSection>
        </div>

        <div className={s.homePage__section}>
          <PageSection sectionTitle="Shop by category">
            <Categories />
          </PageSection>
        </div>
        <div className={s.homePage__section}>
          <PageSection sectionTitle="Hot prices">HOT PRISES SLIDER</PageSection>
        </div>
        <Gallery images={[]} />
      </div>
    </div>
  );
};
