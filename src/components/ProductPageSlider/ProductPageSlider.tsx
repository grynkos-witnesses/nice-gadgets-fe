import React from 'react';
import Slider from 'react-slick';

import s from './ProductPageSlider.module.scss';
import bs from './ProductSlider.module.scss';

type Props = {
  images: string[];
  name: string;
};

export const ProductPageSlider: React.FC<Props> = ({ images, name }) => {
  const settings = {
    customPaging: (i = 0) => {
      return <img className="slick-image" src={images[i]} alt={name} />;
    },
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: false,
    draggable: true,
  };

  return (
    <div className={bs.gallery}>
      <div className={s.slider}>
        <Slider className={s.slider__container} {...settings}>
          {images.map((image) => (
            <div className={s.slider__photoContent} key={images.indexOf(image)}>
              <img className={s.slider__photo} src={image} alt={name} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
