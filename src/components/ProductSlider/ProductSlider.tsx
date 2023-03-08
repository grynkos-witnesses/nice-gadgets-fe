import React, { FC, useEffect, useState } from 'react';

import { Notify } from 'notiflix';
import { Phone } from '../../types/Phone';
import { Card } from '../Card';

import icons from '../../icons/iconsSprite.svg';
import s from './ProductSlider.module.scss';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { IconButton } from '../IconButton/IconButton';

interface Props {
  fetchProducts: () => Promise<Phone[]>;
}

export const ProductSlider: FC<Props> = ({ fetchProducts }) => {
  const [cards, setCards] = useState<Phone[]>([]);
  const [translate, setTranslate] = useState(0);
  const [stepSize, setStepSize] = useState(0);
  const [cart, favorites] = useLocalStorage();

  const styles = {
    transform: `translateX(${translate}px)`,
    transition: 'transform 0.3s ease-in-out',
  };

  const windowWidth = window.innerWidth;
  const viewport = document.querySelector(`.${s.slider__content}`);
  let viewportWidth = 0;

  if (viewport) {
    viewportWidth = parseFloat(getComputedStyle(viewport).width) || 0;
  }

  const maxTranslate = cards.length * stepSize - viewportWidth;

  useEffect(() => {
    if (windowWidth >= 1200) {
      setStepSize(272 + 16);
    }

    if (windowWidth < 1200) {
      setStepSize(237 + 16);
    }

    if (windowWidth < 640) {
      setStepSize(212 + 16);
    }
  }, []);

  const getProdducts = async () => {
    try {
      const loadedCards = await fetchProducts();

      setCards(loadedCards);
    } catch (error) {
      Notify.failure('Cant load data');
    }
  };

  useEffect(() => {
    getProdducts();
  }, []);

  const goBack = () => {
    setTranslate((prev) => {
      return prev + stepSize <= 0 ? prev + stepSize : 0;
    });
  };

  const goNext = () => {
    setTranslate((prev) => {
      return prev - stepSize > -maxTranslate ? prev - stepSize : -maxTranslate;
    });
  };

  return (
    <section className={s.slider}>
      <div className={s.scroll}>
        <div className={s.scroll__container}>
          <IconButton disabled={translate === 0} onClick={goBack}>
            <use href={`${icons}#icon-Chevron-Arrow-Left`} />
          </IconButton>

          <IconButton disabled={translate <= -maxTranslate} onClick={goNext}>
            <use href={`${icons}#icon-Chevron-Arrow-Right`} />
          </IconButton>
        </div>
      </div>

      <div className={s.slider__container}>
        <div className={s.slider__content} style={styles}>
          {cards.map((card) => {
            const isInCart = Boolean(cart.find((el) => el.id === card.phoneId));
            const isInFavorites = Boolean(
              favorites.find((el) => el.id === card.phoneId),
            );

            return (
              <div key={card.id} className={s.slider__item}>
                <Card
                  product={card}
                  isInCart={isInCart}
                  isInFavorites={isInFavorites}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
