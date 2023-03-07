import React, { useEffect, useState } from 'react';

import { Phone } from '../../types/Phone';
import { Card } from '../Card';

import { getNewestProducts } from '../../api/phones';

import prevIcon from '../../icons/prev_icon.svg';
import nextIcon from '../../icons/next_icon.svg';
import s from './ProductSlider.module.scss';
import { useLocalStorage } from '../../hooks/useLocalStorage';

export const ProductSlider: React.FC = () => {
  const [cards, setCards] = useState<Phone[]>([]);
  const [position, setPosition] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [cardCount, setCardCount] = useState(0);
  const [cart, favorites] = useLocalStorage();

  const styles = {
    transform: `translate(${position}px)`,
    transition: 'transform 0.5s',
  };

  const windowWidth = window.innerWidth;

  useEffect(() => {
    if (windowWidth >= 1200) {
      setCardWidth(272 + 16);
    }

    if (windowWidth < 1200) {
      setCardWidth(237 + 16);
    }

    if (windowWidth < 640) {
      setCardWidth(212 + 16);
    }
  }, []);

  const getCards = async () => {
    const loadedCards = await getNewestProducts();

    if (loadedCards) {
      setCards(loadedCards);
    }
  };

  useEffect(() => {
    getCards();
  }, []);

  return (
    <section className={s.slider}>
      <div className={s.scroll}>
        <div className={s.scroll__container}>
          <button
            type="button"
            className={s.scroll__button}
            onClick={() => {
              if (cardCount > 0) {
                setPosition((prev) => prev + cardWidth);
                setCardCount((prev) => prev - 1);
              }
            }}
          >
            <img src={prevIcon} alt="arrow" className={s.scroll__image} />
          </button>

          <button
            type="button"
            className={s.scroll__button}
            onClick={() => {
              if (cardCount < 6) {
                setPosition((prev) => prev - cardWidth);
                setCardCount((prev) => prev + 1);
              }
            }}
          >
            <img src={nextIcon} alt="arrow" className={s.scroll__image} />
          </button>
        </div>
      </div>

      <div className={s.slider__container}>
        <div className={s.slider__content} style={styles}>
          {cards.map(card => {
            const isInCart = Boolean(cart.find((el) => el.id === card.id));
            const isInFavorites = Boolean(
              favorites.find((el) => el.id === card.id),
            );

            return (
              <div key={card.id} className={s.slider__item}>
                <Card product={card} isInCart={isInCart} isInFavorites={isInFavorites} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
