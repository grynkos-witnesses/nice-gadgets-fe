import React, { FC } from 'react';
import Slider from 'react-slick';

import s from './Gallery.module.scss';

interface Props {
  images: string[];
}

export const Gallery: FC<Props> = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    // beforeChange: function(currentSlide, nextSlide) {
    //   console.log("before change", currentSlide, nextSlide);
    // },
    // afterChange: function(currentSlide) {
    //   console.log("after change", currentSlide);
    // }
  };

  return (
    <div className={s.gallery}>
      <div className={s.gallery__thumbnails}>
        <Slider {...sliderSettings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    </div>
  );
};
