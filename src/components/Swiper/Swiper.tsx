import React from 'react';
import Slider from 'react-slick';

import s from './Swiper.module.scss';
import '../../base_styles/utils/_grid.scss';
import bs from './Slider.module.scss';

import mainBanner from '../../mock_data/img/mainBanner-mobile.png';
import banner1 from '../../mock_data/img/banner-phones.png';
import banner2 from '../../mock_data/img/banner-tablets.png';
import banner3 from '../../mock_data/img/banner-accessories.png';

export const Swiper = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    draggable: true,
    autoplay: true,
    autoplaySpeed: 5000,
    customPaging: () => (
      <div
        className="slick-dot"
        style={{
          width: '14px',
          height: '4px',
        }}
      />
    ),
    responsive: [
      {
        breakpoint: 640,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className={bs.banner}>
      <div className={s.swiper}>
        <Slider {...settings}>
          <img
            className={`${s.swiper__image} ${s.swiper__mainBanner}`}
            src={mainBanner}
            alt="Slider main banner"
          />

          <img
            className={s.swiper__image}
            src={banner1}
            alt="Slider banner 1"
          />

          <img
            className={s.swiper__image}
            src={banner2}
            alt="Slider banner 2"
          />

          <img
            className={s.swiper__image}
            src={banner3}
            alt="Slider banner 3"
          />
        </Slider>
      </div>
    </div>
  );
};
