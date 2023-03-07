/* eslint-disable no-debugger */
import React, { FC, useEffect, useState } from 'react';

import { Phone } from '../../types/Phone';
import { Card } from '../Card';

import prevIcon from '../../icons/prev_icon.svg';
import nextIcon from '../../icons/next_icon.svg';
import s from './ProductSlider.module.scss';
import { useLocalStorage } from '../../hooks/useLocalStorage';

interface Props {
  fetchProducts: () => Promise<Phone[]>
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
  const maxTranslate = (cards.length * stepSize);

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

  const getCards = async () => {
    const loadedCards = await fetchProducts();

    if (loadedCards) {
      setCards(loadedCards);
    }
  };

  useEffect(() => {
    getCards();
  }, []);

  if (cards.length) {
    debugger;
  }

  const goBack = () => {
    setTranslate((prev) => {
      return ((prev + stepSize) <= 0)
        ? (prev + stepSize)
        : 0;
    });
  };

  return (
    <section className={s.slider}>
      <div className={s.scroll}>
        <div className={s.scroll__container}>
          <button
            type="button"
            className={s.scroll__button}
            onClick={() => {
              if (translate < 0) {
                goBack();
              }
            }}
          >
            <img src={prevIcon} alt="arrow" className={s.scroll__image} />
          </button>

          <button
            type="button"
            className={s.scroll__button}
            onClick={() => {
              if (translate < maxTranslate) {
                setTranslate((prev) => prev - stepSize);
              }
            }}
          >
            <img src={nextIcon} alt="arrow" className={s.scroll__image} />
          </button>
        </div>
      </div>

      <div className={s.slider__container}>
        <div className={s.slider__content} style={styles}>
          {cards.map((card) => {
            const isInCart = Boolean(cart.find((el) => el.id === card.id));
            const isInFavorites = Boolean(
              favorites.find((el) => el.id === card.id),
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
